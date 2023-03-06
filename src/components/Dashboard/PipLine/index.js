import React,{ useState } from 'react' ;

import clsx from 'clsx';

import OrderList from './OrderList';

import {
    Box, 
    Grid,
    ButtonGroup,
    Button,
    TextField,
    InputAdornment,
} from '@mui/material' ;

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(270.04deg, #808080 -20.47%, #FFFFFF 58.57%), #808080',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        marginTop : '20px',

        position : 'relative',

        padding : '10px'
    },
    gradientText : {
        position : 'absolute' ,
        
        textTransform: 'uppercase',
        color: 'transparent', 

        backgroundImage: 'linear-gradient(to bottom, #CDAF63, white)',
        '-webkit-background-clip': 'text',

        textShadow: '0px 1px 1px #CDAF63, 0px 1px 1px black'
    },
    arrow : {
        position : 'absolute' ,

        cursor : 'pointer',
        right : 10,
        top : 10
    },
    sellBuyContainer : {
        marginTop : '20px',
        backgroundColor : 'white',
        borderRadius : '10px',
        padding : '10px',
        paddingTop : '25px'
    }, 
    head : {
        display : 'flex' ,
        alignItems : 'center'
    },
    headBtGp : {
        textAlign : 'center',
        "& .MuiButtonGroup-root" : {
            border : '2px solid black',
            borderRadius : '10px',
            padding: '0px',
            backgroundColor : 'white'
        },
        "& .MuiButtonBase-root" : {
            border : 'none !important',
            minWidth : '70px !important'
        },
        "& .MuiButtonBase-root:first-child" : {
            borderTopRightRadius : "10px !important",
            borderBottomRightRadius : '10px !important',
            color : 'black',
        },
        "& .MuiButtonBase-root:last-child" : {
            borderTopLeftRadius : '10px !important',
            borderBottomLeftRadius : '10px !important',
            color : 'black',
        }
    },
    dateGrid : {
        display : 'flex' ,
        justifyContent : 'center'
    },
    datePn : {
        marginTop : '60px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',

        width : '80px',
        paddingTop : '10px',
        paddingBottom : '10px',

        background: 'rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)' ,
        borderRadius: '10px'
    },
    dateActive : {
        background: '#CDAF63',
        border: '1px solid #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)' ,
        borderRadius: '10px',
    },
    dateLb : {
        cursor : 'pointer',
        color : 'white',
        width : '80px',
        fontSize : '20px',
        textAlign : 'center',
        boxSizing: 'border-box',

        marginTop : '10px',
        marginBottom : '10px'
    },
    textCtrl : {
        paddingLeft : '30px',
        "& .MuiTextField-root" : {
            boxShadow : 'inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25) ',
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 'bold',
            textAlign : 'center',

            "&:hover" : {
                color : 'blue !important'
            }
        }
    },
    active : {
        backgroundColor : 'black !important' ,
        color : 'white !important'
    }
}))
const PipLine = () => {
    const classes = useStyles() ;

    const [ period , setPeriod ] = useState(1) ;
    const [ pipeType, setPipeType ] = useState(1) ;
    const [ listType, setListType ] = useState(1) ;

    const handlePipeType = (type) => {
        setPipeType(type) ;
    }
    const handleListType = (type) => {
        setListType(type) ;
    }
    const handlePeriod = (sel) => {
        setPeriod(sel) ;
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.gradientText}>
                PipeLine
            </Box>
            <Box className={classes.arrow}>
                <KeyboardArrowUpRoundedIcon />
            </Box>

            <Grid container sx={{marginBottom : '20px'}}>
                <Grid item xs={12} className={classes.headBtGp}>
                    <ButtonGroup>
                        <Button varaint='contained' size='small' className={pipeType === 1 && classes.active} onClick={() => handlePipeType(1)}>SALES</Button>
                        <Button varaint='contained' size='small' className={pipeType === 2 && classes.active} onClick={() => handlePipeType(2)}>RENTALS</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.sellBuyContainer}>
                    <Grid container className={classes.head}>
                        <Grid item xs={4} className={classes.headBtGp}>
                            <ButtonGroup>
                                <Button varaint='contained' size='small' className={listType === 1 && classes.active} onClick={() => handleListType(1)}>Sellers</Button>
                                <Button varaint='contained' size='small' className={listType === 2 && classes.active} onClick={() => handleListType(2)}>Buyers</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={8} className={classes.textCtrl}>
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
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={8}>
                                <OrderList />
                        </Grid>
                        <Grid item xs={4} className={classes.dateGrid}>
                            <Box className={classes.datePn}>
                                <Box className={clsx( classes.dateLb, period === 1 && classes.dateActive)} onClick={() => handlePeriod(1)}>
                                    30 day
                                </Box>
                                <Box className={clsx(classes.dateLb , period === 2 && classes.dateActive)} onClick={() => handlePeriod(2)}>
                                    60 day
                                </Box>
                                <Box className={clsx(classes.dateLb, period === 3 && classes.dateActive)} onClick={() => handlePeriod(3)}>
                                    90 day
                                </Box>
                                <Box className={clsx(classes.dateLb, period === 4 && classes.dateActive)} onClick={() => handlePeriod(4)}>
                                    180 day
                                </Box>
                                <Box className={clsx(classes.dateLb, period === 5 && classes.dateActive)} onClick={() => handlePeriod(5)}>
                                    1 Year
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PipLine ;