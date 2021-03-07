import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layer, Feature } from 'react-mapbox-gl'
import Map from './Map'

export const Venue = ({ data }) =>{
  const venueInfo = data.strapiVenue

  return (
    <>
      <section id="venue" className="sidebar component">
        <Map
          style="mapbox://styles/thetoddfather/cklyj9csm5mqa17mnfktc4j5k"
          containerStyle={{
            height: `90px`,
            width: `100%`,
            marginRight: `20px`,
          }}
          center={[-73.988126, 40.721547]}
          zoom={[11]}
        >
          <Layer type="symbol" id="marker">
            <Feature coordinates={[-73.988126, 40.721547]} zoom={[16.54]} />
          </Layer>
        </Map>
        <div className="venue-details">
          <a href={venueInfo.url} className="venue-name">{venueInfo.name}</a>
          <span className="address-line">{venueInfo.street_address}</span>
          <span className="address-line">{venueInfo.city_address}</span>
          <span className="address-line">{venueInfo.cross_streets}</span>
        </div>
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
