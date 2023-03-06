
import React, { useEffect, useState , useContext , useCallback} from 'react';

import { Link , useNavigate} from 'react-router-dom' ;

import { connect } from 'react-redux';

import PropTypes from 'prop-types' ;
import { isMobile } from 'react-device-detect' ;
import clsx from 'clsx' ;

import { LanguageContext } from '../../../../utils/Language';

import { makeStyles } from '@mui/styles';

import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem
} from '@mui/material' ;


const useStyles = makeStyles((theme) => ({
    drawer: {
        "& .MuiBackdrop-root": {
            display: "none"
        },
        "& a" : {
            textDecoration : "none",
            color : "white" ,
            "& :hover" : {
                color : "white !important"
            }
        },
    },
    drawerPaper: {
        width : "100%",
        top : "60px !important",
        backgroundColor : theme.palette.primary.main + " !important",
        color : "white !important",
        '& ::-webkit-scrollbar': {
            display: 'none !important',
        },
    },
})) ;

const MobileNavbar = (props) => {
  
    const { dictionary } = useContext(LanguageContext) ;

    const classes = useStyles()
    
    const menuItems = [
        {
        name : dictionary.cryptochange ,
        link : "/cryptoexchange"
        },
        {
        name : dictionary.futurestrading ,
        link : "/futuretrading"
        } ,
        {
        name : dictionary.buycrypto ,
        link : "/buycrypto"
        },
        {
        name : dictionary.caxrewards ,
        link : "caxrewards"
        },
        {
        name : dictionary.aboutus ,
        link : "aboutus"
        }
    ]
    
    const {
        isDrawMobileNavbar, handleDrawMobileNavbar
    } = props ;

    return (
            <Drawer
                variant='persistent'
                anchor='left'
                open={isDrawMobileNavbar}
                className={classes.drawer}
                classes={{
                    paper : classes.drawerPaper
                }}
            >
            <List>
                {
                    menuItems.map((item , index) => {
                        return (
                            <Box key={index}>
                                <Link to={item.link}>
                                    <ListItem button onClick={handleDrawMobileNavbar}>
                                        {item.name}
                                    </ListItem>
                                    <Divider />
                                </Link>
                            </Box>
                        )
                    })
                }
            </List>
            </Drawer> 
    )  
}

export default MobileNavbar ;