import React from "react";
// libs
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("manekelz");

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
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control bg-dark text-white border border-light"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="surname" className="form-label fw-semibold">
                  Surname
                </label>
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  className="form-control bg-dark text-white border border-light"
                  required
                />
                <ValidationError
                  prefix="Surname"
                  field="surname"
                  errors={state.errors}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control bg-dark text-white border border-light"
                  placeholder="you@example.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control bg-dark text-white border border-light"
                  rows="5"
                  placeholder="Your message..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

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
