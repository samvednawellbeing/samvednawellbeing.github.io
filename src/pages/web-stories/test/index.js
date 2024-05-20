import * as React from "react"
import { graphql } from "gatsby"
// import { graphql, navigate } from "gatsby"
import BaseLayout from "../../../components/baseLayout"
import Seo from "../../../components/seo"
import useGeoLocation from "react-ipgeolocation"

import "../../../scss/gatsby-imsheth-seed.scss"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

const IndexPage = () => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <amp-story standalone
        title="Joy of Pets"
        publisher="AMP tutorials"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="https://wallpapercave.com/wp/wp3682616.jpg">
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://wallpapercave.com/wp/wp3682616.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>The Joy of Pets</h1>
          <p>By AMP Tutorials</p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 1 (Cat): 1 layer (vertical) --> */}
      <amp-story-page id="page1" auto-advance-after="5s">
        <amp-story-grid-layer template="vertical">
          <h1>Cats</h1>
          <amp-img src="https://wallpapercave.com/wp/wp2757328.jpg"
              width="720" height="1280"
              layout="responsive"
              animate-in="pulse"
              animate-in-delay="0.1s">
          </amp-img>
          <q>Dogs come when they're called. Cats take a message and get back to you. --Mary Bly</q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 2 (Dog): 2 layers (fill + thirds) --> */}
      <amp-story-page id="page2" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://wallpapercave.com/wp/wp3682616.jpg" 
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h1 grid-area="upper-third">Dogs</h1>
            <p grid-area="lower-third">Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf.</p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 3 (Bird): 3 layers (fill + vertical + vertical) + Audio--> */}
      <amp-story-page id="page3" background-audio="https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://wallpapercave.com/wp/wp2757308.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Birds</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" className="bottom">
          <q>A bird is three things: Feathers, flight and song, And feathers are the least of these. -Marjorie Allen Seiffert</q>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 4 (Rabbit): 3 layers (fill (video) + vertical + vertical) --> */}
      <amp-story-page id="page4" auto-advance-after="2s">
        <amp-story-grid-layer template="fill">
          <amp-video autoplay loop
                width="720" height="1280"
                poster="https://wallpapercave.com/wp/wp3259019.jpg"
                layout="responsive">
              <source src="https://videos.pexels.com/video-files/5057524/5057524-uhd_2160_3840_25fps.mp4" type="video/mp4" />
          </amp-video>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Rabbits</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" className="bottom">
          <p>Rabbits can learn to follow simple voice commands and come when called by name, and are curious and playful.</p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Page 5 (Collage): 2 layers + animations --> */}
      <amp-story-page id="page5">
        <amp-story-grid-layer template="vertical" className="noedge">
          <div className="wrapper">
            <amp-img src="https://wallpapercave.com/wp/wp3682616.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </amp-img>
            <amp-img src="https://wallpapercave.com/wp/wp2757328.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.6s">
            </amp-img>
            <amp-img src="https://wallpapercave.com/wp/wp2757308.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay=".8s">
            </amp-img>
            <amp-img src="https://wallpapercave.com/wp/wp3259019.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="1s">
            </amp-img>
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" className="center-text">
          <p className="banner-text" animate-in="whoosh-in-right">Pets can lower your stress levels!</p>
        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Bookend --> */}
      <amp-story-bookend src="bookend.json" layout="nodisplay"></amp-story-bookend>
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

  const location = useGeoLocation();
  if (location.country === 'CA') {
    console.log("locationHead", location);
    // navigate('/')
  }

  return (
    <Seo
      title={pageTranslations["seoTitle"]}
      description={pageTranslations["seoDescription"]}
      slug="test"
      image="/images/favicon.png"
      isWebStory={true}
    />
  )
}

export const pageAndCommonData = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "webStories"] }, language: { eq: $language } }
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
