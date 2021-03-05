import React from "react"
import { Layout } from "../components/common"
import "../styles/success.scss"


const SuccessPage = () => (
  <Layout template={`success-page`}>
    <h1>Success!</h1>
    <p>{`We received your gift. You're the best!.`}</p>
  </Layout>
)

export default SuccessPage
