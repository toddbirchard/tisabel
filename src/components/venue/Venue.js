import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Layer, Feature } from 'react-mapbox-gl'
import Map from './Map'
import 'mapbox-gl/dist/mapbox-gl.css'

export const Venue = ({ data }) =>{
  const venueInfo = data.strapiVenue
  const locationUrl = venueInfo.locationUrl
  const venueUrl = venueInfo.venueUrl

  return (
    <>
      <section id="venue" className="sidebar component">
        <a href={locationUrl} className="map-wrapper">
          <Map
            style="mapbox://styles/thetoddfather/cklyj9csm5mqa17mnfktc4j5k"
            containerStyle={{
              height: `90px`,
              width: `100%`,
              minWidth: `90px`,
              marginRight: `15px`,
            }}
            center={[-73.988126, 40.721547]}
            zoom={[11]}
          >
            <Layer type="symbol" id="marker">
              <Feature
                coordinates={[-73.988126, 40.721547]}
                zoom={[16.54]}
              />
            </Layer>
          </Map>
        </a>

        <div className="venue-details">
          <a href={venueUrl}><span className="venue-name">{venueInfo.name}</span></a>
          <span className="address-line">{venueInfo.streetAddress}</span>
          <span className="address-line">{venueInfo.cityAddress}</span>
          <span className="address-line">{venueInfo.crossStreets}</span>
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
      cityAddress: PropTypes.string.isRequired,
      streetAddress: PropTypes.string.isRequired,
      venueUrl: PropTypes.string.isRequired,
      locationUrl: PropTypes.string.isRequired,
      crossStreets: PropTypes.string.isRequired,
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
          streetAddress
          cityAddress
          locationUrl
          venueUrl
          crossStreets
        }
      }
    `}
    render={data => <Venue data={data} {...props} />}
  />
)

export default VenueQuery
