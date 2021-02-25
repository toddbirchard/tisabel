import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        seo {
          meta_title
          meta_description
        }
      }
    `}
    render={(data) => (
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">{data.seo.siteName}</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <button
                className="uk-button uk-button-default uk-margin-right"
                type="button"
              >
                Categories
              </button>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
)

export default Nav
