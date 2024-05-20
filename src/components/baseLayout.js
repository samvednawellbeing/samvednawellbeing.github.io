import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import SiteHeader from "./siteHeader"
import SiteFooter from "./siteFooter"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

const Layout = ({ children }) => {
  return (
    <>
      <SiteHeader themeMode="light"/>
      <Container style={{ minHeight: "720px" }}>{children}</Container>
      <SiteFooter />
    </>
  )
}

export default Layout
