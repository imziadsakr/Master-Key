import React, { useRef, useEffect } from 'react' ;

import PhotoItem1 from '../../../../assets/property/media/photos/item1.png';
import PhotoItem2 from '../../../../assets/property/media/photos/item2.png';

import PhotoCard from './PhotoCard';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        height : 'calc(100% - 45px)',

        display : 'flex',
        flexDirection : 'column',

        justifyContent : 'space-between',
    },
}))

const Photos = () => {
    
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <PhotoCard
                            imgSrc={PhotoItem1}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhotoCard
                            imgSrc={PhotoItem2}
                        />
                    </Grid>
                    <Grid item xs={4} >
                        <PhotoCard
                            imgSrc={PhotoItem1}
                        />
                    </Grid>
                </Grid>
            </Box>
            {
                [...Array(2)].map((item, index) => {
                    return (
                        <Box key={index}>
                            <Grid container spacing={1}>
                                <Grid item xs={4} >
                                    <PhotoCard
                                        imgSrc={PhotoItem1}
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <PhotoCard
                                        imgSrc={PhotoItem1}
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <PhotoCard
                                        imgSrc={PhotoItem1}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }
        </Box>
    )
}
export default Photos ;
