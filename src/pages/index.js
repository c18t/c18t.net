import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <Layout>
      <p style={paragraphStyles}>Hello world.</p>
      <StaticImage
        src="../images/c18t.png"
        alt="It's me!"
      ></StaticImage>
    </Layout>
  )
}

export default IndexPage
