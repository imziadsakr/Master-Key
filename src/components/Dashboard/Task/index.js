import React from 'react' ;

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import TaskList from './TaskList';

import {
    Box,
    Button,
    Grid,
    TextField,
    InputAdornment
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        marginTop : '20px',

        position : 'relative' ,
        height : '300px',
        padding : '10px',

        borderRadius : '10px',        
        background: 'linear-gradient(180deg, #FFFFFF 3.03%, rgba(255, 255, 255, 0) 101.99%), #FFFFFF' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    header : {
        marginLeft : '50px',
        marginRight : '50px',
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
        }
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
        right : 0,
        top : 0
    },
    add : {
        "& .MuiButtonBase-root" : {
            color : 'white',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #000000',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            "&:hover" : {
                background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #000000',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px'
            },
            "& .MuiSvgIcon-root" : {
                color : '#CDAF63 !important'
            }
        }
    },
    addIcon : {
        background: 'linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 65%), #FFFFFF',
        borderRadius : '10px',
        padding : '0px',
    },
    infoPn : {
        display : 'flex',
    },
    info : {
        border: '2px solid #CDAF63',
        width : '115px',
        padding : '5px' ,
        marginRight : '10px',

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        textTransform: 'uppercase',
        color: 'transparent', 

        fontSize : '14px',
        textAlign : 'center',
        borderRadius : '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundImage: 'linear-gradient(to bottom, black 30.04%, #CDAF63 100%)',
        '-webkit-background-clip': 'text',
    },
    textCtrl : {
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
    }
}))

const Task = () => {
    const classes  = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.gradientText}>
                Task
            </Box>
            <Box className={classes.arrow}>
                <KeyboardArrowUpRoundedIcon />
            </Box>
            <Box className={classes.header}>
                <Grid container>
                    <Grid item xs={3} className={classes.add}>
                        <Button variant={'contained'} size={'small'} color={'inherit'}
                            startIcon={<AddRoundedIcon 
                                className={classes.addIcon}
                            />}
                        >
                            Add New Task
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Box className={classes.infoPn}>
                            <Box className={classes.info}>
                                <Box>
                                    In Progress
                                </Box>
                                <Box>
                                    5
                                </Box>
                            </Box>
                            <Box className={classes.info}>
                                <Box>
                                    Completed
                                </Box>
                                <Box>
                                    7
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={classes.textCtrl}>
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
            </Box>

            <TaskList />
        </Box>
    )
}

export default Task ;