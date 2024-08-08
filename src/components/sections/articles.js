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
    <StyledArticlesSection id="article" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <p align="center">
        <a href="https://stackoverflow.com/users/3092847" target="blank">
          <img
            align="center"
            src="./docs/images/socials/stack-overflow.svg"
            alt="Stack Overflow"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://linkedin.com/in/scottgrivner/" target="blank">
          <img
            align="center"
            src="./docs/images/socials//linkedin.svg"
            alt="LinkedIn"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://x.com/scottgrivner" target="blank">
          <img align="center" src="./docs/images/socials/x.png" alt="X" height="43" width="43" />
        </a>
        &nbsp;&nbsp;
        <a href="https://medium.com/@scottgrivner" target="blank">
          <img
            align="center"
            src="./docs/images/socials/medium.svg"
            alt="Medium"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://goodreads.com/scottgrivner" target="blank">
          <img
            align="center"
            src="./docs/images/socials/goodreads.png"
            alt="Goodreads"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://codepen.io/scottgriv" target="blank">
          <img
            align="center"
            src="./docs/images/socials/codepen.svg"
            alt="Code Pen"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://marketplace.visualstudio.com/publishers/scottgriv" target="blank">
          <img
            align="center"
            src="./docs/images/socials/vscode.svg"
            alt="Visual Studio Marketplace"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://www.buymeacoffee.com/scottgriv" target="blank">
          <img
            align="center"
            src="./docs/images/socials/bmc.png"
            alt="Buy Me a Coffee"
            height="40"
            width="40"
          />
        </a>
        &nbsp;&nbsp;
      </p>
    </StyledArticlesSection>
  );
};

export default Articles;
