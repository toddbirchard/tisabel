import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ seo = {} }) => {


  const getMetaTags = () => {
    const tags = []

    if (seo.meta_title) {
      tags.push(
        {
          property: `og:title`,
          content: seo.meta_title,
        },
        {
          name: `twitter:title`,
          content: seo.meta_title,
        }
      )
    }
    if (seo.meta_description) {
      tags.push(
        {
          name: `description`,
          content: seo.meta_description,
        },
        {
          property: `og:description`,
          content: seo.meta_description,
        },
        {
          name: `twitter:description`,
          content: seo.meta_description,
        }
      )
    }
    if (seo.shareImage) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || `http://localhost:8000`) +
        seo.shareImage.publicURL
      tags.push(
        {
          name: `image`,
          content: imageUrl,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          name: `twitter:image`,
          content: imageUrl,
        }
      )
    }
    if (seo.article) {
      tags.push({
        property: `og:type`,
        content: `article`,
      })
    }
    tags.push({ name: `twitter:card`, content: `summary_large_image` })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <Helmet
      title={seo.metaTitle}
      titleTemplate={`%s | ${siteName}`}
      link={[
        {
          rel: `icon`,
          href: favicon.publicURL,
        },
        {
          rel: `stylesheet`,
          href: `https://fonts.googleapis.com/css?family=Staatliches`,
        },
        {
          rel: `stylesheet`,
          href:
            `https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css`,
        },
      ]}
      script={[
        {
          src:
            `https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js`,
        },
        {
          src:
            `https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js`,
        },
        {
          src: `https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js`,
        },
      ]}
      meta={metaTags}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query {
    seo {
      meta_title
      meta_description
    }
  }
`
