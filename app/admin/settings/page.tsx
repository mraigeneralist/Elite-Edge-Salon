"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({ clinic_name: "", clinic_phone: "", clinic_address: "", dentist_whatsapp: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetchSettings(); }, []);

  async function fetchSettings() {
    setLoading(true);
    const res = await fetch("/api/admin/settings");
    const data = await res.json();
    if (data.settings) {
      setForm({ clinic_name: data.settings.clinic_name || "", clinic_phone: data.settings.clinic_phone || "", clinic_address: data.settings.clinic_address || "", dentist_whatsapp: data.settings.dentist_whatsapp || "" });
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  if (loading) {
    return <div className="p-12 text-center"><div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto" /></div>;
  }

  const inputClass = "w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground";

  return (
    <div>
      <h1 className="text-2xl font-display font-medium text-foreground mb-6">Salon Settings</h1>

      <div className="bg-surface rounded-xl border border-border p-6 max-w-2xl">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Salon Name</label>
            <input type="text" value={form.clinic_name} onChange={(e) => setForm({ ...form, clinic_name: e.target.value })} placeholder="Elite Edge Salon" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Salon Phone</label>
            <input type="tel" value={form.clinic_phone} onChange={(e) => setForm({ ...form, clinic_phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Salon Address</label>
            <textarea value={form.clinic_address} onChange={(e) => setForm({ ...form, clinic_address: e.target.value })} placeholder="456 Luxe Avenue, City, State" rows={3} className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Stylist WhatsApp Number</label>
            <input type="tel" value={form.dentist_whatsapp} onChange={(e) => setForm({ ...form, dentist_whatsapp: e.target.value })} placeholder="919876543210" className={inputClass} />
            <p className="text-xs text-muted-foreground mt-1">Include country code without + (e.g., 919876543210). This is where booking notifications will be sent.</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button onClick={handleSave} disabled={saving} className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-background px-6 py-2.5 font-semibold text-[12px] tracking-[0.1em] uppercase transition-all flex items-center gap-2">
            {saving ? (<><div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />Saving...</>) : "Save Settings"}
          </button>
          {saved && <span className="text-sm text-success font-medium">Settings saved successfully!</span>}
        </div>
      </div>
    </div>
  );
}
