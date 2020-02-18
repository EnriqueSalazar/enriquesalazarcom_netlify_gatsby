import React from 'react';
// import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import SEO from '../components/seo';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.myName = React.createRef();
        this.container = React.createRef();
    }
    componentDidMount() {
        console.log('component did mount');
        console.log(this.container.current.style.width);
        this.container.current.style.width =
            this.myName.current.offsetWidth + 'px';
        console.log(this.myName.current.offsetWidth);
        console.log(this.container.current.style.width);
    }
    render() {
        return (
            <Grid
                ref={this.container}
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ height: '100%', margin: '0 auto' }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <div
                            ref={this.myName}
                            style={{
                                //  margin: '0 auto', 
                                 width: 'max-content' }}
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

                {/* <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Link to="/page-2/">Go to page 2</Link> */}
            </Grid>
        );
    }
}

export default Main;
