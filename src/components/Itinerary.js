import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Event from './Event'

const Itinerary = ({ data }) => {
  const first_day = data.allStrapiEvent.group[0]
  const second_day = data.allStrapiEvent.group[1]

  return (
    <>
      <section id="itinerary">
        <div className="event-day">
          <div className="date">{first_day.edges[1].node.day}</div>
          {first_day.edges.map(({ node }) => (
            <Event data={node} key={node.id} />
          ))}
        </div>
        <div className="event-day">
          <div className="date">{second_day.edges[1].node.day}</div>
          {second_day.edges.map(({ node }) => (
            <Event data={node} key={node.id} />
          ))}
        </div>
      </section>
    </>
  )
}

Itinerary.propTypes = {
  data: PropTypes.shape({
    allStrapiEvent: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node:PropTypes.shape({
                id: PropTypes.string,
                Name: PropTypes.string.isRequired,
                start: PropTypes.string.isRequired,
                end: PropTypes.string,
                day: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
              }),
            }),
          ),
          fieldValue: PropTypes.string.isRequired,
        }),
      ),
    }),
  }),
}

const ItineraryQuery = props => (
  <StaticQuery
    query={graphql`
      query eventItinerary {
        allStrapiEvent(sort: {fields: [day, time], order: ASC}) {
          group(field: day) {
            edges {
              node {
                id
                Name
                day(formatString: "MMMM Do")
                location
                start(formatString: "h:mma")
                end(formatString: "h:mma")
              }
            }
            fieldValue
          }
        }
      }
    `}
    render={data => <Itinerary data={data} {...props} />}
  />
)

export default ItineraryQuery
