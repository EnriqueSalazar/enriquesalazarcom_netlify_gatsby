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

const useStyles = makeStyles(() => ({
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
                    body={
                        'That year, collection of songs, review melodies, memories full, this is a long and warm journey'
                    }
                    // headingProps={

                    //     style: { lineHeight: 1.2 }
                    // }
                />
            </CardContent>
        </Card>
    );
};

export default MusicCard;
