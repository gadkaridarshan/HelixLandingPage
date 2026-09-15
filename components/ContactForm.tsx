"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-success">
        <CheckCircle className="contact-success-icon" aria-hidden="true" />
        <h3 className="contact-success-title">Message sent successfully!</h3>
        <p className="contact-success-text">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Name <span className="form-required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email <span className="form-required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="form-input form-select"
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="sales">Sales &amp; Pricing</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Message <span className="form-required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          rows={5}
          className="form-input form-textarea"
          required
        />
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          Please fill in all required fields.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="btn-icon btn-icon-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="btn-icon" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}