import React from 'react';
import { Link } from 'gatsby';
// import { Button } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';

const IndexPage = () => (
    <Container maxWidth="sm">
        <Grid container>
            <Grid item xs={12}>
                <div
                    style={{
                        color: 'hotpink',
                        backgroundColor: 'green',
                    }}
                >
                    Enrique Salazar Sebastiani
                </div>
            </Grid>
            <Grid item xs={12}>
                <div
                    style={{
                        color: 'hotpink',
                        backgroundColor: 'green',
                    }}
                >
                    Developer
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>LinkedIn</div>
            </Grid>
            <Grid item xs={6}>
                <div>Github</div>
            </Grid>
            {/* <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Link to="/page-2/">Go to page 2</Link> */}
        </Grid>
    </Container>
);

export default IndexPage;
