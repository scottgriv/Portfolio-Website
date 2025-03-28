module.exports = {
  email: 'scott.grivner@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/scottgriv',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/u/3092847',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/scottgrivner/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@scottgrivner',
    },
    {
      name: 'Goodreads',
      url: 'https://goodreads.com/scottgrivner',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/scottgriv',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/scottgrivner',
    },
    {
      name: 'VSCode',
      url: 'https://marketplace.visualstudio.com/publishers/scottgriv',
    },
    {
      name: 'BuyMeACoffee',
      url: 'https://www.buymeacoffee.com/scottgriv',
    },
    {
      name: 'PRG',
      url: 'https://prgportfolio.com',
    },
    /*
    {
      name: 'Twitter',
      url: '',
    },
    {
      name: 'Instagram',
      url: '',
    }
    */
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Publications',
      url: '/#publications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
