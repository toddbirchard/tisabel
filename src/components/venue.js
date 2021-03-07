import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


const Venue = ({ data }) =>{
  const venueInfo = data.strapiVenue

  return (
    <>
      <section id="venue" className="sidebar component">
        <a href={venueInfo.url} className="venue-name">{venueInfo.name}</a>
        <span className="address-line">{venueInfo.street_address}</span>
        <span className="address-line">{venueInfo.city_address}</span>
        <span className="address-line">{venueInfo.cross_streets}</span>
      </section>
    </>
  )
}

Venue.propTypes = {
  data: PropTypes.shape({
    strapiVenue: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city_address: PropTypes.string.isRequired,
      street_address: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      cross_streets: PropTypes.string.isRequired,
    }),
  }),
}


const VenueQuery = props => (
  <StaticQuery
    query={graphql`
      query venueInfo {
        strapiVenue {
          id
          name
          street_address
          city_address
          url
          cross_streets
        }
      }
    `}
    render={data => <Venue data={data} {...props} />}
  />
)


export default VenueQuery
