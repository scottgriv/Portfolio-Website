import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledPublicationSection = styled.section`
  width: 100%;
  margin: 0 auto 0px;
  padding: 0 0px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

const Tiles = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 1000px;

  /* 🔥 kill outside spacing (top/bottom) no matter what global CSS says */
  margin: 50px auto !important;
  padding: 0 !important;
`;

const Tile = styled.article`
  grid-column: span 6;
  background: var(--light-navy);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  /* ✅ allow the body to stretch so we can pin the button to the bottom */
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 900px) {
    grid-column: span 12;
  }
`;

const TileMedia = styled.a`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
`;

const TileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  /* 🔥 kill any blur-up/lazyload blur coming from global CSS */
  filter: none !important;
  -webkit-filter: none !important;

  /* also kill any weird placeholder fades */
  opacity: 1 !important;

  /* avoid resampling softness from transforms */
  transform: none !important;
`;

const TilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: var(--slate);
`;

const TileBody = styled.div`
  padding: 16px 16px 18px;
  text-align: left;

  /* ✅ make body a vertical stack and let it take remaining height */
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TileTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 1.25;

  a {
    color: var(--lightest-slate);
    text-decoration: none;

    &:hover {
      color: var(--green);
    }
  }
`;

const TileMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  color: var(--navy);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  margin-bottom: 10px;
`;

const Dot = styled.span`
  opacity: 0.7;
  color: var(--navy);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(100, 255, 218, 0.1);
  color: var(--green);
`;

const Snippet = styled.p`
  margin: 0 0 14px;
  color: var(--slate);
  font-size: 14px;
  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Actions = styled.div`
  /* ✅ center horizontally */
  display: flex;
  justify-content: center;

  /* ✅ push this block to the bottom of TileBody */
  margin-top: auto;

  /* keep your gap if you plan multiple buttons later */
  gap: 10px;
`;

const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--green);
  color: var(--black);
  background: var(--navy);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 800;

  &:hover {
    background: rgba(100, 255, 218, 0.12);
  }
`;

const EmptyState = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
  color: var(--slate);
`;

const formatDate = iso => {
  if (!iso) {
    return '';
  }
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
};

const Publications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const data = useStaticQuery(graphql`
    query PublicationsSectionPosts {
      allMediumPost(sort: { fields: [isoDate], order: DESC }) {
        nodes {
          id
          title
          link
          isoDate
          pubDate
          snippet
          image
          categories
        }
      }
    }
  `);

  const posts = data?.allMediumPost?.nodes || [];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledPublicationSection id="publications" ref={revealContainer}>
      <h2 className="numbered-heading">Some Things I've Written</h2>

      {posts.length ? (
        <Tiles>
          {posts.map(post => {
            const dateValue = post.isoDate || post.pubDate;
            const tags = Array.isArray(post.categories) ? post.categories : [];

            return (
              <Tile key={post.id || post.link}>
                <TileMedia
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${post.title} on Medium`}>
                  {post.image ? (
                    <TileImg src={post.image} alt="" loading="lazy" />
                  ) : (
                    <TilePlaceholder aria-hidden="true">Medium</TilePlaceholder>
                  )}
                </TileMedia>

                <TileBody>
                  <TileTitle>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </TileTitle>

                  <TileMeta>
                    {dateValue ? <time dateTime={dateValue}>{formatDate(dateValue)}</time> : null}

                    {tags.length ? <Dot>•</Dot> : null}

                    {tags.slice(0, 2).map((c, i) => (
                      <Tag key={`${post.id || post.link}-tag-${i}`}>{c}</Tag>
                    ))}
                  </TileMeta>

                  {post.snippet ? <Snippet>{post.snippet}</Snippet> : null}

                  <Actions>
                    <ButtonLink href={post.link} target="_blank" rel="noopener noreferrer">
                      Read on Medium
                    </ButtonLink>
                  </Actions>
                </TileBody>
              </Tile>
            );
          })}
        </Tiles>
      ) : (
        <EmptyState role="status" aria-live="polite">
          <p>No posts found yet.</p>
        </EmptyState>
      )}
    </StyledPublicationSection>
  );
};

export default Publications;
