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
      <p align="center">
        <img
          src="https://github-read-medium.vercel.app/latest?username=scottgrivner&limit=6&theme=graywhite"
          alt="Medium Articles"
        />
      </p>
    </StyledArticlesSection>
  );
};

export default Articles;
