
import React from 'react' ;

import HeadImg from '../../../assets/dashboard/head/head.png' ;
import AvatarImg from '../../../assets/dashboard/head/avatar.png';

import CameraAltIcon from '@mui/icons-material/CameraAlt';

import clsx from 'clsx';

import  {
    Box,
    Grid,
    Avatar,
    List,
    ListItem,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {
        background: `url(${HeadImg}) no-repeat`,
        backgroundSize: '100% 100%',
        
        paddingRight : '15px',

        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' ,

        height : "120px",

        '& .MuiList-root' : {
            display : 'flex'
        },
        "& .MuiListItem-root" : {
            padding : '0px'
        }
    },
    flex : {
        display : "flex",
        alignItems : "flex-start",
        justifyContent : 'center'
    },
    center : {
        textAlign : 'center'
    },
    profile : {
        display : 'flex',
        justifyContent : 'flex-end' ,

        "& .MuiListItem-root" : {
            display : 'flex' ,
            alignItems : 'flex-start'
        }
    },
    fullName : {
        paddingRight : '30px'
    },
    name : {
        fontSize : '15px' ,
        fontWeight : 'bold' ,
        textTransform: 'uppercase',
        color: 'transparent', 

        backgroundImage: 'linear-gradient(to bottom, #CDAF63, white)',
        backgroundClip: 'text',
        '-webkit-background-clip': 'text'
    },
    avatar : {
        width : '65px !important',
        height : "65px !important",

        border : '2px solid #CDAF63'
    },
    camera : {
        paddingTop : '5px',
        paddingLeft : '5px',

        "& .MuiSvgIcon-root" : {
            color : "#CDAF63"
        },
        "& .MuiButtonBase-root" : {
            opacity : 0.7,
            minWidth: "40px !important",
            width: "40px !important",
            height: "30px"
        }
    },
    btPn : {
        height : '120px',

        display : "flex",
        justifyContent : 'space-between',
        flexDirection : 'column !important',
    },
    btGp : {
        paddingLeft : '10px',
        paddingBottom : '10px',

        "& .MuiButtonBase-root" : {
            fontSize : '14px',
            fontWeight : 800 ,

            border : '1px solid #CDAF63',
            marginRight : '10px',
            background : 'linear-gradient(180deg, #FFFFFF 1.04%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
            opacity: 0.75
        }
    },
    gradientText : {
        textTransform: 'uppercase',
        color: 'transparent', 

        backgroundImage: 'linear-gradient(to bottom, #CDAF63, white)',
        '-webkit-background-clip': 'text',

        textShadow: '0px 1px 1px #CDAF63, 0px 1px 1px white'
    }
}));

const DashHead = () => {
    
    const classes = useStyles() ;

    return (
        <Box className={clsx(classes.root, classes.flex)}>
            <Grid container>
                <Grid item xs={6} className={classes.btPn}>
                    <Box className={classes.camera}>
                        <Button variant='contained' color={'inherit'} >
                            <CameraAltIcon />
                        </Button>
                    </Box>
                    <Box className={classes.btGp}>
                        <Box>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Button variant='contained' color='inherit' size={'small'}>
                                        <Box className={classes.gradientText}>
                                            3 RENTALS
                                        </Box>
                                    </Button>
                                    <Button variant='contained' color='inherit' size={'small'}>
                                        <Box className={classes.gradientText}>
                                            4 SALES
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign : 'right'}}>
                                    <Button variant='contained' color='inherit' size={'small'}>
                                        <Box className={classes.gradientText}>
                                            5 NEW APPLICATIONS
                                        </Box>
                                    </Button>
                                </Grid>
                            </Grid>    
                        </Box>
                    </Box>                        
                </Grid>
                <Grid item xs={6} className={classes.profile}>
                    <List>
                        <ListItem >
                            <Box className={classes.fullName}>
                                <Box className={classes.name}>
                                    Christopher
                                </Box>
                                <Box className={classes.name}>
                                    Groenevedt
                                </Box>
                            </Box>
                        </ListItem>
                        <ListItem >
                            <Avatar src={AvatarImg} className={classes.avatar} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashHead ;