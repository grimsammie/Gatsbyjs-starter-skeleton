import React from 'react'

import Layout from '../utils/Layout/Layout'
import Header from '../components/Header/Header'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header
      heading="NOT FOUND"
      paragraph="You just hit a route that doesn't exist... the sadness.☹"
    />
  </Layout>
)

export default NotFoundPage
