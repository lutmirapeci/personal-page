import React, { useState } from "react";
// libs
import { useForm } from "@formspree/react";
// components
import CustomInput from "../components/Input";
import TextArea from "../components/TextArea";

function ContactForm() {
  const [state, handleSubmit] = useForm("manekelz");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return (
      <section className="bg-dark text-white py-3" id="contact">
        <div className="wrap text-center">
          <h2 className="fw-bold mb-4">Contact Me</h2>
          <p className="fs-5">
            Thanks for your message! I'll get back to you soon. 😊
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dark text-white py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <CustomInput
                id="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                errors={state.errors}
              />
              <CustomInput
                id="surname"
                label="Surname"
                type="text"
                value={formData.surname}
                onChange={handleChange}
                errors={state.errors}
              />
              <CustomInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                errors={state.errors}
              />

              <TextArea
                id="message"
                label="Message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                errors={state.errors}
                rows={5}
              />

              <button
                type="submit"
                className="btn custom-btn px-4 py-2"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
