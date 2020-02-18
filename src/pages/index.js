import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import './global.css';

import Main from '../components/main';
import SEO from '../components/seo';

const IndexPage = () => (
    <Container maxWidth="sm" style={{ height: '100%' }}>
        <SEO />
        <CssBaseline />
        <Main />
    </Container>
);

export default IndexPage;
