import React,{useRef, useEffect} from 'react' ;

import Photos from './Photos';
import Tour from './Tour';
import YouTube from './Youtube';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        background: 'linear-gradient(180deg, rgba(205, 175, 99, 0) 0%, rgba(205, 175, 99, 0.75) 77.6%)',

        paddingTop : '30px',
        paddingBottom : '20px',
        paddingLeft : '10px',
        paddingRight : '10px',
        borderRadius : '10px',

    },
    tourTitle : {
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 30,
        fontWeight : 500,
        textAlign : 'center'
    },
    youTubeTitle : {
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 30,
        fontWeight : 500,
        textAlign : 'center'
    },
    photoTitle : {
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 30,
        fontWeight : 500,
        textAlign : 'center'
    }
}))

const Media = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Box className={classes.photoTitle}>
                        PHOTOS
                    </Box>
                    <Photos />
                </Grid>
                <Grid item xs={5} >
                    <Box className={classes.tourTitle}>
                        3D Tour
                    </Box>
                    <Tour />
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.youTubeTitle}>
                        YouTube
                    </Box>
                    <YouTube />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Media ;
