import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./index.module.scss";

const ContactForm = ({ content, lang }) => {
  const [state, handleSubmit] = useForm("xdojqpab");

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={content.placeholderEmail[lang]}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.formItem}>
        <textarea
          id="message"
          name="message"
          placeholder={content.placeholderMessage[lang]}
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
          <span></span>
          {content.checkboxText[lang]}*
        </label>
      </div>
      <button type="submit" disabled={state.submitting}>
        {state.submitting && content.formSubmitting[lang]}
        {!state.submitting && content.formSubmit[lang]}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default ContactForm;
