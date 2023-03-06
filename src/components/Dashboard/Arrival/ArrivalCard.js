import React from 'react' ;

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles= makeStyles(() => ({
    root : {
        direction : 'ltr'
    },
    card : {
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',

        height : '100px',
        marginBottom : '10px',

        marginRight : '10px',
        padding : '5px'
    },
    smallCard : {
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',

        height : '90px',
        marginBottom : '10px'
    }
})) ;

const ArrivalCard = () => {

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.card}>
                <Grid container>
                    <Grid item xs={5} >
                        <Box className={classes.smallCard}>

                        </Box>
                    </Grid>
                    <Grid item xs={7}>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ArrivalCard ;