import React from "react";

import styles from "./experience.module.css";
import ExperienceSection from "../../components/experience-section";

const Experience = () => {
  return (
    <div className={styles.container01}>
      <ExperienceSection
        title="Work experience"
        imgSrc="/assets/work.png"
        paragraphs={[
          {
            heading: "TeleportHQ",
            description: `Working with React and Typescript, mainly on the frontend, of a
          platform that allows users to build websites with little technical
          know-how. I learned how to use web components, how to work with web
          sockets and various design patterns.
          Apart from programming, my responsibilities include planning
            features in collaboration with the business and UX teams, reviewing
            merge requests and mentoring juniors.
          `
          },
          {
            heading: "Evozon",
            description: `Started by working on various small projects using Angular, React
              and Node.js, then worked on a more complex application for a bank
              using React with Redux for state management.
          `
          }
        ]}
      />

      <ExperienceSection
        title="Volunteering"
        imgSrc="/assets/volunteering.png"
        paragraphs={[
          {
            heading: "Code for Romania",
            description: `Worked on various Code4Ro projects for
            social good as front-end developer.`
          },
          {
            heading: "NodeSchool",
            description: `Taught JavaScript fundamentals to workshop
            participants.`
          },
          {
            heading: "JSHeroes",
            description: `Helped organize the JSHeroes yearly conference.`
          }
        ]}
      />
      <ExperienceSection
        title="Education"
        imgSrc="/assets/education.png"
        paragraphs={[
          {
            heading: "Babes-Bolyai University",
            description: `Pursuing Master's Degree in Distributed Systems across the
              Internet. Studied distributed systems algorithms, security protocols,
              distributed architecture computing.
          `
          },
          {
            heading: "Babes-Bolyai University",
            description: `Bachelor's Degree in Computer Science.
              Studied Object Oriented Programming, design patterns, data
              structures and algorithms.
          `
          }
        ]}
      />

      <ExperienceSection
        title="Language certificates"
        imgSrc="/assets/certification.png"
        paragraphs={[
          {
            heading: "Deutsches Sprachdiplom Niveau C1",
            description: `Kultusministerkonferenz, 2013
          `
          },
          {
            heading: "Cambridge Certificate of Proficiency in English",
            description: `Esol Education, 2012
          `
          },
          {
            heading: "LCCI Engligh for Business Level 3",
            description: `Pearson, 2011
          `
          }
        ]}
      />
    </div>
  );
};

export default Experience;
