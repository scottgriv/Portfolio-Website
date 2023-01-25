<div align="center">
      <a href="https://scottgrivner.dev" target="_blank">
         <img alt="Logo" src="./src/images/logo.png" />
    </a>
</div>
<h1 align="center">
  scottgrivner.dev
</h1>
<p align="center">
  The first iteration of <a href="https://scottgrivner.dev" target="_blank">scottgrivner.dev</a> built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
    <a href="https://app.netlify.com/sites/scottgrivner/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/2789b2bf-185c-477a-96b5-65901acb629c/deploy-status" alt="Netlify Status" />
    </a>
</p>

![demo](./src/images/demo.png)

## 🚨 Forking this repo (please read!)

This repo was originally forked from
[Brittany Chiang's v4 repo](https://github.com/bchiang7/v4).

All design credit goes to Brittany, I simply modified the website in a large number of areas (explained below):

- Changed the color/theme using the below `CSS` in the `variables.js` file:

```css
--dark-navy: #020c1b;
--navy: #979797;
--light-navy: #112240;
--lightest-navy: #233554;
--navy-shadow: rgba(2, 12, 27, 0.7);
--dark-slate: #495670;
--slate: #000000;
--light-slate: #ff0000;
--lightest-slate: #ffffff;
--white: #ff0000;
--green: #ff0000;
--green-tint: rgba(81, 81, 81, 0.1);
--pink: #ffffff;
--blue: #57cbff;
```

- Created custom SVG logo/icons.
- Updated the About, Experience, Work, and Contact areas to fit my personal needs.
- Added a GitHub link to this repo in the website footer.
- Removed the hover overlay on the project and about photos.
- Updated a number of images/icons.
- Added my Stack Overflow link to the left nav bar area.
- Many other small/cosmetic changes.

Feel free to fork this repo but please give me proper credit by linking back to [scottgrivner.dev](https://scottgrivner.dev) as well as the original author, Brittany Chiang's website [brittanychiang.com](https://brittanychiang.com), on your own site or in your README. Thanks!

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn install
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
