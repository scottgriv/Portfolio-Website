import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledArticlesSection = styled.section`
  width: 100%;
  margin: 0 auto 100px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

const StyledArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const StyledArticleImage = styled.img`
  width: 100%;
  max-width: 800px; /* or try 900px for more impact */
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const Articles = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledArticlesSection id="articles" ref={revealContainer}>
      <h2 className="numbered-heading overline">Published Articles</h2>
      <StyledArticlesWrapper>
        <a
          href="https://medium.com/@scottgrivner/understanding-software-ilities-key-attributes-of-quality-software-d4b7fadc9bbe"
          target="_blank"
          rel="noreferrer">
          <StyledArticleImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/0"
            alt="Medium Article 0"
          />
        </a>
        <a
          href="https://medium.com/@scottgrivner/how-to-secure-api-keys-in-your-projects-87e3de50a314"
          target="_blank"
          rel="noreferrer">
          <StyledArticleImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/1"
            alt="Medium Article 1"
          />
        </a>
        <a
          href="https://medium.com/@scottgrivner/effectively-managing-technical-debt-with-todo-fixme-and-other-code-reminders-e0b770f6180a"
          target="_blank"
          rel="noreferrer">
          <StyledArticleImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/2"
            alt="Medium Article 2"
          />
        </a>
        <a
          href="https://medium.com/@scottgrivner/how-to-read-xml-and-json-as-a-business-user-4243871bf00f"
          target="_blank"
          rel="noreferrer">
          <StyledArticleImage
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/3"
            alt="Medium Article 3"
          />
        </a>
      </StyledArticlesWrapper>
    </StyledArticlesSection>
  );
};

export default Articles;
