import React from "react"

const Details = ({ articles }) => (
  <div>
    <div className="uk-child-width-1-2@s" data-uk-grid="true">
      <div>
        {/*leftArticles.map((article, i) => (
          <Card
            article={article}
            key={`article__left__${article.node.slug}`}
          />
        ))*/}
      </div>
      <div>
        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {/*rightArticles.map((article, i) => (
            <Card
              article={article}
              key={`article__right__${article.node.slug}`}
            />
          ))*/}
        </div>
      </div>
    </div>
  </div>
)

export default Details
