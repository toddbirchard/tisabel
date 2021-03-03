import React from "react"
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Hero = ({ homepage }) => {
  const heroImage = getImage(homepage.cover_image)
  const mobileHeroImage = getImage(homepage.cover_image_mobile)

  return (
    <>
      <section className="hero">
        <GatsbyImage
          className="hero-image"
          alt={`Todd & Isabel`}
          image={heroImage}
        />
        <GatsbyImage
          className="hero-image-mobile"
          alt={`Todd & Isabel`}
          image={mobileHeroImage}
        />
      </section>
    </>
  )
}

Hero.propTypes = {
  homepage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.object.isRequired,
    cover_image_mobile: PropTypes.object.isRequired,
  }),
}

export default Hero
