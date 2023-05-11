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

  const currentBizSkills = [
    'REST/SOAP APIs',
    'Mobile Application Development',
    'Full-Stack Development',
    'Front-End Development',
    'Integration Architecture',
    'Technology Roadmaps',
    'Technology Stacks | Software Solutions',
    'Management | Customer Service',
    'Budgeting Skills',
    'Public Speaking | Presentation Skills',
    'Algorithms',
    'Data Structures',
    'Data Modeling',
    'Data Analytics',
    'Data Warehousing & ETL',
    'Business Intelligence',
    'Business Reporting',
    'Machine Learning',
    'Cloud Computing',
    'Computer Science',
    'UI & UX Design',
    'Version Control',
    'SQL Databases',
    'NoSQL Databases',
    'Container Management',
    'AI Systems',
    'Web Servers',
    'Prototyping',
    'AGILE Methodologies',
    'Cybersecurity',
    'Networking',
    'Finance | Accounting',
    'Cross Functional Leadership',
    'Technical Documentation',
    'User Stories',
    'End-User Training',
    'Regular Expressions (RegEx)',
    'DevOps',
    'CI/CD Pipeline',
    'FTP | SMB | MQ',
    'TCP/IP | HTTP Protocols',
    'SSL Certificates',
  ];

  const currentLanguages = [
    'Swift (iOS)',
    'Objective-C (iOS)',
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
    'Xcode',
    'Visual Studio',
    'VS Code',
    'Eclipse',
    '.NET | IIS',
    'Apache | Tomcat',
  ];

  const futureLanguages = [
    'Kotlin (Android)',
    'Dart (Flutter)',
    'MongoDB | CouchDB',
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
    'Gatsby',
    'Netlify',
  ];

  const currentApps = [
    'Cloud Infrastructure (AWS | GCP | Azure | SaaS)',
    'Version Control (Git | GitHub)',
    'Issue Tracking (ServiceNow | Jira)',
    'Container Management (Docker)',
    'Monitoring Solutions (Site24x7)',
    'Design Software (Sketch | Figma | Adobe Photoshop)',
    'Integration Systems (MQ | JMS | InforOS | Infor ION & API)',
    'Asset Management Systems (Infor EAM)',
    'ERP Systems (Infor ERP LX | M3 | IDM)',
    'CRM Systems (Infor CRM | Microsoft Dynamics)',
    'Document Management Systems (Metafile | Infor IDM)',
    'Reporting Systems (Infor Birst | MS PowerBI | Qlik Sense | IBM Cognos)',
    'Operating Systems (IBM i/iSeries/AS400 | Windows | Mac)',
    'Warehouse Systems (Logistics)',
    'Financial Systems (SAP | ERP LX)',
    'EHS Systems (QMS | CompliantPro)',
    'Shop Floor Control Systems (TouchPath)',
    'Communications (Twilio)',
    'Packaging Labels | Printers',
    'Microsoft 365 (Teams | Outlook | OneNote | OneDrive)',
    'Microsoft 365 (Excel | Word | PowerPoint | Visio)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Scott and I'm a Software Engineer & Architect with over a decade of
              professional experience.
            </p>

            <p>
              My interest in programming began in 2002, at the age of 13, when I decided to create
              my first website and Windows program.
            </p>

            <p>
              A decade later, in 2012, I graduated with a bachelor's degree from{' '}
              <a href="https://www.bloomu.edu/" target="_blank" rel="noreferrer">
                Bloomsburg University
              </a>
              . My degree was more business oriented, but my passion for technology never faded. Not
              long after graduation, I decided to get back into development by teaching myself how
              to program by creating my first mobile application.
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
              In my spare time, I enjoy learning new programming languages and frameworks. When I’m
              not typing on a laptop, you can find me outdoors; enjoying nature, camping, hiking,
              and most importantly: fishing.
            </p>

            <p>Here are some of my current overall skills:</p>
            <ul className="skills-list">
              {currentBizSkills &&
                currentBizSkills.map((currentBizSkills, i) => <li key={i}>{currentBizSkills}</li>)}
            </ul>
            <p>
              Here are some of the programming languages, frameworks, and IDEs I'm familiar with:
            </p>
            <ul className="skills-list">
              {currentLanguages &&
                currentLanguages.map((currentLanguages, i) => <li key={i}>{currentLanguages}</li>)}
            </ul>
            <p>
              Here are a few programming languages and technologies that I’ve been working with
              recently:
            </p>
            <ul className="skills-list">
              {futureLanguages &&
                futureLanguages.map((futureLanguages, i) => <li key={i}>{futureLanguages}</li>)}
            </ul>
            <p>Here's a list of enterprise applications and technologies that I'm familiar with:</p>
            <ul className="skills-list">
              {currentApps && currentApps.map((currentApps, i) => <li key={i}>{currentApps}</li>)}
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
