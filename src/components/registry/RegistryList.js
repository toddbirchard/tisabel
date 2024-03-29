import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import RegistryItem from './RegistryItem'


const RegistryList = ({ data }) => {
  const items = data.allStripePrice.edges

  return (
    <>
      <section id="registry" className="sidebar component">
        <h2 className="registry-title">Contribute</h2>
        {items.map(({ node }) => (
          <RegistryItem item={node} key={node.id} />
        ))}
      </section>
    </>
  )
}

RegistryList.propTypes = {
  data: PropTypes.shape({
    allStripePrice: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            unit_amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
            product:PropTypes.shape({
              description: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
              statement_descriptor: PropTypes.string.isRequired,
              localFiles: PropTypes.arrayOf(
                PropTypes.shape({
                  childImageSharp: PropTypes.object.isRequired,
                }),
              ),
            }),
          }),
        }),
      ),
    }),
  }),
}

const RegistryListQuery = props => (
  <StaticQuery
    query={graphql`
      query registryQuery {
        allStripePrice(
          filter: {product: {statement_descriptor: {eq: "Todd & Isabel"}}}
          sort: {fields: unit_amount, order: ASC}
        ) {
          edges {
            node {
              id
              unit_amount
              currency
              product {
                description
                name
                id
                statement_descriptor
                localFiles {
                  childImageSharp {
                    gatsbyImageData(
                      width: 130,
                      height: 130,
                      placeholder: BLURRED,
                      formats: [AUTO, WEBP, JPG]
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <RegistryList data={data} {...props} />}
  />
)

export default RegistryListQuery
