import styles from "./index.module.scss";
import items from "../content.json";

const LeadersIntro = ({ changePage, changeIndex }) => {
  let leadersItems = [];
  for (let i in items) leadersItems.push([i, items[i]]);

  const handleLeaderClick = (index) => {
    changePage(5);
    changeIndex(index);
  };

  return (
    <div className={styles.leadersIntro}>
      <h2>Meet our Leaders</h2>

      <p className={styles.description}>
        We are a team of people joined by passion for technology and product
        creation. We love to create{" "}
        <strong>high quality, tidy, expandable software</strong> with an
        <strong> intuitive</strong> and <strong>charming user-layer</strong>.
      </p>

      <div className={styles.leaders}>
        {leadersItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item[1].photoUrl} alt="" />
            <div>
              <strong>{`${item[1].firstName} ${item[1].lastName}`}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadersIntro;
