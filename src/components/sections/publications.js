import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledPublicationSection = styled.section`
  width: 100%;
  margin: 0 auto 100px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

const StyledPublicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const StyledPublicationImage = styled.img`
  width: 100% !important;
  max-width: 1000px !important;
  height: auto !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.2s ease !important;
`;

const StyledPublicationLink = styled.a`
  width: 100% !important;
  max-width: 1000px !important;
  display: block !important;
  text-decoration: none;

  &:hover img {
    transform: scale(1.01) !important;
  }
`;

const Publications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledPublicationSection id="publications" ref={revealContainer}>
      <h2 className="numbered-heading overline">Publications</h2>
      <StyledPublicationWrapper>
        <StyledPublicationLink
          href="https://medium.com/@scottgrivner/understanding-software-ilities-key-attributes-of-quality-software-d4b7fadc9bbe"
          target="_blank"
          rel="noreferrer">
          <StyledPublicationImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/0"
            alt="Medium Article 0"
          />
        </StyledPublicationLink>

        <StyledPublicationLink
          href="https://medium.com/@scottgrivner/how-to-secure-api-keys-in-your-projects-87e3de50a314"
          target="_blank"
          rel="noreferrer">
          <StyledPublicationImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/1"
            alt="Medium Article 1"
          />
        </StyledPublicationLink>

        <StyledPublicationLink
          href="https://medium.com/@scottgrivner/effectively-managing-technical-debt-with-todo-fixme-and-other-code-reminders-e0b770f6180a"
          target="_blank"
          rel="noreferrer">
          <StyledPublicationImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/2"
            alt="Medium Article 2"
          />
        </StyledPublicationLink>

        <StyledPublicationLink
          href="https://medium.com/@scottgrivner/how-to-read-xml-and-json-as-a-business-user-4243871bf00f"
          target="_blank"
          rel="noreferrer">
          <StyledPublicationImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/3"
            alt="Medium Article 3"
          />
        </StyledPublicationLink>
      </StyledPublicationWrapper>
    </StyledPublicationSection>
  );
};

export default Publications;
