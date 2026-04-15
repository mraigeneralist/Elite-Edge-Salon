"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { supabase } from "@/lib/supabase";
import { Service } from "@/lib/types";
import StepIndicator from "@/components/booking/StepIndicator";
import ServiceStep from "@/components/booking/ServiceStep";
import DateStep from "@/components/booking/DateStep";
import TimeSlotStep from "@/components/booking/TimeSlotStep";
import ClientDetailsStep from "@/components/booking/ClientDetailsStep";
import OTPStep from "@/components/booking/OTPStep";
import ConfirmationStep from "@/components/booking/ConfirmationStep";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [availableDays, setAvailableDays] = useState<number[]>([]);

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [appointmentId, setAppointmentId] = useState<string | null>(null);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [confirmedAppointment, setConfirmedAppointment] = useState<{
    id: string;
    serviceName: string;
    date: string;
    time: string;
    patientName: string;
  } | null>(null);

  const [animating, setAnimating] = useState(false);
  const pendingStep = useRef<number | null>(null);

  const goToStep = useCallback((nextStep: number) => {
    if (animating) return;
    setAnimating(true);
    pendingStep.current = nextStep;
    setTimeout(() => {
      setStep(nextStep);
      pendingStep.current = null;
      requestAnimationFrame(() => {
        setAnimating(false);
      });
    }, 200);
  }, [animating]);

  useEffect(() => {
    async function loadData() {
      const [servicesRes, blockedRes, availRes] = await Promise.all([
        supabase
          .from("services")
          .select("*")
          .eq("is_active", true)
          .order("sort_order"),
        supabase.from("blocked_dates").select("date"),
        supabase.from("availability").select("day_of_week").eq("is_active", true),
      ]);

      if (servicesRes.data) setServices(servicesRes.data as Service[]);
      if (blockedRes.data)
        setBlockedDates(blockedRes.data.map((b) => b.date));
      if (availRes.data)
        setAvailableDays([
          ...new Set(availRes.data.map((a) => a.day_of_week)),
        ]);
    }
    loadData();
  }, []);

  const fetchSlots = useCallback(async (date: Date, serviceId: string) => {
    setSlotsLoading(true);
    setSlots([]);
    setSelectedTime(null);
    const dateStr = format(date, "yyyy-MM-dd");
    const res = await fetch(
      `/api/booking/slots?date=${dateStr}&service_id=${serviceId}`
    );
    const data = await res.json();
    setSlots(data.slots || []);
    setSlotsLoading(false);
  }, []);

  const handleServiceSelect = (service: Service) => {
    if (selectedService?.id === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null);
    if (date && selectedService) fetchSlots(date, selectedService.id);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(selectedTime === time ? null : time);
  };

  const handleBookingSubmit = async () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    setBookingLoading(true);
    setBookingError(null);

    const phone = patientPhone.startsWith("+91") || patientPhone.startsWith("91")
      ? patientPhone
      : "91" + patientPhone;

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: selectedService.id,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        patient_name: patientName,
        patient_phone: phone,
      }),
    });

    const data = await res.json();
    setBookingLoading(false);

    if (data.success) {
      setAppointmentId(data.appointmentId);
      goToStep(5);
    } else {
      setBookingError(data.error || "Something went wrong");
    }
  };

  const handleOTPVerify = async (otp: string) => {
    setOtpLoading(true);
    setOtpError(null);

    const res = await fetch("/api/booking/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appointmentId, otp }),
    });

    const data = await res.json();
    setOtpLoading(false);

    if (data.success) {
      setConfirmedAppointment(data.appointment);
      goToStep(6);
    } else {
      setOtpError(data.error || "Invalid OTP");
    }
  };

  const handleResendOTP = async () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    const phone = patientPhone.startsWith("+91") || patientPhone.startsWith("91")
      ? patientPhone
      : "91" + patientPhone;

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: selectedService.id,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        patient_name: patientName,
        patient_phone: phone,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setAppointmentId(data.appointmentId);
    }
  };

  const canGoBack = step > 1 && step < 6;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary/40 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.813 15.904 3.09-8.808m-3.09 8.808L3.312 9.488a1.5 1.5 0 0 1 .64-2.028l6.375-3.188a1.5 1.5 0 0 1 1.346 0l6.375 3.188a1.5 1.5 0 0 1 .64 2.028l-6.5 6.416a1.5 1.5 0 0 1-2.376 0Z"
                />
              </svg>
            </div>
            <span className="text-lg font-display font-semibold tracking-wide">
              ELITE <span className="text-primary">EDGE</span>
            </span>
          </Link>

          {canGoBack ? (
            <button
              onClick={() => goToStep(step - 1)}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </button>
          ) : step === 1 ? (
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Home
            </Link>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <StepIndicator current={step} />

        <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
          <div
            className={`transition-all duration-200 ${
              animating
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {step === 1 && (
              <ServiceStep
                services={services}
                selected={selectedService}
                onSelect={handleServiceSelect}
                onNext={() => selectedService && goToStep(2)}
              />
            )}

            {step === 2 && (
              <DateStep
                selected={selectedDate}
                onSelect={handleDateSelect}
                onNext={() => selectedDate && goToStep(3)}
                blockedDates={blockedDates}
                availableDays={availableDays}
              />
            )}

            {step === 3 && (
              <TimeSlotStep
                slots={slots}
                selected={selectedTime}
                onSelect={handleTimeSelect}
                onNext={() => selectedTime && goToStep(4)}
                loading={slotsLoading}
              />
            )}

            {step === 4 && (
              <ClientDetailsStep
                name={patientName}
                phone={patientPhone}
                onNameChange={setPatientName}
                onPhoneChange={setPatientPhone}
                onSubmit={handleBookingSubmit}
                loading={bookingLoading}
                error={bookingError}
              />
            )}

            {step === 5 && (
              <OTPStep
                phone={patientPhone}
                onVerify={handleOTPVerify}
                onResend={handleResendOTP}
                loading={otpLoading}
                error={otpError}
              />
            )}

            {step === 6 && confirmedAppointment && (
              <ConfirmationStep appointment={confirmedAppointment} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
