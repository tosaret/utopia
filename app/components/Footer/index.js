import Image from "next/image";

import styles from "./index.module.scss";

import thomasPhoto from "../../../public/thomas.png";
import footerLogo from "../../../public/footer-logo.png";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.textBlock}>
          <div className={styles.thomas}>
            <div>
              <Image src={thomasPhoto} width={80} height={80} />
            </div>
            <div>
              <strong>Hi I’m Thomas</strong>
              <p>COO & Utopia</p>
            </div>
          </div>
          <div>
            <p>
              I would love to hear about your ideas and challenges. Together
              with our team we can figure out how to achieve your business goals
              and advance your companies development.
              <br />
              <br />
              To get in touch, please use my contact details or the contact
              form. We're waiting to hear from you!
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <p>
            Iwona Odrowąża 20/3 Kraków 30-009 <br />
            p. 123 456 789 <br />
            e. info@utopiaultimate.com
          </p>
        </div>
        <div>
          <Image src={footerLogo} width={182} height={54} />
        </div>
        <div>
          <p>
            REGON: 1234567212112 <br />
            KRS: 12341421442142142 <br />
            VAT-ID: 213211221421412
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
