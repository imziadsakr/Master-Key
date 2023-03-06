

import React from 'react' ;

import {
    Box,
    CircularProgress
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {

        marginTop : theme.layout.headerHeight,

        display : 'flex',
        alignItems : 'center' ,
        justifyContent : 'center' ,

        height : "calc(100vh - 60px)" ,

    }
}))
const Loading = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <CircularProgress />
        </Box>
    )
}

export default Loading ;