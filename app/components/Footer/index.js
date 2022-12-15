import ReactHtmlParser from "react-html-parser";
import Image from "next/image";

import styles from "./index.module.scss";

import thomasPhoto from "../../../public/thomas.png";
import footerLogo from "../../../public/footer-logo.png";
import ContactForm from "./ContactForm";
import classNames from "classnames";

const Footer = ({ active, content, lang }) => {
  return (
    <div
      className={classNames(styles.footerWrapper, {
        [styles.active]: active,
      })}
    >
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.textBlock}>
            <div className={styles.thomas}>
              <div>
                <Image
                  src={thomasPhoto}
                  width={80}
                  height={80}
                  alt="Thomas Kirchner"
                />
              </div>
              <div>
                <strong>{content.contactName[lang]}</strong>
                <p>COO & Utopia</p>
              </div>
            </div>
            <div>
              <p>{ReactHtmlParser(content.contactText[lang])}</p>
            </div>
          </div>
          <div className={styles.form}>
            <ContactForm content={content} lang={lang} />
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
          <div className={styles.footerLogo}>
            <Image src={footerLogo} width={182} height={54} alt="Utopia" />
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
    </div>
  );
};

export default Footer;
