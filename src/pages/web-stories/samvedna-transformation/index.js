import * as React from "react"
import { graphql } from "gatsby"
// import { graphql, navigate } from "gatsby"
import BaseLayout from "../../../components/baseLayout"
import Seo from "../../../components/seo"
import useGeoLocation from "react-ipgeolocation"

// import "../../../scss/gatsby-imsheth-seed.scss"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

const IndexPage = () => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <amp-story
      standalone
      title="Samvedna Transformation"
      publisher="Samvedna Wellbeing"
      publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
      poster-portrait-src="/images/web-stories/samvedna-transformation/1.jpg"
    >
      {/* <!-- Page 1 --> */}
      <amp-story-page id="cover" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/images/web-stories/samvedna-transformation/1.jpg"
            width="720"
            height="1280"
            layout="responsive"
          ></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Samvedna Transformation</h1>
          <p>By Samvedna Wellbeing</p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 2 --> */}
      <amp-story-page id="page1" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/2.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 3 --> */}
      <amp-story-page id="page2" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/images/web-stories/samvedna-transformation/3.jpg"
            width="720"
            height="1280"
            layout="responsive"
          ></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
          <h1 grid-area="upper-third">Dogs</h1>
          <p grid-area="lower-third">
            {/* Dogs were probably the first tame animals. They have accompanied
            humans for some 10,000 years. Some scientists assert that all dogs,
            domestic and wild, share a common ancestor in the small South Asian
            wolf. */}
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 4 --> */}
      <amp-story-page id="page3" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="/images/web-stories/samvedna-transformation/4.jpg"
            width="720"
            height="1280"
            layout="responsive"
          ></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Birds</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" className="bottom">
          <q>
            {/* A bird is three things: Feathers, flight and song, And feathers are
            the least of these. -Marjorie Allen Seiffert */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 5 --> */}
      <amp-story-page id="page4" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/5.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 6 --> */}
      <amp-story-page id="page5" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/6.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 7 --> */}
      <amp-story-page id="page6" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/7.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 8 --> */}
      <amp-story-page id="page7" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/8.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 9 --> */}
      <amp-story-page id="page8" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/9.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 10 --> */}
      <amp-story-page id="page9" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <h1>Cats</h1>
          <amp-img
            src="/images/web-stories/samvedna-transformation/10.jpg"
            width="720"
            height="1280"
            layout="responsive"
            animate-in="pulse"
            animate-in-delay="0.1s"
          ></amp-img>
          <q>
            {/* Dogs come when they're called. Cats take a message and get back to
            you. --Mary Bly */}
          </q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Bookend --> */}
      <amp-story-bookend
        src="bookend.json"
        layout="nodisplay"
      ></amp-story-bookend>
    </amp-story>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage index', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "webStories").node.data
  )

  const location = useGeoLocation()
  if (location.country === "CA") {
    console.log("locationHead", location)
    // navigate('/')
  }

  return (
    <Seo
      title={pageTranslations.seo.title}
      description={pageTranslations.seo.description}
      slug={pageTranslations.seo.slug}
      image={pageTranslations.seo.image}
      isWebStory={pageTranslations.seo.isWebStory}
    />
  )
}

export const pageAndCommonData = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "webStories"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
