import React from "react"
import PropTypes from 'prop-types'
import Img from "gatsby-image"


const Hero = ({ homepage }) => {
  const heroImage = homepage.cover_image.childImageSharp.fluid
  // const logoImage = homepage.logo.childImageSharp.fluid

  return (
    <>
      <section id="hero">
        {/*<div className="hero-title">
          <Img className="logo" fluid={logoImage} />
          <h1>{data.strapiHomepage.title}</h1>
        </div>*/}
        <Img className="hero-image" fluid={heroImage} />
      </section>
    </>
  )
}

Hero.propTypes = {
  homepage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.object.isRequired,
    logo: PropTypes.object.isRequired,
  }),
}

export default Hero
