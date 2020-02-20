import React from 'react';
import cx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useText04CardContentStyles } from '@mui-treasury/styles/cardContent/text04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

import foto from '../images/enrique.jpg';

const useStyles = makeStyles(({ palette }) => ({
    root: {
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
        padding: 0,
        margin: 16,
        '&:last-child': {
            paddingBottom: 0,
        },
    },
}));

const Center = () => {
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
        padding: 0,
        margin: 16,
    });
    console.log(foto);
    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={foto}
            />
            <CardContent
                className={styles.content}
            >
                <TextInfoCardContent
                    classes={textCardContentStyles}
                    overline={'Software Developer'}
                    heading={'Enrique Salazar Sebastiani'}
                />
                <Divider light />

                <Box display={'flex'}>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                        style={{ margin: 16, padding: 0, marginBottom: 0 }}
                    >
                        <a
                            href="https://linkedin.com/in/enriquesalazar/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Box>
                    <Box
                        p={2}
                        flex={'auto'}
                        className={borderedGridStyles.item}
                        style={{ margin: 16, padding: 0, marginBottom: 0 }}
                    >
                        <a
                            href="https://github.com/enriquesalazar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Center;
