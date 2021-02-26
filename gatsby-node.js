const path = require(`path`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      homepage {
        title
      }
      seo {
        meta_title
        meta_description
        json_ltd
        favicon {
          url
        }
        logo {
          url
        }
        share_image {
          url
        }
      }
    }`
  )
  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Query results
  const homepage = result.data.homepage
  const seo = result.data.seo

  // Templates
  const indexTemplate = path.resolve(`./src/templates/index.js`)

  createPage({
    path: `/`,
    component: indexTemplate,
    context: {
      slug: `home`,
      title: homepage.title,
      seo: seo,
    },
  })

}
