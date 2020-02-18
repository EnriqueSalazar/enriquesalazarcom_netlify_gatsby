import React from 'react';
// import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Main extends React.Component {
    render() {
        return (
            <Container
                maxWidth="sm"
                style={{
                    height: '100%',
                }}
            >
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{
                        height: '100%',
                        width: 'min-content',
                        margin: '0 auto',
                    }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <div
                                style={{
                                    width: 'max-content',
                                }}
                            >
                                <Typography variant="h4" align="center">
                                    Enrique Salazar Sebastiani
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" align="center">
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" align="left">
                                LinkedIn
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" align="right">
                                Github
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* <Link to="/page-2/">Go to page 2</Link> */}
                </Grid>
            </Container>
        );
    }
}

export default Main;
