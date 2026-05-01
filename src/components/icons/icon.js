import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconGoodreads,
  IconStackOverflow,
  IconMedium,
  IconBuyMeACoffee,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconYouTube,
  IconPRG,
  IconVSCode,
  IconCalendly,
  IconChromeStore,
  IconHelpCenter,
  IconRSS,
  IconObsidian,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Goodreads':
      return <IconGoodreads />;
    case 'StackOverflow':
      return <IconStackOverflow />;
    case 'Medium':
      return <IconMedium />;
    case 'BuyMeACoffee':
      return <IconBuyMeACoffee />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'YouTube':
      return <IconYouTube />;
    case 'PRG':
      return <IconPRG />;
    case 'VSCode':
      return <IconVSCode />;
    case 'Calendly':
      return <IconCalendly />;
    case 'ChromeStore':
      return <IconChromeStore />;
    case 'HelpCenter':
      return <IconHelpCenter />;
    case 'RSS':
      return <IconRSS />;
    case 'Obsidian':
      return <IconObsidian />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
