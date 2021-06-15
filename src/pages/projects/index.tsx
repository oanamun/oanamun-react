import React from "react";

import styles from "./projects.module.css";
import projectStyles from "../../style.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
        Personal Projects
      </h1>
      <img
        alt="responsive design"
        src="/assets/code.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container01}>
        <div className={styles.container02}>
          <div className={styles.container03}>
            <div className={styles.container04}>
              <a
                href="https://after5app.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                <h1
                  className={` ${projectStyles.thqHeading1} ${projectStyles.thqLink} ${styles.text01} `}
                >
                  After5app
                </h1>
              </a>
              <a
                href="https://github.com/oanamun/after5app-frontend"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link1}
              >
                <div
                  className={` ${projectStyles.thqLink} ${styles.container05} `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    className={` ${projectStyles.thqIcon} ${styles.icon} `}
                  >
                    <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <span>
              A website destined for connecting people with ideas or with a
              certain set of skills.
            </span>
            <span className={styles.text03}>
              Creative people can describe their ideas and ask for people&apos;s
              help implementing them.
            </span>
            <span>
              Technical people can find projects they empathize with and join a
              team in order to start building a new product.
            </span>
            <span className={styles.text05}>
              I worked on the frontend of the application which is built in
              Angular 2.
            </span>
          </div>
          <img
            alt="after five app homepage"
            src="/assets/after5.png"
            className={` ${projectStyles.thqImage} ${styles.image1} `}
          />
        </div>
        <div className={styles.container06}>
          <div className={styles.container07}>
            <div className={styles.container08}>
              <h1 className={` ${projectStyles.thqHeading1} ${styles.text06} `}>
                TVfan
              </h1>
              <a
                href="https://gitlab.com/oanamunteantean/shows-frontend"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link2}
              >
                <div
                  className={` ${projectStyles.thqLink} ${styles.container09} `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    className={` ${projectStyles.thqIcon} ${styles.icon} `}
                  >
                    <path d="M59.429 403.429l452.571 580-496-360c-13.714-10.286-19.429-28-14.286-44l57.714-176zM323.429 403.429h377.143l-188.571 580zM210.286 53.714l113.143 349.714h-264l113.143-349.714c6.286-17.714 31.429-17.714 37.714 0zM964.571 403.429l57.714 176c5.143 16-0.571 33.714-14.286 44l-496 360 452.571-580zM964.571 403.429h-264l113.143-349.714c6.286-17.714 31.429-17.714 37.714 0z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <span>
              A website for managing your watched tv shows where people can log
              in and add shows to their watchlist, can view information about
              any show and can see the activity of their friends on the website.
            </span>
            <span className={styles.text08}>
              The application was a REST service with an Angular 2 client on the
              frontend.
            </span>
            <span className={styles.text09}>
              I worked with Javascript, SASS, Angular, Semantic UI, Node, Adonis
              framework, MySql.
            </span>
          </div>
          <img
            alt="tv fan homepage"
            src="/assets/shows.png"
            className={` ${projectStyles.thqImage} ${styles.image2} `}
          />
        </div>
        <div className={styles.container10}>
          <div className={styles.container11}>
            <div className={styles.container12}>
              <h1 className={` ${projectStyles.thqHeading1} ${styles.text10} `}>
                UBB E-Learning
              </h1>
              <a
                href="https://gitlab.com/oanamunteantean/elearning-frontend"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link3}
              >
                <div
                  className={` ${projectStyles.thqLink} ${styles.container13} `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    className={` ${projectStyles.thqIcon} ${styles.icon} `}
                  >
                    <path d="M59.429 403.429l452.571 580-496-360c-13.714-10.286-19.429-28-14.286-44l57.714-176zM323.429 403.429h377.143l-188.571 580zM210.286 53.714l113.143 349.714h-264l113.143-349.714c6.286-17.714 31.429-17.714 37.714 0zM964.571 403.429l57.714 176c5.143 16-0.571 33.714-14.286 44l-496 360 452.571-580zM964.571 403.429h-264l113.143-349.714c6.286-17.714 31.429-17.714 37.714 0z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <span>
              A platform where students and professors could log in and
              join/create courses, tests, homework, events, check and calculate
              their grades.
            </span>
            <span className={styles.text12}>
              I made on the front-end of the application using JavaScript,
              Angular, Bootstrap, SASS and Gulp.
            </span>
          </div>
          <img
            alt="e-learning web app page"
            src="/assets/elearning.jpg"
            className={` ${projectStyles.thqImage} ${styles.image3} `}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
