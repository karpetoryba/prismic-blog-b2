"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";

export type ContactFormProps = SliceComponentProps<Content.ContactWithMeSlice>;

const ContactForm = ({ slice }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="flex items-center justify-center bg-white p-12">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-playfair">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-6">
            Let’s start with some details about you
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
          {success && (
            <p className="text-green-500 mt-4 text-center">
              Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
