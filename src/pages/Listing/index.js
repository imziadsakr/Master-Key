import React from 'react' ;

import Option from '../../components/Listing/Option' ;
import Sorting from '../../components/Listing/Sorting' ;
import BottomPanel from '../../components/Listing/BottomPanel';
import HighLight from '../../components/Listing/HighLight';
import Map from '../../components/Listing/Map';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        padding : '10px'
    },
    
}))

const Listing = () => {
    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Option />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Sorting />
                                </Grid>
                                <Grid item xs={8}>
                                    <Map />
                                </Grid>
                                <Grid item xs={12}>
                                    <BottomPanel />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <HighLight />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Listing ;