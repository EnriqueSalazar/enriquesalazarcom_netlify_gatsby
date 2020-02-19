import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useText04CardContentStyles } from '@mui-treasury/styles/cardContent/text04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import foto from '../images/enrique.jpg';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        // maxWidth: 343,
        margin: 'auto',
        borderRadius: 12,
        padding: 12,
    },
    media: {
        borderRadius: 6,
        paddingBottom: '100%',
    },
    heading: {
        lineHeight: 1.2,
        '&:after': { height: 0 },
    },
    content: {
        textAlign: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: palette.grey[500],
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}));

const MusicCard = () => {
    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useText04CardContentStyles();
    textCardContentStyles.heading = cx(
        textCardContentStyles.heading,
        styles.heading
    );
    const shadowStyles = useOverShadowStyles({ inactive: true });
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
    });
    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={foto}
            />
            <CardContent className={styles.content}>
                <TextInfoCardContent
                    classes={textCardContentStyles}
                    overline={'Software Developer'}
                    heading={'Enrique Salazar Sebastiani'}
                    // body={
                    //     'That year, collection of songs, review melodies, memories full, this is a long and warm journey'
                    // }
                    // headingProps={

                    //     style: { lineHeight: 1.2 }
                    // }
                />
                <Divider light />

                <Box display={'flex'}>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                    >
                        {/* <Typography variant="h6" component="h3" align="left"> */}
                            <a
                                href="https://linkedin.com/in/enriquesalazar/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        {/* </Typography> */}
                    </Box>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                    >
                        {/* <Typography variant="h6" component="h3" align="right"> */}
                            <a
                                href="https://github.com/enriquesalazar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        {/* </Typography> */}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MusicCard;
