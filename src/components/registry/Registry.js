import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { RegistryItem } from '.'


const Registry = ({ data }) => {
  const items = data.allStripePrice.edges

  return (
    <>
      <section id="donate">
        <h2>Contribute</h2>
        <div className="item">
          {items.map(({ node }) => (
            <RegistryItem data={node} key={node.id} />
          ))}
        </div>
      </section>
    </>
  )
}

const RegistryQuery = props => (
  <StaticQuery
    query={graphql`
      query registryQuery {
        allStripePrice(filter: {product: {statement_descriptor: {eq: "Todd & Isabel"}}}) {
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
                type
                localFiles {
                  childImageSharp {
                    fixed(width: 125, height: 125) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Registry data={data} {...props} />}
  />
)

export default RegistryQuery
