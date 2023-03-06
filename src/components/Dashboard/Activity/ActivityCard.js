import React from 'react' ;

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import {
    Box,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles= makeStyles(() => ({
    root : {
        direction : 'ltr'
    },
    card : {
        position : 'relative',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

        marginRight : '10px',
        height : '100px',
        marginBottom : '10px',

        padding : '5px'
    },
    close : {
        position : 'absolute',
        right : 10,
        top : 3,
        "& .MuiSvgIcon-root" : {
            fontSize : '13px'
        }
    }
})) ;

const ActivityCard = () => {

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.card}>
                <Box className={classes.close} >
                    <CloseRoundedIcon />
                </Box>
            </Box>
        </Box>
    )
}

export default ActivityCard ;