import ReactHtmlParser from "react-html-parser";

import styles from "./index.module.scss";

const Leaders = ({ introTexts, content, lang }) => {
  let leadersItems = [];
  for (let i in content) leadersItems.push([i, content[i]]);

  return (
    <div className={styles.leadersIntro}>
      <h2>{ReactHtmlParser(introTexts.title[lang])}</h2>

      <p className={styles.description}>
        {ReactHtmlParser(introTexts.text[lang])}
      </p>

      <div className={styles.leaders}>
        {leadersItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item[1].photoUrl[1]} alt={item[1].name[1]} />
            <div>
              <strong>{item[1].name[1]}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
