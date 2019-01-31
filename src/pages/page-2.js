import React from 'react';

import Layout from '../utils/Layout/Layout';
import Header from '../components/Header/Header';
import VideoSection from '../components/VideoSection/VideoSection';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Header
      heading="Hi from the second page"
      paragraph="Welcome to page 2. No Whack cow jokes here."
    />
    <VideoSection
      title="Dumbo"
      src="https://www.youtube.com/embed/7NiYVoqBt-8"   
    />
  </Layout>
)

export default SecondPage
