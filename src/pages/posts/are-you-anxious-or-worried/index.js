import * as React from "react"
import { graphql } from "gatsby"
// import { graphql, navigate } from "gatsby"
import BaseLayout from "../../../components/baseLayout"
import Seo from "../../../components/seo"
import useGeoLocation from "react-ipgeolocation"

import "../../../scss/gatsby-imsheth-seed.scss"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Test1Post = ({ data }) => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  const postTranslated = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "posts").node.data
  ).posts["are-you-anxious-or-worried"]
  // console.log("postTranslated", postTranslated);
  return (
    <BaseLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h1>
            <Trans i18nKey={postTranslated.contentTitle1}></Trans>
          </h1>
          <h6>
            <Trans i18nKey={postTranslated.date}></Trans>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <p>
            <Trans i18nKey={postTranslated.contentText.p1}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p2}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p3}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p4}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p5}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p6}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p7}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p8}></Trans>
          </p>
          <p>
            <Trans i18nKey={postTranslated.contentText.p9}></Trans>
          </p>
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default Test1Post

export const Head = ({ data }) => {
  const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage posts', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "posts").node.data
  ).posts["are-you-anxious-or-worried"]
  console.log("aaow data", pageTranslations)

  const location = useGeoLocation()
  if (location.country === "CA") {
    console.log("locationHead", location)
    // navigate('/')
  }

  return (
    <Seo
      title={pageTranslations["seoTitle"]}
      description={pageTranslations["seoDescription"]}
      slug="test1"
      image="/images/favicon.png"
      isWebStory={false}
    />
  )
}

export const pageAndCommonData = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "posts"] }, language: { eq: $language } }
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
