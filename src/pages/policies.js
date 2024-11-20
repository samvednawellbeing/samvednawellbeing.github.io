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

const PoliciesPage = () => {
  // console.log("pageAndCommonData", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <BaseLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Trans i18nKey="contentTitle1"></Trans>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div>
            <h5>{t("contentPolicies.usagePolicy.text1")}</h5>
            <ul>
              <li>{t("contentPolicies.usagePolicy.text2")}</li>
              <ul>
                <li>{t("contentPolicies.usagePolicy.text3")}</li>
              </ul>
              <li>{t("contentPolicies.usagePolicy.text4")}</li>
            </ul>
            {t("commonTranslations.siteNavigation.pricing.isEnabled") && (
              <>
                <h5>{t("contentPolicies.pricingPolicy.text1")}</h5>
                <ul>
                  <li>
                    <Link
                      to={t("commonTranslations.siteNavigation.pricing.linkTo")}
                    >
                      <Trans i18nKey="contentPolicies.pricingPolicy.text2"></Trans>
                      <Trans i18nKey="commonTranslations.siteNavigation.pricing.linkText"></Trans>
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {t("commonTranslations.siteNavigation.privacy.isEnabled") && (
              <>
                <h5>{t("contentPolicies.privacyPolicy.text1")}</h5>
                <ul>
                  <li>
                    <Link
                      to={t("commonTranslations.siteNavigation.privacy.linkTo")}
                    >
                      <Trans i18nKey="contentPolicies.privacyPolicy.text2"></Trans>
                      <Trans i18nKey="commonTranslations.siteNavigation.privacy.linkText"></Trans>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default PoliciesPage

export const Head = ({ data }) => {
  // const { languages, originalPath, t, i18n } = useI18next()
  // console.log('i18n.resolvedLanguage policies', i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "policies").node.data
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
        ns: { in: ["common", "policies"] }
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
