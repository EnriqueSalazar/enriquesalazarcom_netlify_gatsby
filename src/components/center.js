import React, { useEffect, useRef } from 'react';
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

import { motion, useAnimation } from 'framer-motion';

import foto from '../images/enrique.jpg';

const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        borderRadius: 12,
        padding: 12,
        boxShadow: 'none',
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

const variant = {
    card: {
        hidden: {
            opacity: 1,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 3,
            },
        },
    },
    shadow: {
        hidden: {
            boxShadow: 'rgba(34, 35, 58, 0.2) 0px 0px 0px',
        },
        visible: {
            boxShadow: 'rgba(34, 35, 58, 0.2) 0px 14px 80px',
            transition: {
                duration: 2,
            },
        },
    },
    media: {
        hidden: {
            height: 0,
        },
        visible: {
            height: '100%',
            transition: {
                duration: 1,
            },
        },
    },
    foto: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    },
    content: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    },
};

const Center = () => {
    const control = {
        card: useAnimation(),
        content: useAnimation(),
        media: useAnimation(),
        foto: useAnimation(),
        shadow: useAnimation(),
    };

    const style = {
        base: useStyles(),
        media: useFourThreeCardMediaStyles(),
        textCardContent: useText04CardContentStyles(),
        shadow: useOverShadowStyles({ inactive: true }),
        borderedGrid: useGutterBorderedGridStyles({
            borderColor: 'rgba(0, 0, 0, 0.08)',
            height: '50%',
            padding: 0,
            margin: 16,
        }),
    };
    style.textCardContent.heading = cx(
        style.textCardContent.heading,
        style.base.heading
    );

    useEffect(() => {
        control.card.start(variant.card.visible);
    }, [control.card]);

    return (
        <motion.div
            className="container"
            variants={variant.card}
            initial="hidden"
            animate={control.card}
            onAnimationComplete={() => {
                control.content.start(variant.content.visible);
                control.shadow.start(variant.shadow.visible);
            }}
        >
            <motion.div
                className="shadow"
                variants={variant.shadow}
                initial="hidden"
                animate={control.shadow}
            >
                <Card className={cx(style.base.root, style.shadow.root)}>
                    <motion.div
                        className="media"
                        variants={variant.media}
                        initial="hidden"
                        animate={control.media}
                        onAnimationComplete={() => {
                            control.foto.start(variant.foto.visible);
                        }}
                    >
                        <motion.div
                            className="foto"
                            variants={variant.foto}
                            initial="hidden"
                            animate={control.foto}
                        >
                            <CardMedia
                                className={cx(
                                    style.base.media,
                                    style.media.root
                                )}
                                image={foto}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="content"
                        variants={variant.content}
                        initial="hidden"
                        animate={control.content}
                        onAnimationComplete={() => {
                            control.media.start(variant.media.visible);
                        }}
                    >
                        <CardContent className={style.base.content}>
                            <TextInfoCardContent
                                classes={style.textCardContent}
                                overline={'Software Developer'}
                                heading={'Enrique Salazar Sebastiani'}
                            />
                            <Divider light />

                            <Box display={'flex'}>
                                <Box
                                    p={2}
                                    flex={'auto'}
                                    className={style.borderedGrid.item}
                                    style={{
                                        margin: 16,
                                        padding: 0,
                                        marginBottom: 0,
                                    }}
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
                                    className={style.borderedGrid.item}
                                    style={{
                                        margin: 16,
                                        padding: 0,
                                        marginBottom: 0,
                                    }}
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
                    </motion.div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default Center;
