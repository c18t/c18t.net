import * as React from "react"
import Layout from '../components/layout'

const listStyles = {
  marginBottom: 12,
}

const LinkPage = () => {
  return (
    <Layout pageTitle="c18t.net - link">
      <ul>
        <li style={listStyles}><a href="https://twitter.com/c18t">@c18t</a></li>
      </ul>
    </Layout>
  )
}

export default LinkPage
