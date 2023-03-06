import React, { useState } from 'react' ;

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import AvatarImg from '../../../assets/dashboard/head/avatar.png';

import ArrivalImg1 from '../../../assets/listing/arrivals/arrival1.png' ;
import ArrivalImg2 from '../../../assets/listing/arrivals/arrival2.png' ;
import ArrivalImg3 from '../../../assets/listing/arrivals/arrival3.png' ;
import ArrivalImg4 from '../../../assets/listing/arrivals/arrival4.png' ;
import ArrivalImg5 from '../../../assets/listing/arrivals/arrival5.png' ;
import ArrivalImg6 from '../../../assets/listing/arrivals/arrival6.png' ;

import {
    Box,
    Grid,
    TextField,
    InputAdornment,
    ButtonGroup,
    Button,
    Avatar
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;


const useStyles = makeStyles(() => ({
    root : {
        padding : '10px' ,

        borderRadius : '5px' ,
        background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #000000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
    search : {
        borderRadius : '10px',
        padding : '10px',

        background: 'linear-gradient(180deg, #CDAF63 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',

        "& .MuiTextField-root" : {
            boxShadow : 'inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25) ',
            backgroundColor : 'white',
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 'bold',

            "&:hover" : {
                color : 'blue !important'
            }
        },
    },
    left : {
        borderRadius : '10px',
        backgroundColor : 'white',

        padding : '10px'
    },
    btGp : {
        "& .MuiButtonGroup-root" : {
            border : '2px solid black',
            borderRadius : '10px',
            padding: '0px',
            backgroundColor : 'white'
        },
        "& .MuiButtonBase-root" : {
            border : 'none !important',
            minWidth : '70px !important',
            color : 'black'
        },
    },
    active : {
        backgroundColor : 'black !important' ,
        color : 'white !important'
    },
    code : {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    codeCtrl : {
        paddingTop : '0px !important',

        "& .MuiFormControl-root" : {
            width : '90px',
            marginRight : '30px'
        },
        "& .MuiTextField-root" : {
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius : '5px',
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 'bold',
            padding : '5px',

            "&:hover" : {
                color : 'blue !important'
            }
        },
    },
    bottom : {
        paddingTop : '80px !important',

        fontSize : '20px'
    },
    gradientText : {
        
        cursor : 'pointer',

        textTransform: 'captalize',
        color: 'transparent', 

        background: 'linear-gradient(180deg, rgba(205, 175, 99, 0.9) 10.15%, rgba(205, 175, 99, 0) 100.08%), #FFFFFF',
        '-webkit-background-clip': 'text',

        // textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)',
        fontWeight : 600
    },
    resultCircle : {
        marginLeft : '15px',

        cursor : 'pointer',
        width : '30px',
        height : '30px',

        position : 'relative' ,

        display : "flex",
        alignItems : 'center',
        justifyContent : 'center',

        borderRadius : '50%',

        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #CDAF63' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    number : {
        position : 'absolute' ,
        
        textTransform: 'uppercase',
        color: 'black', 

        background: 'linear-gradient(180deg, #000000 28.65%, rgba(255, 255, 255, 0) 100%)',
        '-webkit-background-clip': 'text',
        fontSize : '14px'
    },
    result : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-end'
    },
    avatar : {
        width : '65px !important',
        height : "65px !important",

        border : '2px solid #CDAF63'
    },
    avatarImg : {
        width : '20%',
        display : 'flex',
        justifyContent : 'flex-end'
    },
    right : {
        height : '100%'
    },
    arrival : {
        color: '#FFFFFF',
        fontSize : '20px',

        width : '80%',

        display :'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    newArrivals : {
        display : 'flex',
        alignItems : 'center',
        width : '100%'
    },
    arrivalGrid: {
        display : 'flex',
        justifyContent : 'center'
    },
    arrivalPn : {
        paddingLeft : '20px',
        display : 'flex',
        width : '100%',
    },
    arrivalImg : {
        width : '100%',
        height : '100%',
    },
    arrivalCard : {
        borderRadius : '5px',
        width : '20%',
        marginLeft : '-15px'
    }
}))

const Option = () => {
    const classes = useStyles() ;

    const [ optionType, setOptionType ] = useState(1) ;

    const arrivalList = [
        ArrivalImg1,
        ArrivalImg2,
        ArrivalImg3,
        ArrivalImg4,
        ArrivalImg5,
        ArrivalImg6
    ]

    const handleOptionType = (type) => {
        setOptionType(type) ;
    }

    const ResultCircle = (props) => {

        const {
            resultCnt
        } = props ;

        return (
            <Box className={classes.resultCircle}>
                <Box className={classes.number}>
                {
                    resultCnt
                }
                </Box>
            </Box>
        )
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6} className={classes.left}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className={classes.search}>
                                <TextField 
                                    size={'small'}
                                    placeholder={'SEARCH'}
                                    InputProps={{
                                        endAdornment : <InputAdornment position='end'>
                                            <SearchRoundedIcon />
                                        </InputAdornment>,
                                        inputProps : {
                                            min : 0
                                        }
                                    }}
                                    
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} className={classes.btGp}>
                            <ButtonGroup>
                                <Button varaint='contained' size='small' className={optionType === 1 ? classes.active : ''} onClick={() => handleOptionType(1)}>SALES</Button>
                                <Button varaint='contained' size='small' className={optionType === 2 ? classes.active : ''} onClick={() => handleOptionType(2)}>RENTALS</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12} className={classes.code}>
                            LL CODE
                        </Grid>
                        <Grid item xs={12} className={classes.codeCtrl}>
                            <TextField 
                                size={'small'}
                            />
                            <TextField 
                                size={'small'}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.bottom}>
                            <Grid container>
                                <Grid item xs={6} >
                                    <Box className={classes.gradientText}>
                                        Advanced Options +
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className={classes.result}>
                                        <Box className={classes.gradientText}>
                                            Search Results
                                        </Box>
                                        <ResultCircle 
                                            resultCnt={125}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container className={classes.right}>
                        <Box item xs={12} className={classes.newArrivals}>
                            <Box className={classes.arrival}>
                                New Arrivals
                            </Box>
                            <Box className={classes.avatarImg}>
                                <Avatar src={AvatarImg} className={classes.avatar} />
                            </Box>
                        </Box>
                        <Box item xs={12} className={classes.arrivalGrid}>
                            <Box className={classes.arrivalPn}>
                                {
                                    [...Array(6)].map((item, index) => {
                                        return (
                                            <Box  key={index} className={classes.arrivalCard}>
                                                <Box component={'img'} src={arrivalList[index]} className={classes.arrivalImg}/>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Option ;