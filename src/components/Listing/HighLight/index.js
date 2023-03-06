import React from 'react' ;

import LightCard from './LightCard';

import Item1Img from '../../../assets/listing/highlights/lightItems/item1.png' ;
import Item2Img from '../../../assets/listing/highlights/lightItems/item2.png' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;


const useStyles = makeStyles(() => ({
    root : {
        position : 'relative' ,

        height : '100%',
        maxHeight : '100%',

        overflow : 'hidden',

        borderRadius : '5px',

        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #CDAF63' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',

        padding : '5px',
    },
    highlight : {
        textAlign : 'center',
        fontSize : '20px',

        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    highlightSlide : {

        top : 45,
        height : 'calc(100% - 50px)',

        overflow : 'hidden',
        overflowY : 'scroll',

        position : 'absolute',
        paddingRight : '5px',
        marginRight : '5px',

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

const HighLight = () => {
    const classes = useStyles() ;

    const list = [
        {
            "name" : "Dutch Kills",
            "rate" : "4.2",
            "period" : "27-24 Jackson Ave",
            "close" : "11PM",
            "description" : "Classic & newly invented craft coktails served with hand-cut ice in a dark, throwback-style space.",
            "img" : Item1Img
        },
        {
            "name" : "LIC Bar",
            "rate" : "4.5",
            "period" : "45-58 Vernon Blvd",
            "close" : "11PM",
            "description" : "Brick-walled corner watering hole that offers plenty of beers on tap, long tables & backyard graden.",
            "img" : Item2Img
        },
        {
            "name" : "Gantry Bar LIC",
            "rate" : "4.4",
            "period" : "47-02 Vernon Blvd",
            "close" : "11PM",
            "description" : "Hip bar & eatery offering small plates, sandwiches & bruch, plus craft beers & cocktails.",
            "img" : Item1Img
        },
        {
            "name" : "Dutch Kills",
            "rate" : "4.2",
            "period" : "27-24 Jackson Ave",
            "close" : "11PM",
            "description" : "Classic & newly invented craft coktails served with hand-cut ice in a dark, throwback-style space.",
            "img" : Item2Img
        },
        {
            "name" : "Dutch Kills",
            "rate" : "4.2",
            "period" : "27-24 Jackson Ave",
            "close" : "11PM",
            "description" : "Classic & newly invented craft coktails served with hand-cut ice in a dark, throwback-style space.",
            "img" : Item1Img
        },
        {
            "name" : "LIC Bar",
            "rate" : "4.5",
            "period" : "45-58 Vernon Blvd",
            "close" : "11PM",
            "description" : "Brick-walled corner watering hole that offers plenty of beers on tap, long tables & backyard graden.",
            "img" : Item2Img
        },
        {
            "name" : "Gantry Bar LIC",
            "rate" : "4.4",
            "period" : "47-02 Vernon Blvd",
            "close" : "11PM",
            "description" : "Hip bar & eatery offering small plates, sandwiches & bruch, plus craft beers & cocktails.",
            "img" : Item1Img
        }
    ]
    
    return (
        <Box className={classes.root}>
            <Box className={classes.highlight}>
                Neighborhood Highlights
            </Box>
            <Box className={classes.highlightSlide}>
                {
                    list.map((item, index) => {
                        return (
                            <LightCard key={index}
                               info={item}
                               index={index}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default HighLight ;