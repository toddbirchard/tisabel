import React from "react"
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'


const Welcome = ({ introText }) => (
  <>
    <section id="welcome">
      <ReactMarkdown>{introText}</ReactMarkdown>
    </section>
  </>
)

Welcome.propTypes = {
  introText: PropTypes.string.isRequired,
}

export default Welcome
