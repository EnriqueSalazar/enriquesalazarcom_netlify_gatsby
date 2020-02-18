import React from 'react';
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
                                <Typography variant="h4" component="h1" align="center">
                                    Enrique Salazar Sebastiani
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2" align="center">
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="h3" align="left">
                                <a
                                    href="https://linkedin.com/in/enriquesalazar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="h3" align="right">
                                <a
                                    href="https://github.com/enriquesalazar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Main;
