import React from "react";

import styles from "./about.module.css";
import projectStyles from "../../style.module.css";

import { ReactComponent as AboutSVG } from "./about.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
        About me
      </h1>

      <div className={styles.illustration}>
        <AboutSVG />
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <span>
            I am a Senior ReactJS Developer with 5+ years of experience working
            in the IT industry. Skilled in modern web technologies such as
            Typescript, React, Next.js, and Jest, I create responsive web
            applications, with performance, accessibility, and scalability in
            mind. I have a bachelor's degree in Computer Science from
            Babeș-Bolyai University, and I am pursuing a master's degree in
            Distributed Systems.
          </span>
          <br />
          <p className={styles.text3}>
            ✅ TypeScript, React
            <br />
            ✅ React Router, React Forms, Redux, React Hooks
            <br />
            ✅ Next.js
            <br />
            ✅ HTML, CSS, SASS
            <br />
            ✅ MaterialUI, SemanticUI, Bootstrap
            <br />
            ✅ Storybook
            <br />
            ✅ Jest unit testing
            <br />
            ✅ Agile, Git
            <br />✅ Adobe Illustrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
