import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './about.module.css'
import projectStyles from '../style.module.css'

const About = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About - Oana Muntean</title>
        <meta name="description" content="Hi I'm Oana and I code" />
        <meta property="og:title" content="About - Oana Muntean" />
        <meta property="og:description" content="Hi I'm Oana and I code" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/7e16ba118516a80f6a1c5025c3a89fc9"
        />
      </Helmet>
      <Header></Header>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>About me</h1>
      <img
        alt="woman with info tag"
        src="/playground_assets/undraw_personal_information_962o-1000w.svg"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container1}>
        <div className={styles.container2}>
          <span>
            I started learning web development while studying Computer Science at BabeÈ-Bolyai
            University in Cluj-Napoca.
          </span>
          <span className={styles.text2}>
            I am skilled in JavaScript technologies and frameworks in both Frontend (React,
            Typescript, Next, Angular 2) and Backend development (Express, Adonis). Frontend is my
            strong suit and I am knowledgeable in HTML, CSS, SASS and UI frameworks like Bootstrap,
            SemanticUI and MaterialUI.
          </span>
          <span className={styles.text3}>
            I am a travel enthusiast and my dream is to see the world and to taste all the flavors
            it has to offer. Because of this I would enjoy to work fully remote one day. Apart from
            coding, in my free time I enjoy drawing and I believe this helped me form a good eye
            when it comes to web design, while also making me more creative.
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
