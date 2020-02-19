import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './global.css';

import Main from '../components/main';
import SEO from '../components/seo';

const theme = createMuiTheme({
    overrides: { MuiPaper: { root: { padding: 50 } } },
    shape: { borderRadius: 50 },
    palette: {
        text: { primary: '#607d8b' },
        background: {
            default: '#cddc39',
        },
    },
});

const IndexPage = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SEO />
        <Main />
    </MuiThemeProvider>
);

export default IndexPage;
