import React from 'react' ;

import ActivityCard from './ActivityCard';

import TimerImg from '../../../assets/dashboard/activity/timer.png' ;


import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        overflow : 'hidden',

        maxHeight : '100%',
        height : '100%',

        display : 'flex',
        flexDirection : 'column',

        padding : '10px',

        background: 'linear-gradient(180deg, #000000 1.04%, rgba(255, 255, 255, 0) 100%)',
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
    gradientText : {
        width : '110px',
        textTransform: 'uppercase',
        color: 'transparent', 

        backgroundImage: 'linear-gradient(0deg, #CDAF63 10.04%, white 100%)',
        '-webkit-background-clip': 'text',
        fontWeight : 600
    },
    cardSlide : {
        padding : '10px',
        overflow : 'hidden',
        overflowY : 'scroll' ,

        top : 65,
        height : 'calc(100% - 80px)',
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
    },
    head : {
        display : 'flex',
        justifyContent : 'space-between',
        paddingRight : '30px',
        paddingLeft : '10px'
    }
}))

const Activity = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.head}>
                <Box className={classes.gradientText}>
                    Recent Activity
                </Box>
                <Box component={'img'} src={TimerImg} width={60}>
                    
                </Box>
            </Box>
            <Box className={classes.cardSlide}>
            {
                [...Array(20)].map((item, index) => {
                    return (
                        <ActivityCard 
                            key = {index}
                        />
                    )
                })
            }
            </Box>
        </Box>
    )
}

export default Activity ;