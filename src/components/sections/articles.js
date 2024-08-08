import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledArticlesSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  .article-image {
    width: 200px; /* Set your desired static width */
    margin: 10px;
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
  }, [prefersReducedMotion]);

  return (
    <StyledArticlesSection id="articles" ref={revealContainer}>
      <h2 className="numbered-heading overline">Published Articles</h2>

      <p align="center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@scottgrivner/understanding-software-ilities-key-attributes-of-quality-software-d4b7fadc9bbe">
          <img
            className="article-image"
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/0"
            alt="Recent Article 0"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/1">
          <img
            className="article-image"
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/1"
            alt="Recent Article 1"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/2">
          <img
            className="article-image"
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/2"
            alt="Recent Article 2"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/3">
          <img
            className="article-image"
            src="https://github-readme-medium-recent-article.vercel.app/medium/@scottgrivner/3"
            alt="Recent Article 3"
          />
        </a>
      </p>
    </StyledArticlesSection>
  );
};

export default Articles;
