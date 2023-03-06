
import React from 'react';

import { useState, useContext, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom' ;

import { CA1HEX_HOST_URL } from '../../../static/constants';
import { getCookie } from '../../../utils/helper';
import socketIOClient from 'socket.io-client' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { SignOutUser } from '../../../redux/actions/auth';

/// assets
import LogoImg from "../../../assets/logo.png" ;
import LogoMobileImg from '../../../assets/mobile_logo.png';

/// component
import LanguageSelector from './LanguageSelector/LanguageSelector';
import MobileNavbar from './MobileNavbar';
import NotificationList from './NotificationList';
import Setting from './Setting';

import { LanguageContext } from '../../../utils/Language' ;

import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu' ;
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { makeStyles } from '@mui/styles';

import {
    Box ,
    Grid,
    IconButton,
    List,
    ListItem,
    useMediaQuery
} from '@mui/material' ;

const useStyles = makeStyles((theme) => ({
    root : {
        height : theme.layout.headerHeight,
        width : "100%" ,
        margin : "0px"  ,
        display : "flex" ,
        alignItems : "center" ,
        position : "fixed" ,
        top : 0,
        backgroundColor : "white !important" ,
        zIndex : 1300,
        
        "& .MuiGrid-root" : {
            height : theme.layout.headerHeight ,
        },
        "& .MuiGrid-item" : {
            display : "flex" ,
            alignItems : "center" ,
        },
        "& .MuiList-root" : {
            display : "flex" ,
            alignItems : "center" ,
            padding : "0px"
        },
        "& .MuiListItem-root" : {
            width : "auto !important" ,
            minWidth : "50px !important" ,
            fontSize : "14px" ,
            cursor : "pointer" ,
            color : theme.palette.primary.main ,
            ['@media (max-width : 450px)'] : {
                padding : "5px !important",
                minWidth : "0px !important"
            }
        } ,
        "& a" : {
            textDecoration : "none",
            lineHeight : "0px" , 
            "& :hover" : {
                color : "red !important"
            }
        },
        "& .MuiSvgIcon-root" : {
            color : theme.palette.primary.main
        }
    } ,
    logo : {
        paddingLeft : "20px" ,
    } ,
    translate : {
        minWidth : "100px !important"
    },
    menuOther : {
        display : "flex" ,
        justifyContent : "flex-end",
        
        ['@media (max-width : 1110px)'] : {
            justifyContent : "flex-end",
        }
    }
})) ;

let cookieTimer ;

const Header = (props) => {

    const match1 = useMediaQuery('(min-width : 1110px )') ;
    const match2 = useMediaQuery('(min-width : 585px)') ;
    const match3 = useMediaQuery('(min-width : 285px)') ;

    const {
        isAuthenticated, SignOutUser
    } = props ;

    const [ isDrawMobileNavbar, setIsDrawMobileNavbar ] = useState(false) ;
    const [ isVisibleNotifyList, setIsVisibleNotifyList] = useState(false) ;

    const [ isOpenSetting , setIsOpenSetting ] = useState(false) ;
    const anchorRef = useRef(null) ; 

    const [notifications, setNotifications] = useState(null);
    const [sokectId, setSocketId] = useState();
    const socketRef = useRef();

    const { dictionary } = useContext(LanguageContext) ;
    
    const classes = useStyles();
    
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
    
    const handleDrawMobileNavbar = () => {
        setIsDrawMobileNavbar(!isDrawMobileNavbar) ;
    }

    const handleVisibleNotifyList = () => {
        setIsVisibleNotifyList(!isVisibleNotifyList) ;
    }

    const handlePopOver = () => {
        setIsOpenSetting(!isOpenSetting) ;
    }

    const handleSignOut = async () => {
        handlePopOver() ;
        SignOutUser() ;
    }

    const handleSocketId = (id) =>{
        setSocketId(id) ;
    }

    useEffect(() => {
        socketRef.current = socketIOClient.connect(CA1HEX_HOST_URL) ;
      
        socketRef.current.on('getId', data => { 
            handleSocketId(data)
        })
        
        const msg = {
            greeter : "Hello CA1HEX Support Team." ,
            content: "I Need Notification List.", 
            id: sokectId
        }
    
        socketRef.current.emit('sendClientMsg', msg);

        socketRef.current.on('sendDataServer', dataGot => {
            setNotifications(dataGot);
        })
    
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        if(isAuthenticated){

            cookieTimer = setInterval( async () => {
                console.log("***cookie timer***") ;
                if(!getCookie('access_token')) {
                    SignOutUser() ;
                    clearInterval(cookieTimer) ;
                }
            } , 1000) ;

        } else {
            clearInterval(cookieTimer) ;
        }
    }, [isAuthenticated]) ;

    useEffect(() => {
        if(match1) setIsDrawMobileNavbar(false);
    }, [match1]) ;

    return (
        <>
            <Box  className={classes.root}>
                {/* logo Image  */}
                <Link to={"/"}>
                    {
                        match2 ? <Box component={"img"} src={LogoImg} className={classes.logo}/>
                                : <Box component={"img"} src={LogoMobileImg} className={classes.logo}/>
                    }
                </Link>
                <Grid container>
                    {
                         match1 && <Grid item xs={8} className={classes.menuList}>
                                        <List>
                                        {
                                            menuItems.map( ( item , index) => {
                                                return (
                                                            <Link to={item.link} key={index}>
                                                                <ListItem>
                                                                    { item.name }
                                                                </ListItem>
                                                            </Link>
                                                        )
                                            })
                                        }
                                        </List>
                                    </Grid>
                    }
                    <Grid item xs={match1 ? 4 : 12} className={classes.menuOther}>
                        <List >
                            {
                                !isAuthenticated && <>
                                                        <Link to={"/signup"}>
                                                            <ListItem>
                                                                {
                                                                    match3 ? "SignUp" : <HowToRegIcon />
                                                                }
                                                            </ListItem>
                                                        </Link>
                                                        <Link to={"/login"} >
                                                            <ListItem ref={anchorRef}>
                                                                {
                                                                    match3 ? "LogIn" : <LoginIcon/>
                                                                }
                                                            </ListItem>
                                                        </Link>
                                                    </>
                            }
                            {
                                isAuthenticated &&  <>
                                                        <Link to={"/wallet"}>
                                                            <ListItem>
                                                                {
                                                                    match3 ? "Wallet" : <AccountBalanceWalletIcon />
                                                                }
                                                            </ListItem>
                                                        </Link>
                                                        <ListItem ref={anchorRef} onClick={(e) => handlePopOver(e)}>
                                                            {
                                                                match3 ? "Setting" : <ManageAccountsIcon />
                                                            }
                                                        </ListItem>
                                                    </>
                            }
                            <ListItem onClick={handleVisibleNotifyList}>
                                {
                                    !isVisibleNotifyList ? <NotificationsNoneIcon /> : <NotificationsIcon />
                                }
                            </ListItem>
                            <ListItem >
                                <LanguageSelector />
                            </ListItem>
                            {
                                !match1 &&  <ListItem>
                                                <IconButton onClick={() => handleDrawMobileNavbar()}>
                                                    <MenuIcon />
                                                </IconButton>
                                            </ListItem>
                            }
                        </List>
                    </Grid>
                </Grid>
            </Box>

            <MobileNavbar 
                isDrawMobileNavbar={isDrawMobileNavbar}
                handleDrawMobileNavbar={handleDrawMobileNavbar}
            />
            <NotificationList 
                notificationList={notifications}
                isVisibleNotifyList={isVisibleNotifyList}
            />
            <Setting
                open={isOpenSetting}
                handlePopOver={handlePopOver}
                handleSignOut={handleSignOut}
                anchorEl={anchorRef ? anchorRef.current : null}
            />
        </>
    )  
}

Header.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = {
    SignOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;