import * as React from "react"
import { graphql } from "gatsby"
// import { graphql, navigate } from "gatsby"
import BaseLayout from "../components/baseLayout"
import Seo from "../components/seo"
import useGeoLocation from "react-ipgeolocation"

import "../scss/gatsby-imsheth-seed.scss"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const BlogPage = ({ data }) => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  const postsTranslated = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "blog").node.data
  ).posts;
  return (
    <BaseLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h1>
            <Trans i18nKey="contentTitle1"></Trans>
          </h1>
          
            <h2></h2>
          
        </Col>
      </Row>
      <Row>
        {postsTranslated.map((post, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={4} xl={3} xxl={3}>
            <Link key={index} to={post.hrefLink} style={{ textDecoration: "none" }}>
              <Card key={index} style={{ width: '18rem', marginBottom: '2rem' }}>
                <Card.Img variant="top" src="/images/mt.jpg" />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                  <Card.Subtitle><i>{post.date}</i></Card.Subtitle>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </BaseLayout>
  )
}

export default BlogPage

export const Head = ({ data }) => {
  const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage index', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "blog").node.data
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
      slug="blog"
      image="/images/favicon.png"
      isWebStory={false}
    />
  )
}

export const pageAndCommonData = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "blog"] }, language: { eq: $language } }
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
