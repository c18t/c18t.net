import * as React from "react"
import Layout from '../components/layout'

const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <Layout pageTitle="c18t.net">
      <p style={paragraphStyles}>Hello world.</p>
    </Layout>
  )
}

export default IndexPage
