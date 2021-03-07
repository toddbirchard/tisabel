import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { getImage } from "gatsby-plugin-image"

const MetaData = ({ seo, pageClasses }) => {
  const share_image = getImage(seo.share_image)

  return (
    <Helmet>
      <html lang="en-US" className={pageClasses} />
      <body className={pageClasses} />
      <title>{seo.meta_title}</title>
      <meta name="description" content={seo.meta_description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="canonical" href={seo.canonical}/>

      {/* Facebook */}
      <meta property="og:site_name" content={seo.meta_title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={seo.meta_title}/>
      <meta property="og:description" content={seo.meta_description}/>
      <meta property="og:url" content={seo.canonical}/>
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="523" />
      <meta property="og:image" content={share_image} />

      {/* Twitter */}
      <meta name="twitter:title" content={seo.meta_title}/>
      <meta name="twitter:description" content={seo.meta_description}/>
      <meta name="twitter:url" content={seo.canonical}/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={share_image} />

      <script type="application/ld+json">
        {`
          {
            "endDate": "07/31/2021 02:00PM",
            "name": "Todd & Isabel's Wedding",
            "url": "https://tisabel4ever.com/",
            "@context": "https://schema.org/",
            "startDate": "07/30/2021 3:00PM",
            "location": {
              "@type": "Place",
              "name": "Mr. Purple",
              "sameAs": "https://www.mrpurplenyc.com/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "171 Ludlow Street, 15th floor",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10002",
                "addressCountry": "USA"
              }
            },
            "@type": "Event",
            "image": {
              "@type": "ImageObject",
              "url": "https://cdn.hackersandslackers.com/assets/share@2x.jpg",
              "width": "1000",
              "height": "523"
            },
            "description": "Todd and Isabel's wedding invitation."
          }`
        }
      </script>
    </Helmet>
  )
}

MetaData.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string.isRequired,
    meta_description: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
    share_image: PropTypes.object,
  }),
  pageClasses: PropTypes.string,
}

export default MetaData
