import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Center from './center';

class Main extends React.Component {
    render() {
        return (
            <Container
                maxWidth="xs"
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
                        margin: '0 auto',
                    }}
                >
                    <Grid container>
                        <Center />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Main;
