import { useState } from "react";

import styles from "./index.module.scss";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [sendInProgress, setSendInProgress] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSendInProgress(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        setSendInProgress(false);
        setMessageSent(true);
      })
      .catch((err) => {
        console.log(err);
        setSendInProgress(false);
        setMessageSent(true);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <input
          type="email"
          required
          placeholder="Email address"
          onChange={() => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.formItem}>
        <textarea
          required
          placeholder="Your idea"
          onChange={() => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className={(styles.formItem, styles.formCheckbox)}>
        <label>
          <input type="checkbox" />
          <span></span>I am consent to processing of my personal data by Utopia
          Ultimate Software Solutions Sp. z o.o. in the scope provided in the
          above form in order to reply to my message.*
        </label>
      </div>
      <button type="submit">
        {sendInProgress && "Sending..."}
        {messageSent && "Sent"}
        {!sendInProgress && !messageSent && "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
