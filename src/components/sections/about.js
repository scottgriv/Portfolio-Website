import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      /*
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      */
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const currentSkills = [
    'UML Diagrams',
    'OOP | SOLID Principles',
    'REST/SOAP | APIs',
    'Micro-services',
    'AWS | Azure | GCP',
    'Agile | Waterfall',
    'DevOps | CI/CD Pipelines',
    'FTP | SMB | MQ',
    'TCP/IP | HTTP Protocols',
    'SSL Certificates',
    'Git | GitHub | GitLabs',
    'UI & UX Design',
    'Docker',
    'RegEx',
    'Data Warehousing',
    'Swift | SwiftUI (iOS)',
    'Objective-C | UIKit (iOS)',
    'Python',
    'Node.js',
    'PHP',
    'JSON | XML | XSLT',
    'HTML',
    'CSS',
    'JavaScript',
    'AJAX',
    'jQuery',
    'Bootstrap',
    'C#',
    'SQL Server',
    'MySQL',
    'MariaDB',
    'SQLite',
    'DB2',
    'PostgreSQL',
    'Powershell',
    'Bash',
  ];

  const futureSkills = [
    'Kotlin (Android)',
    'Dart (Flutter)',
    'MongoDB | CouchDB (NoSQL)',
    'React',
    'GraphQL',
    'TypeScript',
    'Firebase',
    'Rust',
    'Ruby',
    'Java',
    'Go',
    'Express.js',
    'Kubernetes',
    'Vue.js',
    'Svelte',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Scott and I'm a Software Engineer, Architect, Designer, and Educator with over a decade of
              professional experience.
            </p>

            <p>
              My interest in programming began at the age of 13, when I decided to create
              my first website and Windows program.
            </p>

            <p>
              A decade later, in 2012, I graduated with a bachelor's degree from{' '}
              <a href="https://www.bloomu.edu/" target="_blank" rel="noreferrer">
                Bloomsburg University
              </a>
              .
            </p>

            <p>
              In 2014, I founded{' '}
              <a href="https://www.nightowllabs.net/" target="_blank" rel="noreferrer">
                Night Owl Labs, LLC.
              </a>
              , a software research, consulting, development, and design company. I use this company to publish some of my projects on the iOS App Store,
              and Google Play Store, respectively. I also use it for software development consulting purposes; helping customers with custom software solutions. Additionally, I use this platform to give back to
              the development community by creating and publishing educational content such as
              articles, videos, and{' '}
              <a href="https://github.com/Night-Owl-Labs" target="_blank" rel="noreferrer">
                open-source code on GitHub
              </a>
              .
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a
                href="https://www.talenenergy.com/plant/susquehanna/"
                target="_blank"
                rel="noreferrer">
                a nuclear power plant
              </a>
              , and{' '}
              <a href="https://alleima.com/" target="_blank" rel="noreferrer">
                a huge steel manufacturing company
              </a>
              .
            </p>

            <p>
              In my spare time, I enjoy learning new programming languages, frameworks, and
              architecture methodologies. When I’m not typing on a laptop, you can find me outdoors;
              enjoying nature, camping, hiking, and most importantly:{' '}
              <a href="https://fishbrain.com/anglers/scottgriv" target="_blank" rel="noreferrer">
                fishing
              </a>
              .
            </p>

            <p>
              Here are some of the programming languages, methodologies, architectures, and
              technologies I'm familiar with:
            </p>
            <ul className="skills-list">
              {currentSkills &&
                currentSkills.map((currentSkills, i) => <li key={i}>{currentSkills}</li>)}
            </ul>
            <p>
              Here are a few programming languages and technologies that I’ve been working with
              recently:
            </p>
            <ul className="skills-list">
              {futureSkills &&
                futureSkills.map((futureSkills, i) => <li key={i}>{futureSkills}</li>)}
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
