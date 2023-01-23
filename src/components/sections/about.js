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
    grid-template-columns: repeat(2, minmax(140px, 200px));
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

  const skills = [
    'Kotlin (Android)',
    'Dart (Flutter)',
    'Node.js',
    'Python',
    'NoSQL Databases',
    'React',
    'GraphQL',
    'TypeScript',
    'Firebase',
    'Rust',
    'Ruby',
    'Go',
  ];
  const currentSkills = [
    'Swift (iOS)',
    'Objective-C (iOS)',
    'Git',
    'Docker',
    'Xcode',
    'VS Code',
    'Node.js',
    'Python',
    'PHP',
    'Regular Expressions',
    'Terminal',
    'APIs/Web Services/Postman',
    'UI & UX Design/Sketch & Figma',
    'AGILE/Jira',
    'Data Warehousing & BI',
    'Cloud Infrastructure',
    'Integration Architecture',
    'Networking & Security',
    'Technical Documentation',
    'End-User Training',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Scott and I'm a Full Stack Mobile Developer with over a decade of
              professional experience.
            </p>

            <p>
              My interest in development began in 2002, at the age of 13, when I decided to create
              my first website. A decade later, in 2012, I graduated with a bachelor's degree from{' '}
              <a href="https://www.bloomu.edu/" target="_blank" rel="noreferrer">
                Bloomsburg University
              </a>
              . My degree was more business oriented, but my passion for technology never faded. Not
              long after graduation, I decided to get back into development by creating my first
              mobile application for Android, and migrated to iOS development later that year.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://www.talenenergy.com/plant/susquehanna/" target="_blank" rel="noreferrer">
                a nuclear power plant
              </a>
              , and{' '}
              <a href="https://alleima.com/" target="_blank" rel="noreferrer">
                a huge steel manufacturing company
              </a>
              .
            </p>

            <p>
              In my spare time, I enjoy learning new languages and frameworks, however, my main
              focus these days is building and designing mobile applications for iOS. When I’m not
              typing on a laptop, you can find me outdoors; enjoying nature, camping, hiking, and
              most importantly: fishing.
            </p>

            <p>Here are some of my current skills:</p>
            <ul className="skills-list">
              {currentSkills &&
                currentSkills.map((currentSkill, i) => <li key={i}>{currentSkill}</li>)}
            </ul>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
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
