import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Introduction2 from '../components/introduction/Introduction2';
import Features     from '../components/features/Features';
import Capabilities from '../components/capabilities/Capabilities';
import Contact      from '../components/contact/Contact';
import Feature2     from '../components/features/Feature2';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Feature2 />
      <Capabilities />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
