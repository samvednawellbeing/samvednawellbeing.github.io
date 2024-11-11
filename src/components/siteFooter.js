import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {
  Whatsapp,
  TwitterX,
  Instagram,
  Facebook,
  Linkedin,
  EnvelopeAt,
} from "react-bootstrap-icons"

const SiteFooter = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            authorTitle
            authorSiteUrl
            twitter
            instagram
            facebook
            linkedin
            whatsapp
            whatsappMessage
            mail
          }
        }
      }
    `
  )
  const { languages, originalPath, t, i18n } = useI18next()

  return (
    <footer
      style={{
        backgroundColor: "#17549a",
        paddingTop: "5px",
        paddingRight: "5px",
        paddingBottom: "15px",
        paddingLeft: "5px",
        textDecoration: "none",
      }}
    >
      <Container>
        <Row>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.therapies.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.therapies.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.therapies.linkText"></Trans>
                  </Link>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.pricing.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.pricing.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.pricing.linkText"></Trans>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.about.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.about.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.about.linkText"></Trans>
                  </Link>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.blog.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.blog.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.blog.linkText"></Trans>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.careers.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.careers.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.careers.linkText"></Trans>
                  </Link>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.contact.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.contact.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.contact.linkText"></Trans>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.terms.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.terms.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.terms.linkText"></Trans>
                  </Link>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.privacy.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.privacy.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.privacy.linkText"></Trans>
                  </Link>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                {t("commonTranslations.siteNavigation.refund.isEnabled") && (
                  <Link
                    to={t("commonTranslations.siteNavigation.refund.linkTo")}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <Trans i18nKey="commonTranslations.siteNavigation.refund.linkText"></Trans>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            {site?.siteMetadata?.whatsapp ? (
              <a
                href={`https://wa.me/${
                  site?.siteMetadata?.whatsapp +
                  `` +
                  site?.siteMetadata?.whatsappMessage
                }`}
                target="_blank"
                rel="noreferrer"
                aria-label={`https://wa.me/${
                  site?.siteMetadata?.whatsapp +
                  `` +
                  site?.siteMetadata?.whatsappMessage
                }`}
              >
                <Whatsapp
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}

            {site?.siteMetadata?.mail ? (
              <a
                href={`mailto:${site.siteMetadata?.mail}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`mailto:${site.siteMetadata?.mail}`}
              >
                <EnvelopeAt
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}

            {site?.siteMetadata?.instagram ? (
              <a
                href={`https://instagram.com/${site.siteMetadata?.instagram}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`https://instagram.com/${site.siteMetadata?.instagram}`}
              >
                <Instagram
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}

            {site?.siteMetadata?.twitter ? (
              <a
                href={`https://twitter.com/${site?.siteMetadata?.twitter}`}
                target="_blank"
                rel="noreferrer"
                aria-label="{`https://twitter.com/${site?.siteMetadata?.twitter}`}"
              >
                <TwitterX
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}

            {site?.siteMetadata?.facebook ? (
              <a
                href={`https://facebook.com/${site.siteMetadata?.facebook}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`https://facebook.com/${site.siteMetadata?.facebook}`}
              >
                <Facebook
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}

            {site?.siteMetadata?.linkedin ? (
              <a
                href={`https://www.linkedin.com/company/${site.siteMetadata?.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`https://www.linkedin.com/company/${site.siteMetadata?.linkedin}`}
              >
                <Linkedin
                  size={32}
                  style={{
                    margin: "10px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                />
              </a>
            ) : null}
          </Col>
        </Row>
        <Row
          className="text-center footer-text"
          style={{ textDecoration: "none", color: "#5484bc" }}
        >
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Trans i18nKey="commonTranslations.siteFooter.marksToInclude"></Trans>
            {` ${site?.siteMetadata?.title}. `}
            <Trans i18nKey="commonTranslations.siteFooter.allRightsReserved"></Trans>
          </Col>
        </Row>
        <Row
          className="text-center footer-text"
          style={{ textDecoration: "none", color: "#5484bc" }}
        >
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Trans i18nKey="commonTranslations.siteFooter.authorPreTitle"></Trans>{" "}
            <a
              href={site.siteMetadata?.authorSiteUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#8baccc" }}
            >
              {site.siteMetadata?.authorTitle}
            </a>{" "}
            <Trans i18nKey="commonTranslations.siteFooter.authorPostTitle"></Trans>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default SiteFooter
