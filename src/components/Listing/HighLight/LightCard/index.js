import React, { useEffect } from 'react' ;

import HighImg1 from '../../../../assets/listing/highlights/lightItems/item1.png' ;

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;


const useStyles = makeStyles(() => ({
    root : {
        backgroundColor : 'white',
        borderRadius : '5px',
        padding : '10px',

        paddingTop : '10px',
        paddingBottom : '10px',

        marginBottom : '10px',

        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    dot : {
        backgroundColor : 'black',
        width : '5px !important',
        height : '5px !important',
        borderRadius : '50%',

        marginLeft : '5px',
        marginRight : '5px'
    },
    name : {
        fontWeight : 'bold'
    },
    rate : {
        display : 'flex',
        alignItems : 'center',

        fontSize : '13px',

        "& .MuiSvgIcon-root" :{
            fontSize : '13px',
            color : "#CDAF63"
        }
    },
    period : {
        fontSize : '12px'
    },
    brown : {
        color : 'brown'
    },
    close : {
        display : 'flex',
        alignItems : 'center',
    },
    description : {
        wordWrap : 'break-word',
        fontSize : '12px'
    },
    check : {
        display : 'flex',
        justifyContent : 'space-between',

        "& .MuiSvgIcon-root" : {
            color : "green",
            fontSize : '12px'
        },
        fontSize : '11px'
    },
    checkItem : {
        display : 'flex',
        alignItems : 'center'
    }
}))

const LightCard = (props) => {
    const classes = useStyles() ;

    const {
        info,
        index
    } = props ;

    useEffect(() => {
        console.log(index)
    }, [index]) ;

    const Dot = () => {
        return (
            <Box className={classes.dot} />
        )
    }
    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Box className={classes.name}>
                        <u>{info && info.name}</u>
                    </Box>
                    <Box className={classes.rate}>
                        {info && info.rate}
                        <Box>
                            {
                                [...Array(5)].map((item, index) => {
                                    return (
                                        <StarIcon key={index} />
                                    )
                                })
                            }   
                        </Box>
                        830 <Dot /> $$ <Dot />Bar
                    </Box>
                    <Box className={classes.period}>
                        {info && info.period}
                    </Box>
                    <Box className={classes.close}>
                        <Box component={'span'} className={classes.brown}>Closes Soon</Box> 
                        <Box sx={{display: 'flex' , alignItems:'center'}}>
                            <Dot /> { info && info.close}
                        </Box>
                    </Box>
                    <Box className={classes.description}>
                        { info && info.description }
                    </Box>
                    <Box className={classes.check}>
                        <Box className={classes.checkItem}>
                            <CheckIcon /> Dine-in
                        </Box>
                        <Box className={classes.checkItem}>
                            <CheckIcon /> Curbside PickUp
                        </Box>
                        <Box className={classes.checkItem}>
                            <CheckIcon /> Delivery
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box component={'img'} src={info && info.img} width={'100%'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LightCard ;