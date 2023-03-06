import React from 'react' ;

import UnderGroundImg from '../../../assets/property/transporation/underground.png';
import BusImg from '../../../assets/property/transporation/bus.png';
import BicycleImg from '../../../assets/property/transporation/bicycle.png';

import {
    Box, 
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        background: 'linear-gradient(270deg, rgba(205, 175, 99, 0) 0%, rgba(205, 175, 99, 0.75) 77.6%), #FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,

        padding : 10,

        "& img" : {
            width : 90,
            height : 80
        }
    },
    title : {
        fontFamily : 'cursive',
        fontSize : 30
    },
    info : {
        display : 'flex',
        alignItems : 'center'
    },
    letter : {
        marginLeft : 10
    }
}))
const Transporation = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Transporation
            </Box>
            <Box className={classes.info}>
                <Box>
                    <Box component={'img'} src={UnderGroundImg} />
                </Box>
                <Box className={classes.letter} component={'span'}>
                    Nearest subway location is
                </Box>
            </Box>
            <Box className={classes.info}>
                <Box>
                    <Box component={'img'} src={BusImg} />
                </Box>
                <Box className={classes.letter} component={'span'}>
                    Nearest buy location is
                </Box>
            </Box>
            <Box className={classes.info}>
                <Box>
                    <Box component={'img'} src={BicycleImg} />
                </Box>
                <Box className={classes.letter} component={'span'}>
                    Nearest city bike location is
                </Box>
            </Box>
        </Box>
    )
}

export default Transporation ;