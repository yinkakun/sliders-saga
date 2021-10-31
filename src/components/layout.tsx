/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import * as Chakra from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';

type layoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title = '', description = '' }: layoutProps) => (
  <Fragment>
    <GlobalStyles />
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Chakra.Flex height="full" flexDirection="column">
      {children}
    </Chakra.Flex>
  </Fragment>
);

export default Layout;

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper {
        height: 100%;
      }

      body {
        font-family: 'Inter', sans-serif;
      }
    `}
  />
);
