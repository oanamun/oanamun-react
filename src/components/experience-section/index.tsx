import React from "react";

import styles from "./experience-section.module.css";
import projectStyles from "../../style.module.css";

interface Props {
  title: string;
  paragraphs: { heading: string; description: string }[];
  imgSrc: string;
}

const ExperienceSection: React.FC<Props> = (props) => {
  return (
    <div className={styles.container02}>
      <div className={styles.container03}>
        <img
          alt="peer programming"
          src={props.imgSrc}
          className={` ${projectStyles.thqImage} ${styles.image} `}
        />
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
          {props.title}
        </h1>
      </div>

      {props.paragraphs.map((paragraph) => (
        <div className={styles.container04}>
          <h2 className={` ${projectStyles.thqHeading2} ${styles.text01} `}>
            {paragraph.heading}
          </h2>
          <span>{paragraph.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
