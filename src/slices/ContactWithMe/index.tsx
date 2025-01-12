"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState, JSX } from "react";

import styles from "./index.module.css";
import { handleSubmit } from "@/components/button/handleSubmit";

/**
 * Props for `ContactWithMe`.
 */
export type ContactWithMeProps =
  SliceComponentProps<Content.ContactWithMeSlice>;

/**
 * Component for "ContactWithMe" Slices.
 */
const ContactWithMe = ({ slice }: ContactWithMeProps): JSX.Element => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    note: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const resultMessage = await handleSubmit(formData);
      setStatus("success");
      setMessage(resultMessage);
      setFormData({ nom: "", email: "", note: "" });
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <section
      className={styles.contactSection}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className={styles.heading}>Contact Us</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            placeholder={slice.primary.nom || "Enter your name"}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder={slice.primary.email || "Enter your email"}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="note" className={styles.label}>
            Message:
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            placeholder={
              slice.primary.note
                ? slice.primary.note[0]?.text || "Enter your message"
                : "Enter your message"
            }
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      {/* Display form submission status */}
      {status === "success" && <p className={styles.success}>{message}</p>}
      {status === "error" && <p className={styles.error}>{message}</p>}
    </section>
  );
};

export default ContactWithMe;
