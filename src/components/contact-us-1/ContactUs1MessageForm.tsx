"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactUs1MessageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent?.stopImmediatePropagation?.();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      telegram: String(formData.get("telegram") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <>
      <div className="form-block-contacts w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="post"
          className="form-contacts center"
          data-wf-page-id="64943f2a36915879aa1daecb"
          data-wf-element-id="ea41af14-8b87-8ae8-ae5d-f8373dc8aafa"
          onSubmitCapture={handleSubmit}
        >
          <input
            className="contacts-input w-input"
            maxLength={256}
            name="name"
            data-name="Name"
            placeholder="Your Name"
            type="text"
            id="name"
            required
          />
          <div className="contacts-input-row">
            <input
              className="contacts-input w-input"
              maxLength={256}
              name="telegram"
              data-name="Telegram"
              placeholder="Your Telegram (optional)"
              type="text"
              id="telegram"
            />
            <input
              className="contacts-input w-input"
              maxLength={256}
              name="whatsapp"
              data-name="WhatsApp"
              placeholder="Your WhatsApp (optional)"
              type="text"
              id="whatsapp"
            />
          </div>
          <textarea
            placeholder="Message"
            maxLength={5000}
            id="message"
            name="message"
            data-name="Message"
            required
            className="contacts-textarea w-input contact-message-textarea"
          />
          <input
            type="submit"
            data-wait="Please wait..."
            className="primary-button full-width-mobile w-button"
            value={isSubmitting ? "Sending..." : "Submit"}
            disabled={isSubmitting}
          />
        </form>
        <div
          className="success-message w-form-done"
          style={{ display: isSuccess ? "block" : "none" }}
          aria-live="polite"
        >
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div
          className="error-message w-form-fail"
          style={{ display: isError ? "block" : "none" }}
          aria-live="polite"
        >
          <div>
            {errorMessage || "Oops! Something went wrong while submitting the form."}
          </div>
        </div>
      </div>
      <div id="contact-form" style={{ height: "1px" }}></div>
    </>
  );
}
