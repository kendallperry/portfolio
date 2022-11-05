import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// const serviceID = process.env.SERVICE_ID;
// const templateID = process.env.TEMPLATE_ID;

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ies3hk9",
        "template_ybfeir1",
        form.current,
        "F04NJhhMk1fCw-mVj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;
