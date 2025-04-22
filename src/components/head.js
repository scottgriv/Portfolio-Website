import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import faviconIco from '../images/favicon.ico';
import appleIcon from '../images/home-icon.png';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon64 from '../images/favicon-64x64.png';
import favicon128 from '../images/favicon-128x128.png';
import favicon180 from '../images/favicon-180x180.png';
import favicon192 from '../images/favicon-192x192.png';
import favicon512 from '../images/favicon-512x512.png';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Favicon icons */}
      <link rel="icon" type="image/x-icon" href={faviconIco} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
      <link rel="icon" type="image/png" sizes="128x128" href={favicon128} />
      <link rel="icon" type="image/png" sizes="180x180" href={favicon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
      <link rel="icon" type="image/png" sizes="512x512" href={favicon512} />

      {/* App install (not a favicon) */}
      <link rel="apple-touch-icon" href={appleIcon} />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
