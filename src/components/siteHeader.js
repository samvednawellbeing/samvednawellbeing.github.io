// import * as React from "react"
import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"
// import { BrightnessHigh, BrightnessLow } from 'react-bootstrap-icons';

const SiteHeader = (themeMode) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const { languages, originalPath, i18n } = useI18next()
  // const { languages, originalPath, t, i18n } = useI18next()
  // const [isDark, setIsDark] = useState(false);
  const [languageValue] = useState(i18n.resolvedLanguage);
  // const [languageValue, setLanguageValue] = useState(i18n.resolvedLanguage);
  const localesToNames = {
    'en' : 'English',
    'gu' : 'ગુજરાતી',
    'hi' : 'हिंदी',
  }

  const languageOptions = languages.map((languageCode, index) => {
      return {name: localesToNames[languageCode], value: languageCode};
  });

  const location = useLocation();
  console.log('location.pathname',location.pathname.includes("pricing"));

  // const handleThemeChange = (event) => {
  //   try {
  //     let isDarkTheme = localStorage.getItem('isDarkTheme');
  //     isDarkTheme === 'false' ? setIsDark(true) : setIsDark(false);
  //     console.log('on change isDarkTheme read as ', isDarkTheme, isDark);
  //     localStorage.setItem('isDarkTheme', isDark);
  //     document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('isDarkTheme') === 'true' ? 'dark' : 'light');
  //     console.log('on change isDarkTheme persisted as ', isDarkTheme, isDark);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const handleLanguageChange = (event) => {
  //   setLanguageValue(event.currentTarget.value)
  //   document.documentElement.setAttribute('lang', event.currentTarget.value);
  // }

  // useEffect(() => {
  //   try {
  //     let isDarkTheme = localStorage.getItem('isDarkTheme');
  //     document.documentElement.setAttribute('lang', languageValue);
  //     console.log('isDarkTheme lang read', isDarkTheme, languageValue);
  //     if(!isDarkTheme){
  //       localStorage.setItem('isDarkTheme', isDark === false ? false : true);
  //       isDarkTheme = localStorage.getItem('isDarkTheme');
  //       console.log('isDarkTheme persisted as not found as', isDarkTheme);
  //     }
  //     localStorage.getItem('isDarkTheme') === 'false' ? setIsDark(true) : setIsDark(false);
  //     document.documentElement.setAttribute('data-bs-theme', isDarkTheme && isDarkTheme === 'true' ? 'dark' : 'light');
  //     console.log('theme persisted isDark', isDark);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [languageValue, isDark]);
  
  useEffect(() => {
    try {
      document.documentElement.setAttribute('lang', languageValue);
      console.log('lang read', languageValue);
    } catch (err) {
      console.log(err);
    }
  }, [languageValue]);

  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              alt=""
              src="/images/logo.svg"
              className="d-inline-block align-top"
              style={{ height: "41px", width: "150px", marginRight: "10px" }}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {languageOptions.map((language, index) => (
                <Link
                  key={language.value}
                  to={originalPath}
                  language={language.value}
                  className="nav-link"
                  style={{
                    color:
                      languageValue === language.value
                        ? "#17549A"
                        : "none",
                  }}
                >
                  {language.name}
                </Link>
            ))}

            {/* <ButtonGroup>
              {languageOptions.map((language, index) => (
                <Link
                  to={originalPath}
                  language={language.value}
                >
                  <ToggleButton
                    className="mb-2"
                    key={index}
                    id={`language-${index}`}
                    type="radio"
                    variant="outline-secondary"
                    name="language"
                    value={language.value}
                    checked={languageValue === language.value}
                    onChange={(event) => handleLanguageChange(event)}
                  >
                    {language.name}
                  </ToggleButton>
                </Link>
              ))}
            </ButtonGroup> */}
            
          </Nav>

          <Nav>
            <Link 
            to="/about/" 
            className="nav-link" 
            style={{
              color:
                location.pathname.includes("about")
                  ? "#17549A"
                  : "none",
            }}>
              <Trans i18nKey="commonTranslations.siteNavigation.featuresLinkText"></Trans>
            </Link>            
            <Link to="/about/" className="nav-link">
              <Trans i18nKey="commonTranslations.siteNavigation.aboutLinkText"></Trans>
            </Link>
            <Link to="/about/" className="nav-link">
              <Trans i18nKey="commonTranslations.siteNavigation.pricingLinkText"></Trans>
            </Link>
            <Link to="/about/" className="nav-link">
              <Trans i18nKey="commonTranslations.siteNavigation.contactLinkText"></Trans>
            </Link>
          </Nav>
          <Nav>
            {/* <NavDropdown
              title={i18n.resolvedLanguage}
              id="collasible-nav-dropdown"
            >
              {languages.map(languageCode => (
                <NavDropdown.Item key={languageCode}>
                  <Link
                    to={originalPath}
                    language={languageCode}
                    style={{
                      textDecoration:
                        i18n.resolvedLanguage === languageCode
                          ? "underline"
                          : "none",
                    }}
                  >
                    {languageCode}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}

            {/* <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant={isDark === false ? "dark" : "outline-light" }
              checked={isDark}
              value="1"
              onChange={(event) => handleThemeChange(event)}
            >
              {isDark === false ? <BrightnessLow color="white" size={24} /> : <BrightnessHigh color="black" size={24} />}
            </ToggleButton> */}

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteHeader
