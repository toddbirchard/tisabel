import React from "react"
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Hero = ({ homepage }) => {
  const heroImage = getImage(homepage.cover_image)

  return (
    <>
      <section id="hero">
        <GatsbyImage
          className="hero-image"
          alt={`hero`}
          image={heroImage}
        />
      </section>
    </>
  )
}

Hero.propTypes = {
  homepage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.object.isRequired,
  }),
}

export default Hero
