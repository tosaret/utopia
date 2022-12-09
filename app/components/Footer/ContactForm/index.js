import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./index.module.scss";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xdojqpab");

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.formItem}>
        <textarea
          id="message"
          name="message"
          placeholder="Your idea"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className={(styles.formItem, styles.formCheckbox)}>
        <label>
          <input type="checkbox" />
          <span></span>I am consent to processing of my personal data by Utopia
          Ultimate Software Solutions Sp. z o.o. in the scope provided in the
          above form in order to reply to my message.*
        </label>
      </div>
      <button type="submit" disabled={state.submitting}>
        {state.submitting && "Submitting..."}
        {!state.submitting && "Submit"}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default ContactForm;
