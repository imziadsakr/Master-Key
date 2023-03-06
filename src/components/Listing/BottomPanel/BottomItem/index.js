
import React from 'react' ;


import clsx from 'clsx' ;

import  {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",

        backgroundColor : "white",
        width : "40px",
        height : '43px',

        cursor : 'pointer',
        "& .MuiSvgIcon-root" : {
            fontSize : '30px'
        }
    },
    flex : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center" 
    },
    img : {
        width : '25px',
        height : '25px'
    }
}));

const BottomItem = (props) => {
    
    const classes = useStyles() ;
    
    const {
        icon, isImg
    } = props ;

    return (
        <Box className={ clsx( classes.root, classes.flex ) }>
            {
                isImg ? <Box component={'img'} src={icon} className={classes.img}/> : icon
            }
        </Box>
    )
}

export default BottomItem ;