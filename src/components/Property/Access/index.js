import React, { useEffect, useRef } from 'react' ;

import AccessImg from '../../../assets/property/access/key.png' ;

import { useMeasure } from 'react-use';

import {
    Box,
    Grid,
    TextField
} from '@mui/material' ;

import { makeStyles  } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        border : '1px solid green',

        background: '#FFFFFF' ,
        border: '1px solid #CDAF63',
        boxSizing: 'border-box' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,

        padding : 10,

        marginBottom : 10
    },
    title : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-end',

        fontSize : 35 ,
        fontWeight :600,
        paddingRight : 10,
        "& img" : {
            marginLeft : 10
        }
    },
    label : {
        fontFamily : 'cursive',

        marginTop : 10,
        marginBottom : 10,
        
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 25,
    },
    transferLabel : {
        fontFamily : 'cursive',

        marginTop : 10,
        marginBottom : 10,
        
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    number : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        width : '100%',
        height : '100%',

        background: '#FFFFFF',
        border: '1px solid #CDAF63' ,
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5
    },
    textCtrl : {
        paddingTop : '0px !important',

        display : 'flex',
        flexDirection : 'column',

        "& .MuiFormControl-root" : {
            marginRight : '30px',
        },
        "& .MuiTextField-root" : {
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius : '5px',
            border : '1px solid #CDAF63'
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 600,
            padding : 5,
            background : 'white',
            borderRadius : 5,

            "&:hover" : {
                color : 'blue !important'
            }
        },
    },
}))

const Access = () => {
    const classes = useStyles() ;

    const [ setGridCtrl, {width, height} ] = useMeasure() ;

    const gridCtrl = useRef() ;

    useEffect(() => {
        setGridCtrl(gridCtrl.current) ;
    }, []) ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Access <Box component={'img'} src={AccessImg} width={30} height={30}/>
            </Box>
            <Box className={classes.label}>
                Building Code
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={2} ref={gridCtrl}>
                        <Box className={classes.number} sx={{height : width}}>
                            1
                        </Box>
                    </Grid>
                    {
                        [...Array(5)].map((item, index) => {
                            return (
                                <Grid item xs={2} key={index}>
                                    <Box className={classes.number} >
                                        { index + 2 }
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Box className={classes.label}>
                Lockbox Code
            </Box>
            <Box>
                <Grid container spacing={1}>
                    {
                        [...Array(6)].map((item, index) => {
                            return (
                                <Grid item xs={2} key={index}>
                                    <Box className={classes.number} sx={{height : width}}>
                                        { index + 1 }
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Grid container spacing={1} sx={{mt : 2}}>
                <Grid item xs={4}>
                    <Box className={classes.transferLabel}>
                        Transfer Info
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.textCtrl}>
                        <TextField 
                            size={'small'}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.textCtrl}>
                        <TextField 
                            size={'small'}
                            fullWidth
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{mt : 1}}>
                <Grid item xs={4}>
                    <Box className={classes.transferLabel}>
                        Transfer Info
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.textCtrl}>
                        <TextField 
                            size={'small'}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.textCtrl}>
                        <TextField 
                            size={'small'}
                            fullWidth
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Access ;