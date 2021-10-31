import React from 'react';
import { PageProps } from 'gatsby';
import * as Chakra from '@chakra-ui/react';
import Layout from '@/components/layout';
import Container from '@/components/container';

const Home: React.FC<PageProps> = () => (
  <Layout title="hello">
    <Chakra.Box>
      <Container>hello world</Container>
    </Chakra.Box>
  </Layout>
);

export default Home;
