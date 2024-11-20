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

const PricingPage = () => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <BaseLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h1>
            <Trans i18nKey="contentTitle1"></Trans>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          {t("commonTranslations.siteNavigation.pricing.isEnabled") && (
            <>
              <h5>{t("pricingPolicy.text1")}</h5>
              <ul>
                <li>{t("pricingPolicy.text2")}</li>
                <li>{t("pricingPolicy.text3")}</li>
                <li>{t("pricingPolicy.text4")}</li>
                <li>{t("pricingPolicy.text5")}</li>
              </ul>
              <h5>{t("refundPolicy.text1")}</h5>
              <ul>
                <li>{t("refundPolicy.text2")}</li>
                <li>{t("refundPolicy.text3")}</li>
                <ul>
                  <li>{t("refundPolicy.text4")}</li>
                  <li>{t("refundPolicy.text5")}</li>
                  <li>{t("refundPolicy.text6")}</li>
                </ul>
                <li>{t("refundPolicy.text7")}</li>
                <li>{t("refundPolicy.text8")}</li>
              </ul>
            </>
          )}
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default PricingPage

export const Head = ({ data }) => {
  // const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage pricing', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "pricing").node.data
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
      filter: { ns: { in: ["common", "pricing"] }, language: { eq: $language } }
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
