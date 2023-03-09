import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Refund" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="refund" heading="Refund" />
      </Page>
    </>
  );
}
