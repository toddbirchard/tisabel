const path = require(`path`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      strapiHomepage {
        title
      }
      strapiSeo {
        meta_title
        meta_description
      }
    }`
  )
  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Query results
  const homepage = result.data.strapiHomepage
  const seo = result.data.strapiSeo

  // Templates
  const indexTemplate = path.resolve(`./src/pages/index.js`)
  console.log(seo)


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
