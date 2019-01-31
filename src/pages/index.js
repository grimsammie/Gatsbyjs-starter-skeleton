import React from 'react';
import Layout from '../utils/Layout/Layout';
import Header from '../components/Header/Header';
import VideoSection from '../components/VideoSection/VideoSection';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      heading="What's Spoiled Milk?"
      paragraph="That's what you get from a pampered cow.🐄"
    />
    <VideoSection
      title="The Lion King" 
      src="https://www.youtube.com/embed/O9EvBdzHvqI"  
    />
  </Layout>
)

export default IndexPage
