import React from "react"
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
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"

const IndexPage = () => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <BaseLayout>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/samvedna_wellbeing_logo_mark.svg"
            style={{
              height: "auto",
              width: "20%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack gap={2} className="my-auto mx-auto">
            <div>
              <h1>
                <Trans i18nKey="contentTitle1"></Trans>
              </h1>
            </div>
            <div>
              <h5>
                <Trans i18nKey="contentSubTitle1"></Trans>
              </h5>
            </div>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div>
            <p>{t("contentBrand.text1")}</p>
            <p>{t("contentBrand.text2")}</p>
            <p>{t("contentBrand.text3")}</p>
            <p>{t("contentBrand.text4")}</p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            rounded
            src="/images/therapy_center.jpg"
            style={{
              height: "auto",
              width: "40%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            rounded
            src="/images/samvedna_wellbeing_founder_therapist_bhumika_sheth.jpg"
            style={{
              height: "auto",
              width: "50%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div>
            <p>{t("contentFounder.text1")}</p>
          </div>
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  // const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage index', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "index").node.data
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
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
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
