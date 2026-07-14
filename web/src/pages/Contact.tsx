import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink">تواصل معنا</h1>
      <p className="mt-2 text-ink/70">اترك بياناتك وسيتواصل معك أحد مستشارينا العقاريين.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          name="name"
          required
          placeholder="الاسم الكامل"
          className="w-full rounded-md border border-ink/20 bg-white px-4 py-3 outline-none focus:border-brass"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="البريد الإلكتروني"
          className="w-full rounded-md border border-ink/20 bg-white px-4 py-3 outline-none focus:border-brass"
        />
        <input
          name="phone"
          placeholder="رقم الهاتف"
          className="w-full rounded-md border border-ink/20 bg-white px-4 py-3 outline-none focus:border-brass"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="رسالتك"
          className="w-full rounded-md border border-ink/20 bg-white px-4 py-3 outline-none focus:border-brass"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-stone transition-transform hover:scale-105 disabled:opacity-50"
        >
          {status === "sending" ? "جاري الإرسال..." : "إرسال"}
        </button>

        {status === "sent" && <p className="text-pine">تم استلام رسالتك، سنتواصل معك قريبًا.</p>}
        {status === "error" && <p className="text-red-600">حدث خطأ، حاول مرة أخرى.</p>}
      </form>
    </div>
  );
}
