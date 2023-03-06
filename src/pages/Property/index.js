import React from 'react' ;

import Media from '../../components/Property/Media';
import Detail from '../../components/Property/Detail';
import Amenity from '../../components/Property/Amenity' ;
import Access from '../../components/Property/Access';
import Stats from '../../components/Property/Stats';
import Transporation from '../../components/Property/Transporation';

import {
    Box ,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        padding : '20px',
    },
    access : {
        height : 1850,

        '&::-webkit-scrollbar' :{
            width: '8px',
            height : '8px'
        },
      
        /* Track */
        '&::-webkit-scrollbar-track' : {
            borderRadius: '5px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            border: '1px solid rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',
        },
      
        /* Handle */
        '&::-webkit-scrollbar-thumb' : {
            background: 'linear-gradient(90deg, rgb(255,255,255) 0.01%, #CDAF63 90%)' ,
            borderRadius: '10px',
        },

        overflowY : 'scroll',

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    detail : {
        '&::-webkit-scrollbar' :{
            width: '8px',
            height : '8px'
        },
      
        /* Track */
        '&::-webkit-scrollbar-track' : {
            borderRadius: '5px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            border: '1px solid rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',
        },
      
        /* Handle */
        '&::-webkit-scrollbar-thumb' : {
            background: 'linear-gradient(90deg, rgb(255,255,255) 0.01%, #CDAF63 90%)' ,
            borderRadius: '10px',
        },

        height : 1850,

        overflowY : 'scroll',

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between'
    }
}))

const Property = () => {
    const classes = useStyles() ;
    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Media />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={7}>
                            <Box className={classes.detail}>
                                <Detail />
                                <Amenity />
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Box className={classes.access}>
                                <Access />
                                <Stats />
                                <Transporation />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Property ;
