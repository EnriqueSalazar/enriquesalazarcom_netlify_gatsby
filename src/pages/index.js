import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './global.css';

import Main from '../components/main';
import SEO from '../components/seo';

const IndexPage = () => (
    <React.Fragment>
        <CssBaseline />
        <SEO />
        <Main />
    </React.Fragment>
);

export default IndexPage;
