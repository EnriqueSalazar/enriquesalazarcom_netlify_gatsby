import React from 'react';
// import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import './global.css';

// import SEO from '../components/seo';

const IndexPage = () => (
    <React.Fragment>
        <Container maxWidth="sm" 
        style={{ height: '100%' }}
        >
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ height: '100%' }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">
                            Enrique Salazar Sebastiani
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center">Developer</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" align="left">LinkedIn</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" align="right">Github</Typography>
                    </Grid>
                </Grid>

                {/* <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Link to="/page-2/">Go to page 2</Link> */}
            </Grid>
        </Container>
    </React.Fragment>
);

export default IndexPage;
