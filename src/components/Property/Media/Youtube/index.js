import React from 'react';

import TourImg from '../../../../assets/property/media/tour/tour.png' ;

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        width : props => props.width,
        height : 'calc(100% - 45px)',

        position : 'relative'
    },
    link : {
        background : 'red',
        width : '50px',
        height: '30px',

        top : 'calc(50% - 15px)',
        left : 'calc(50% - 25px)',

        position : 'absolute',

        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

        borderRadius : '5px',
        cursor : 'pointer',

        "& .MuiSvgIcon-root" : {
            color : 'white'
        }
    }
}))
const YouTube = (props) => {
    const { width, height  } = props ;

    const classes = useStyles(props) ;

    return (
        <Box className={classes.root}>
            <Box component={'img'} src={TourImg} width={'100%'} height={'100%'}/>
            <Box className={classes.link} >
                <ArrowRightIcon />
            </Box>
        </Box>
    )
}

export default YouTube ;