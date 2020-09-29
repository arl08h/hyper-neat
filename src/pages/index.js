import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Introduction2 from '../components/introduction/Introduction2';
import Features from '../components/features/Features';
import Capabilities from '../components/capabilities/Capabilities';
import Contact from '../components/contact/Contact';
import Feature2 from '../components/features/Feature2';

const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
      <title>Neat Greens</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={data.site.siteMetadata.description} />
      <meta property="og:image" content={data.site.siteMetadata.image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <link rel="canonical" href={data.site.siteMetadata.url} />
    </Helmet>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Feature2 />
      <Capabilities />
      <Contact />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        image
        keywords
        title
        url
      }
    }
  }
`;
