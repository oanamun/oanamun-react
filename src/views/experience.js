import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styles from './experience.module.css'
import projectStyles from '../style.module.css'

const Experience = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Experience - Oana Muntean</title>
        <meta name="description" content="Hi I'm Oana and I code" />
        <meta property="og:title" content="Experience - Oana Muntean" />
        <meta property="og:description" content="Hi I'm Oana and I code" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/7e16ba118516a80f6a1c5025c3a89fc9"
        />
      </Helmet>
      <Header></Header>
      <div className={styles.container01}>
        <div className={styles.container02}>
          <div className={styles.container03}>
            <img
              alt="peer programming"
              src="/playground_assets/undraw_pair_programming_njlp-1000w.svg"
              className={` ${projectStyles.thqImage} ${styles.image} `}
            />
            <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>Work experience</h1>
          </div>
          <div className={styles.container04}>
            <h2 className={` ${projectStyles.thqHeading2} ${styles.text01} `}>TeleportHQ</h2>
            <span>
              Working with React and Typescript, mainly on the frontend, of a platform that allows
              users to build websites with little technical know-how. I learned how to use web
              components, how to work with web sockets and various design patterns.Â 
            </span>
            <span>
              Apart from programming, my responsibilities include planning features in collaboration
              with the business and UX teams, reviewing merge requests and mentoring juniors.
            </span>
          </div>
          <div className={styles.container05}>
            <h2 className={` ${projectStyles.thqHeading2} ${styles.text04} `}>Evozon</h2>
            <span>
              Started by working on various small projects using Angular, React and Node.js, then
              worked on a more complex application for a bank using React with Redux for state
              management.
            </span>
          </div>
        </div>
        <div className={styles.container06}>
          <div className={styles.container07}>
            <img
              alt="professor"
              src="/playground_assets/undraw_teaching_f1cm-1000w.svg"
              className={` ${projectStyles.thqImage} ${styles.image1} `}
            />
            <h1 className={` ${projectStyles.thqHeading1} ${styles.text06} `}>Education</h1>
          </div>
          <div className={styles.container08}>
            <div className={styles.container09}>
              <h2 className={` ${projectStyles.thqHeading2} ${styles.text07} `}>
                Babes-Bolyai University
              </h2>
              <span>Pursuing Master&apos;s Degree in Distributed Systems across the Internet</span>
              <span>
                Studied distributed systems algorithms, security protocols, distributed architecture
                computingÂ Â 
              </span>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <h2 className={` ${projectStyles.thqHeading2} ${styles.text10} `}>
                Babes-Bolyai University
              </h2>
              <span>Bachelor&apos;s Degree in Computer Science</span>
              <span>
                Studied Object Oriented Programming, design patterns, data structures and
                algorithmsÂ 
              </span>
            </div>
          </div>
        </div>
        <div className={styles.container12}>
          <div className={styles.container13}>
            <img
              alt="certificate"
              src="/playground_assets/undraw_certification_aif8-1000w.svg"
              className={` ${projectStyles.thqImage} ${styles.image2} `}
            />
            <h1 className={` ${projectStyles.thqHeading1} ${styles.text13} `}>Certificates</h1>
          </div>
          <div className={styles.container14}>
            <div className={styles.container15}>
              <h2 className={` ${projectStyles.thqHeading2} ${styles.text14} `}>
                Deutsches Sprachdiplom Niveau C1Â 
              </h2>
              <span>Kultusministerkonferenz, 2013</span>
            </div>
            <div className={styles.container16}>
              <h2 className={` ${projectStyles.thqHeading2} ${styles.text16} `}>
                Cambridge Certificate of Proficiency in English
              </h2>
              <span>Esol Education, 2012</span>
            </div>
            <div className={styles.container17}>
              <h2 className={` ${projectStyles.thqHeading2} ${styles.text18} `}>
                LCCI Engligh for Business Level 3
              </h2>
              <span>Pearson, 2011</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Experience
