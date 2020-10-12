import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import projectStyles from "../../style.module.css";

const Header = () => {
  return (
    <div className={styles.oana1}>
      <Link to="/" className={` ${projectStyles.thqLink} ${styles.text} `}>
        oanamun
      </Link>
      <div id="menu" className={styles.container}>
        <Link to="/about" className={projectStyles.thqLink}>
          About
        </Link>
        <Link to="/experience" className={projectStyles.thqLink}>
          Experience
        </Link>
        <Link to="/projects" className={projectStyles.thqLink}>
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
