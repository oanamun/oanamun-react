import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./home.module.css";
import projectStyles from "../style.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Oana Muntean</title>
        <meta name="description" content="Hi I'm Oana and I code" />
        <meta property="og:title" content="Oana Muntean" />
        <meta property="og:description" content="Hi I'm Oana and I code" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/7e16ba118516a80f6a1c5025c3a89fc9"
        />
      </Helmet>
      <Header></Header>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <h1 className={projectStyles.thqHeading1}>Hi!</h1>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text1} `}>
            I&apos;m Oana, a Front-end developer based in Cluj-Napoca, Romania.
          </h1>
          <span>
            I create responsive web applications, with performance,
            accessibility and scalability in mind. My passion for good design
            and illustrations shows in my work, enabling me to give special
            attention to details.
          </span>
        </div>
        <img
          src="/playground_assets/oana-plants-1000w.svg"
          alt="girl on laptop"
          className={` ${projectStyles.thqImage} ${styles.image} `}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
