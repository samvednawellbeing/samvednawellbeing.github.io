/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See:
 * https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 * https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import urljoin from "url-join"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

function Seo({ description, title, slug, image, isWebStory, children }) {
  // console.log("seo props", { description, title, slug, image, isWebStory, children })
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitter
          }
        }
      }
    `
  )

  const pageMeta = {
    title: title
      ? `${title} | ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    creatorTwitter: site.siteMetadata?.twitter
      ? `@${site.siteMetadata?.twitter}`
      : ``,
    pageUrl: urljoin(site.siteMetadata.siteUrl, slug),
    image: urljoin(
      site.siteMetadata.siteUrl,
      image || site.siteMetadata.siteImage
    ),
  }
  // console.log("seo pageMeta", pageMeta)
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: pageMeta.pageUrl,
      name: pageMeta.title,
      alternateName: pageMeta.title,
    },
  ];

  const { languages, originalPath, t, i18n } = useI18next()

  return (
    <>
      { 
        isWebStory === false ? 
          <html data-bs-theme="light" />
          :
          <html data-bs-theme="dark" />
      }

      <meta charSet="utf-8" />

      <title id="translated-title">{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      <meta name="image" content={pageMeta.image} />
      <link rel="icon" href={pageMeta.image} />
      <link rel="canonical" href={slug} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="google" content="notranslate" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:locale" content={i18n.resolvedLanguage} />
      <meta property="og:site_name" content={site.siteMetadata.title} />

      <meta property="og:image" content={pageMeta.image} />
      <meta property="og:image:secure_url" content={pageMeta.image} />
      <meta property="og:image:alt" content="Banner" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={pageMeta.creatorTwitter} />
      <meta name="twitter:image" content={pageMeta.image} />
      <meta name="twitter:image:src" content={pageMeta.image} />
      <meta name="twitter:site" content={pageMeta.creatorTwitter} />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Banner" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" /> */}

      { 
        isWebStory === true ? 
          <>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
          <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400" rel="stylesheet" />
          </>
          :
          null
      }

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {children}
    </>
  )
}

export default Seo
