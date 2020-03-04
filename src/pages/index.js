import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.net.min';

import './global.css';

import Main from '../components/main';
import SEO from '../components/seo';

const theme = createMuiTheme({
    overrides: { MuiPaper: { root: { padding: 50 } } },
    shape: { borderRadius: 50 },
    palette: {
        text: { primary: '#607d8b' },
        background: {
            default: 'black',
        },
    },
});

const IndexPage = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: myRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xfa6600,
                    backgroundColor: 0x0,
                    points: 12.0,
                    maxDistance: 33.0,
                    spacing: 14.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <div style={{ height: '100%' }} ref={myRef}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <SEO />
                <Main />
            </MuiThemeProvider>
        </div>
    );
};

export default IndexPage;
