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
  /*
  const currentSkills = [
    'UML Diagrams | PlantUML',
    'OOP | SOLID | DRY | Clean Code',
    'REST/SOAP | APIs',
    'Microservices',
    'AWS | Azure | GCP',
    'Agile | Waterfall',
    'DevOps | CI/CD Pipelines',
    'FTP | SMB | MQ',
    'TCP/IP | HTTP Protocols',
    'Gatsby | React | GraphQL',
    'Git | GitHub | GitHub Actions',
    'UI & UX Design | Sketch | Figma',
    'Docker',
    'RegEx',
    'Data Warehousing',
    'Swift | SwiftUI (iOS)',
    'Objective-C | UIKit (iOS)',
    'Python',
    'Node.js',
    'PHP',
    'JSON | XML | XSLT',
    'JavaScript | TypeScript',
    'C# | .NET | .NET Core',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'PWA',
    'IBMi | AS/400 | DB2',
    'Kotlin (Android)',
    'Dart (Flutter)',
  ];

  const futureSkills = [
    'React Native',
    'MongoDB | CouchDB (NoSQL)',
    'Rust',
    'Firebase',
    'Rust',
    'Ruby',
    'Java',
    'Go',
    'Express.js',
    'Kubernetes',
    'Vue.js',
    'Svelte',
    'Sass | Less',
    'Tailwind CSS',
    'Next.js',
  ];
  */
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              My interest in programming began at the <b>age of 12</b>, when I decided to create my
              first website and Windows program.
            </p>

            <p>
              A decade later, in 2012, I graduated with a <b>bachelor's degree</b> from{' '}
              <a href="https://www.bloomu.edu/" target="_blank" rel="noreferrer">
                Bloomsburg University
              </a>
              .
            </p>

            <p>
              In 2014, I launched{' '}
              <a href="https://www.nightowllabs.io/" target="_blank" rel="noreferrer">
                Night Owl Labs, LLC.
              </a>
              , a company dedicated to software development, design, consulting, and education. We{' '}
              <b>publish our products on app stores</b>, offer consulting services, and share
              educational content and{' '}
              <a href="https://github.com/Night-Owl-Labs" target="_blank" rel="noreferrer">
                open-source contributions on GitHub
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
              ,{' '}
              <a href="https://www.home.sandvik/en/" target="_blank" rel="noreferrer">
                a 160-year-old industrial engineering company
              </a>
              , and{' '}
              <a href="https://alleima.com/" target="_blank" rel="noreferrer">
                a huge steel manufacturing company
              </a>
              .
            </p>

            <p>
              I’ve had the opportunity to see a live nuclear reactor during my internship, and later
              witness manufacturing processes from start to finish on multiple occasions across
              several countries through my next two roles. These experiences gave me a{' '}
              <b>deep understanding</b> of not just the physical systems, but also the technology
              and workflows that drive the entire business process — from planning and engineering
              to execution and delivery. It’s been a <b>rewarding and eye-opening journey</b>, to
              say the least.
            </p>

            <p>
              In my spare time, I enjoy learning new programming languages, frameworks, and
              architecture methodologies. I'm also an avid open-source contributor and have
              developed a{' '}
              <a href="https://prgportfolio.com" target="_blank" rel="noreferrer">
                repository categorization and guideline framework
              </a>{' '}
              to help others get started in the field.
            </p>

            <p>
              When I’m not typing on a laptop, you can find me{' '}
              <a href="https://medium.com/@scottgrivner" target="_blank" rel="noreferrer">
                writing tech articles
              </a>
              ,{' '}
              <a href="https://goodreads.com/scottgrivner" target="_blank" rel="noreferrer">
                reading books
              </a>
              , playing sports, boxing, weightlifting, gaming, and spending time outdoors; enjoying
              nature, camping, hiking, and most importantly:{' '}
              <a href="https://fishbrain.com/anglers/scottgriv" target="_blank" rel="noreferrer">
                fishing
              </a>
              .
            </p>
            {/*
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
          */}
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
