import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Details = ({ data }) => {
  const details = data.allStrapiInfo.edges

  return (
    <>
      <h2>Things to Know</h2>
      <section id="details">
        {details.map(({ node }) => (
          <div className="detail" key={node.id}>
            <p>{node.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}


Details.propTypes = {
  data: PropTypes.shape({
    allStrapiInfo: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          info_category: PropTypes.shape({
            name: PropTypes.string,
          }),
        }),
      ),
    }),
  }),
}

const DetailsQuery = props => (
  <StaticQuery
    query={graphql`
      query eventDetails {
        allStrapiInfo(sort: {fields: id, order: ASC}) {
          edges {
            node {
              id
              description
              info_category {
                name
              }
            }
          }
        }
      }
    `}
    render={data => <Details data={data} {...props} />}
  />
)

export default DetailsQuery
