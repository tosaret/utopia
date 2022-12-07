import styles from "./index.module.scss";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formItem}>
        <input type="email" placeholder="Email address" />
      </div>
      <div className={styles.formItem}>
        <textarea placeholder="Your idea"></textarea>
      </div>
      <div className={(styles.formItem, styles.formCheckbox)}>
        <label>
          <input type="checkbox" />
          <span></span>I am consent to processing of my personal data by Utopia
          Ultimate Software Solutions Sp. z o.o. in the scope provided in the
          above form in order to reply to my message.*
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
