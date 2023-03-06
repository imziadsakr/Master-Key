import React from 'react' ;

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import Person1 from '../../../assets/dashboard/task/people/person1.png';
import Person2 from '../../../assets/dashboard/task/people/person2.png';
import Person3 from '../../../assets/dashboard/task/people/person3.png';

import {
    Box,
    Grid,
    AvatarGroup,
    Avatar
} from  '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        marginTop : '20px',

        padding : '10px',

        position : 'relative',

        borderRadius : '10px',
        background : 'white',

        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
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
        right : 5,
        top : 10
    },
    date : {
        textAlign : 'center',
        textTransform : 'uppercase',
        fontWeight : 600,

        color: '#000000' ,

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    dateCircle : {
        cursor : 'pointer',
        width : '35px',
        height : '35px',

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
        color: 'transparent', 

        background: 'linear-gradient(180deg, #000000 28.65%, rgba(255, 255, 255, 0) 100%)',
        '-webkit-background-clip': 'text',

        textShadow: '0px 1px 1px #CDAF63, 0px 1px 1px black'
    },
    contactCard : {

        cursor : 'pointer',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around' ,

        padding : '10px',

        background: '#FFFFFF' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' ,
        borderRadius: '10px',

        marginBottom : '5px',
        marginTop : '5px'
    },
    client : {
        color: '#000000',
        fontWeight : 600,

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    ellipse : {
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',

        backgroundColor : 'white',
        border : '3px solid #CDAF63',
        borderRadius : '5px' ,
        width : 35,
        height : 35
    },
    circle : {
        borderRadius : '50%' ,
        height : '5px',
        width : '5px',
        border : '1px solid black',
        backgroundColor : '#CDAF63'
    },
    datetime : {
        display : 'flex',
        alignItems : 'flex-end'
    },
    record : {
        display : 'flex',
        alignItems : 'center'
    },
    timeIcon : {
        display : "flex",
        justifyContent : 'center'
    },
    timeSlide : {
        marginTop : '15px !important',
        direction : 'rtl' ,
        height : '280px',

        overflowY : 'scroll',

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
    log : {
        direction : 'ltr',

        padding : '10px',
        textAlign : 'center',
        textTransform: "uppercase",
        color: '#000000',

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
}))

const Calendar = () => {
    const classes = useStyles() ;

    const TimeLog = () => {
        return (
            <Box className={classes.log}>
                6 : 00 AM
            </Box>
        )
    }

    const DateCircle = (props) => {

        const {
            date
        } = props ;

        return (
            <Box className={classes.dateCircle}>
                <Box className={classes.number}>
                {
                    date
                }
                </Box>
            </Box>
        )
    }

    const ContactCard = (props) => {
        return (
            <Box className={classes.contactCard}>
                <Box className={classes.client}>
                    Contact Client
                </Box>
                <AvatarGroup max={4} sx={{direction : 'ltr'}}>
                    <Avatar alt="Remy Sharp" src={Person1} />
                    <Avatar alt="Cindy Baker" src={Person2} />
                    <Avatar alt="Cindy Baker" src={Person3} />
                </AvatarGroup>
                <Box className={classes.ellipse}>
                    <Box className={classes.circle}>

                    </Box>
                    <Box className={classes.circle}>
                        
                    </Box>
                    <Box className={classes.circle}>
                        
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.gradientText}>
                Calendar
            </Box>
            <Box className={classes.date}>
                Today january 22nd
            </Box>
            <Box className={classes.arrow}>
                <ArrowBackIosIcon /><ArrowForwardIosIcon />
            </Box>
            <Grid container sx={{marginTop : '15px'}}>
                <Grid item xs={12}>
                    <Grid container className={classes.datetime}>
                        <Grid item xs={4} className={classes.timeIcon}>
                            <AccessTimeRoundedIcon />
                        </Grid>

                        <Grid item xs={8} sx={{display : 'flex', justifyContent: 'space-around'}}>
                           {
                               [...Array(7)].map((item, index) => {
                                    return (
                                        <DateCircle 
                                            key={index}
                                            date={22}
                                        />
                                    )
                                })
                           }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.timeSlide}>
                    <Box sx={{direction : 'ltr'}}>
                    {
                        [...Array(7)].map((item, index) => {
                            return (
                                <Grid container className={classes.record} key={index}>
                                    <Grid item xs={4}>
                                        <TimeLog />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ContactCard />
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Calendar ;