import React from 'react' ;

import AvatarImg from '../../../assets/dashboard/head/avatar.png';

import {
    Avatar,
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles (() => ({
    root : {
        background: 'linear-gradient(180deg, #CDAF63 1.04%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
        border: '2px solid #000000',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

        marginTop : '15px'
    },
    title : {
        textTransform : 'uppercase',
        textAlign : 'center',
        color : 'white',

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    avatar : {
        marginLeft : '10px',
        marginRight : '10px',

        width : '50px !important',
        height : '50px !important'
    },
    avatarSlide : {
        marginLeft : '20px',
        marginRight : '20px',
        marginBottom : '5px',

        overflowX : 'scroll',

        display : 'flex',

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
            background: 'linear-gradient(90deg, rgb(200,200,200) 0.01%, #CDAF63 90%)' ,
            borderRadius: '10px',
        },
    }
}))

const Performer  = () => {

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Golden key performers
            </Box>

            <Box className={classes.avatarSlide}>
                {
                    [...Array(20)].map((item, index) => {
                        return (
                            <Avatar key={index} src={AvatarImg} className={classes.avatar}/>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Performer ;