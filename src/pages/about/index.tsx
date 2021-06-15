import React from "react";

import styles from "./about.module.css";
import projectStyles from "../../style.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
        About me
      </h1>
      <img
        alt="about me"
        src="/assets/about.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container1}>
        <div className={styles.container2}>
          <span>
            I started learning web development while studying Computer Science
            at Babes-Bolyai University in Cluj-Napoca.
          </span>
          <span className={styles.text2}>
            I am skilled in JavaScript technologies and frameworks in both
            front-end (React, Typescript, Next, Angular) and back-end
            development (Express, Adonis). Front-end is my strong suit and I am
            knowledgeable in HTML, CSS, SASS and UI frameworks like Bootstrap,
            SemanticUI and MaterialUI.
          </span>
          <span className={styles.text3}>
            I am a travel enthusiast and my dream is to see the world and to
            taste all the flavors it has to offer. Because of this I would enjoy
            to work fully remote one day. Apart from coding, in my free time I
            enjoy drawing and making digital illustrations. I believe this helps
            me in my work because I have an eye for detail when it comes to
            implementing user interfaces.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
