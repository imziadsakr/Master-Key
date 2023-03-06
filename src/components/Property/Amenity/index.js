import React, { useEffect, useRef } from 'react' ;
import { useMeasure } from 'react-use';

import AmenityImg from '../../../assets/property/amenity/item.png' ;

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        background: 'linear-gradient(270.04deg, #808080 -20.47%, #FFFFFF 58.57%), #808080',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius : '5px',

        padding : '10px',
    },
    title : {
        color: '#CDAF63',
        fontSize : 30,
        fontWeight : 600
    },
    amenity : {
        width : '100%',
        background: '#000000',
        border: '2px solid #CDAF63',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5
    }
}))

const Amenity = () => {
    const classes = useStyles() ;

    const [setGridCtrl, {width , height}] = useMeasure() ;

    const gridCtrl = useRef() ;

    useEffect(() => {
        setGridCtrl(gridCtrl.current) ;
    }, []) ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                The Amenities
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={2.4} ref={gridCtrl}>
                    <Box className={classes.amenity} sx={{width : width , height : width}}>
                        <Box component={'img'} src={AmenityImg} width={width} height={width}/>
                    </Box>
                </Grid>
                {
                    [...Array(19)].map((item, index) => {
                        return (
                            <Grid item xs={2.4} key={index}>
                                <Box className={classes.amenity} sx={{width : width , height : width}}>
                                    <Box  width={width} height={height} />
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default Amenity ;