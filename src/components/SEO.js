import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ title, desc, ogImage, slug }) => (
  <Helmet>
  <html lang="en" />
  <title>Lime CRM för {title}</title>
  <meta
    name="description"
    content={desc}
  />

  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/img/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon-16x16.png"
    sizes="16x16"
  />

  <link
    rel="mask-icon"
    href="/img/safari-pinned-tab.svg"
    color="#ff4400"
  />
  <meta name="theme-color" content="#fff" />

  <meta property="og:type" content="business.business" />
  <meta property="og:url" content={`https://lime-crm.se${slug}`} />
  <meta property="og:image" content={ogImage} />
</Helmet>

)

export default SEO
