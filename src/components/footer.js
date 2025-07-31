import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 450px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const RotatingImage = styled.img`
  height: 10%;
  max-height: 100px;
  width: auto;
  display: block;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 5%;
    max-height: 50px;
    width: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    animation-play-state: paused;
    transform: rotate(-360deg) translateY(-5px) scale(1.05);
  }

  animation: rotate 10s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledSocialLinks>

    <StyledCredit tabindex="-1">
      <a href="https://github.com/scottgriv/portfolio-website">
        <Icon name="Fork" className="svg" />
      </a>
      {/* Image with link under Say Hello */}
      <a
        href="https://github.com/scottgriv"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px', // Adjust this value for the gap you need
        }}>
        <RotatingImage src="/footer.png" alt="Footer Graphic" />
      </a>
      <br />
      <br />
    </StyledCredit>
  </StyledFooter>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
