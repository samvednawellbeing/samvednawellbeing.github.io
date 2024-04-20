import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Samvedna Wellbeing" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Samvedna Wellbeing" />
        <InterestsSection sectionId="services" heading="Services (Online only for now)" />
        <ProjectsSection sectionId="features" heading="About The Therapist And Therapy Approaches" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
