import React from 'react' ;

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;


const useStyles = makeStyles(() => ({
    root : {
        display : 'flex',
        justifyContent : 'center',

        width : '100%',

        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        border : '1px solid gray',
        borderRadius : '10px',

        marginBottom : '10px',
    },
    img : {
        width : '40%',
        height : 'auto',
    },
    info : {
        paddingTop : '10px',
        width : '60%',
        paddingLeft : '10px',

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between' 
    },
    street : {
        fontFamily : 'cursive',
        display : 'flex',
        alignItems : 'center',

        paddingRight : '5px',

        "& .MuiSvgIcon-root" : {
            fontSize : '35px'
        },

        "& img" : {
            width : '25px',
            height : '25px',
            marginRight : '5px'
        },

        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : '19px'
    },
    name : {
        fontFamily : 'cursive',
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    heart : {
        paddingRight : '10px',
        paddingBottom : '10px',
        display : "flex",
        justifyContent : 'flex-end',

        "& .MuiSvgIcon-root" : {
            color :  '#CDAF63'
        }
    }
}))

const SortItem = (props) => {
    const classes = useStyles() ;

    const {
        imgSrc,
        street,
        icon,
        itemName
    } = props ;

    return (
        <Box className={classes.root}>
            <Box className={classes.img}>
                <Box component={'img'} src={imgSrc} width={'100%'} height={'100%'}/>
            </Box>
            <Box className={classes.info}>
                <Box>
                    <Box className={classes.street}>
                        <Box component={'img'} src={ icon } /> {street}
                    </Box>
                    <Box className={classes.name}>
                        { itemName }
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.heart}>
                        <FavoriteBorderOutlinedIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SortItem ;