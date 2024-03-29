import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Details = ({ data }) => {
  const categories = data.allStrapiInfoCategory.edges

  return (
    <>
      <section id="details" className="main component">
        <h2>{`You're Invited`}</h2>
        {categories.map(({ node }) => (
          <div className="detail" key={node.id}>
            <h3 className={node.name}>{node.name}</h3>
            {node.infos.map(({ description, id }) => (
              <ReactMarkdown key={id}>{description}</ReactMarkdown>
            ))}
          </div>
        ))}
      </section>
    </>
  )
}

Details.propTypes = {
  data: PropTypes.shape({
    allStrapiInfoCategory: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            infos: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number.isRequired,
                description: PropTypes.string,
              }),
            ),
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
        allStrapiInfoCategory {
          edges {
            node {
              id
              name
              infos {
                id
                description
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
