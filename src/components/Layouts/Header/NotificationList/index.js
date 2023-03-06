import React from 'react' ;

import Notification from './Notification';

import {
    Box,
    Collapse,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        height : "calc(100vh - 60px)" ,
        width : "350px" ,

        padding : '15px',

        overflow : 'hidden',
        overflowY : 'scroll',

        position: 'fixed' ,
        top : "60px !important",
        right : '0px',
        zIndex : 1000,

        boxShadow : "-3px 0px 7px -2px gray",
        background : 'white',
        border : '1px solid gray'
    }
}))

const NotificationList = (props) => {

    const classes = useStyles() ;

    const {
        isVisibleNotifyList,
        notificationList
    } = props ;

    return (
        <Collapse in={isVisibleNotifyList} unmountOnExit timeout={'auto'} >
            <Box className={classes.root}>
                <Grid container spacing={2}>
                    {
                        notificationList && notificationList.map((notify, index) => {
                            return (
                                <Grid item xs={12} key={index}>
                                    <Notification
                                        title={notify.title}
                                        description={notify.description}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Collapse>
    )
}

export default NotificationList ;