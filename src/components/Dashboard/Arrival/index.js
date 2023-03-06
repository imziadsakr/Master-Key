import React from 'react' ;

import ArrivalCard from './ArrivalCard';

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        height : '100%',

        padding : '10px',

        background: 'linear-gradient(180deg, #CDAF63 1.04%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
        border: '2px solid #000000',
        boxSizing: 'border-box' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

        position : 'relative',
    },
    arrow : {
        position : 'absolute' ,

        cursor : 'pointer',
        right : 0,
        top : 0
    },
    arrivals : {
        textTransform: 'uppercase',

        direction : 'ltr',
        color: '#000000',
        fontWeight : 600,

        paddingLeft : '15px',

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    cardSlide : {
        padding : '5px',
        overflow : 'hidden',
        overflowY : 'scroll' ,

        height : 'calc(100% - 50px)',
        width : '100%',
        position : 'absolute',
        direction : 'rtl',

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
    }
}))

const Arrival = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.arrow}>
                <KeyboardArrowUpRoundedIcon />
            </Box>
            <Box className={classes.arrivals}>
                New Arrivals
            </Box>
            <Box className={classes.cardSlide}>
            {
                [...Array(20)].map((item, index) => {
                    return (
                        <ArrivalCard 
                            key = {index}
                        />
                    )
                })
            }
            </Box>
        </Box>
    )
}

export default Arrival ;