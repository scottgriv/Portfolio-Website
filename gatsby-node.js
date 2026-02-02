/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const _ = require('lodash');
const Parser = require('rss-parser');
const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 50;
// -----------------------
// Medium config
// -----------------------
const SKIP_MEDIUM = false;

// If you want both accounts:
const FEED_URLS = ['https://medium.com/feed/@scottgrivner'];

// If empty => no filtering (keep everything)
// If you set tags, this filters to posts whose RSS categories contain any of these.
const DEFAULT_APP_TAGS = []; // e.g. ["api", "recipe-resizer"]

const lower = s => String(s || '').toLowerCase();
const toArray = v =>
  Array.isArray(v)
    ? v
    : typeof v === 'string'
      ? v
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
      : [];

// -----------------------
// Medium schema
// -----------------------
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MediumPost implements Node {
      id: ID!
      title: String!
      link: String!
      pubDate: Date @dateformat
      isoDate: Date @dateformat
      creator: String
      categories: [String!]
      snippet: String
      html: String
      image: String
      source: String
    }
  `);
};

// -----------------------
// Medium sourceNodes
// -----------------------
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, reporter }) => {
  const { createNode } = actions;

  if (SKIP_MEDIUM) {
    reporter.info('[medium] SKIPPED (offline mode enabled)');
    return;
  }

  // Optional runtime override:
  //   MEDIUM_TAGS="api,Recipe-Resizer" gatsby build
  const envTags = process.env.MEDIUM_TAGS ? toArray(process.env.MEDIUM_TAGS) : [];
  const appTags = (envTags.length ? envTags : DEFAULT_APP_TAGS).map(lower);

  reporter.info(`[medium] tags-only filter: ${appTags.join(', ') || '(none)'}`);

  const parser = new Parser({
    headers: { 'User-Agent': 'Gatsby-Medium-Feed' },
    timeout: 15000,
  });

  let totalKept = 0;

  for (const FEED_URL of FEED_URLS) {
    reporter.info(`[medium] fetching feed: ${FEED_URL}`);

    try {
      const feed = await parser.parseURL(FEED_URL);
      const items = feed?.items || [];
      reporter.info(`[medium] parsed ${items.length} items from ${FEED_URL}`);

      let kept = 0;

      items.forEach((item, idx) => {
        const html = item['content:encoded'] || item.content || '';

        // Pull first <img src="..."> as hero image.
        // Medium often includes several; this grabs the first.
        const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
        const image = imgMatch ? imgMatch[1] : null;

        const categories = (item.categories || []).filter(Boolean);
        const categoriesLower = categories.map(lower);

        const tagHit = appTags.length === 0 || categoriesLower.some(c => appTags.includes(c));

        if (!tagHit) {
          return;
        }

        kept++;

        const nodeData = {
          title: item.title || '',
          link: item.link,
          pubDate: item.pubDate || '',
          isoDate: item.isoDate || '',
          creator: item.creator || item.author || 'Scott Grivner',
          categories,
          snippet: item.contentSnippet || '',
          html,
          image,
          source: FEED_URL,
        };

        createNode({
          ...nodeData,
          id: createNodeId(`medium-post-${item.guid || item.link || idx}`),
          internal: {
            type: 'MediumPost',
            contentDigest: createContentDigest(nodeData),
          },
        });
      });

      totalKept += kept;
      reporter.info(`[medium] created ${kept} MediumPost nodes from ${FEED_URL}`);
    } catch (err) {
      reporter.warn(`[medium] failed to fetch ${FEED_URL}: ${err.message || err}`);
    }
  }

  reporter.info(`[medium] total MediumPost nodes created: ${totalKept}`);
};

// -----------------------
// Existing Markdown createPages
// -----------------------
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const tagTemplate = path.resolve('src/templates/tag.js');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach(tag => {
    createPage({
      path: `/pensieve/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// -----------------------
// Existing webpack config
// -----------------------
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          { test: /scrollreveal/, use: loaders.null() },
          { test: /animejs/, use: loaders.null() },
          { test: /miniraf/, use: loaders.null() },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
