import React from 'react';

import TourImg from '../../../../assets/property/media/tour/tour.png' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        height : 'calc(100% - 45px)',
    }
}))
const Tour = (props) => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box component={'img'} src={TourImg} width={'100%'} height={'100%'}/>
        </Box>
    )
}

export default Tour ;