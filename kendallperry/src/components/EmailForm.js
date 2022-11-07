import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

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
          window.alert("Message Sent!")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Write a Message</label>
        <textarea name="message" />
        <input id="submitButton" type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default EmailForm;

const StyledContactForm = styled.div`
  width: 45%;
  margin-left: 28%;
  padding-bottom: 3em;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #efb851;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #efb851;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgba(148, 187, 233, 0.6237088585434174);
      color: white;
      border: none;
    }
  }
`;
