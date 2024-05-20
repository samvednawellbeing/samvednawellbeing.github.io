const { languages, defaultLanguage } = require("./languages")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `samvedna wellbeing`,
    description: `Transform & Heal: Embrace your journey through holistic mental health therapy.`,
    siteUrl: `https://samvednawellbeing.org/`,
    authorTitle: `imsheth`,
    authorSiteUrl: `https://www.imsheth.com/?utm_source=samvedna_wellbeing&utm_medium=web&utm_campaign=samvedna_wellbeing_footer_website&utm_id=SWB1`,
    twitter: `samvednaw`,
    instagram: `samvedna_wellbeing`,
    facebook: `samvednawellbeing`,
    linkedin: `samvednawellbeing`,
    whatsapp: `919712096479`,
    whatsappMessage: `?text=Hello%20Samvedna%20Wellbeing%2C%0A%0AI%20just%20stumbled%20upon%20your%20website%20and%20would%20like%20to%20connect.`,
    mail: `samvedna.wellbeing@gmail.com`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `samvedna wellbeing`,
        short_name: `samvedna wellbeing`,
        start_url: `/`,
        background_color: `#1b549c`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#1b549c`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-6T60D6RTNJ", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-plugin-datadog",
      options: {
        site: 'datadoghq.com',
        sampleRate: 100,
        enabled: true,
        rum: {
          applicationId: 'YOUR_APP_ID',
          clientToken: 'YOUR_CLIENT_TOKEN',
        },
        logs: {
          clientToken: 'YOUR_CLIENT_TOKEN',
        }
      }
    },
  ],
}
