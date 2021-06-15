import React from "react";

import styles from "./home.module.css";
import projectStyles from "../../style.module.css";

const Home = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <h1 className={projectStyles.thqHeading1}>Hi!</h1>
        <h1 className={`${projectStyles.thqHeading1} ${styles.text1}`}>
          I'm Oana, a Front-end developer based in Cluj-Napoca, Romania.
        </h1>
        <span>
          I create responsive web applications, with performance, accessibility
          and scalability in mind. My passion for good design and illustrations
          shows in my work, enabling me to give special attention to details.
        </span>
      </div>
      <img
        src="/assets/coding.png"
        alt="girl on laptop"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
    </div>
  );
};

export default Home;
