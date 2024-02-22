import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../animation/done.json";
import contactAnimation from "../animation/contact.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgvvdlo");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "xxxx",
        "xxxx",
        form.current,
        "xxxx"
      )
      .then(
        (result) => {
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contactez-moi
      </h1>
      <p className="sub-title">
      Contactez-nous pour plus d'informations.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form  ref={form} onSubmit={sendEmail} className="">
          <div className="flex">
            <label htmlFor="email">Adresse e-mail:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Votre message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
