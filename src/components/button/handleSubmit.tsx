type FormData = {
  nom: string;
  email: string;
  note: string;
};

export const handleSubmit = async (formData: FormData): Promise<string> => {
  try {
    // Send form data to the API endpoint
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form");
    }

    // Return success message
    return "Form submitted successfully!";
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("There was an error submitting the form");
  }
};
