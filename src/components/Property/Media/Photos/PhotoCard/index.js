import React from 'react' ;

import {
    Box, 
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        display : 'flex',
        alignItems : 'center',

        width : '100%',
        height : '100%',

        background: '#FFFFFF',
        border: '1px solid #CDAF63',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

        overflow : 'hidden',
    }
}));

const PhotoCard = (props) => {    
    const {
        imgSrc,
        width,
    } = props ;

    const classes = useStyles(props) ;

    return (
        <Box className={classes.root}>
            {
                <Box component={'img'} src={imgSrc} width={'100%'} height={'100%'}/> 
            }
        </Box>
    )
}

export default PhotoCard ;