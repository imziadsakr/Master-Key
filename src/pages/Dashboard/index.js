
import React from 'react' ;

import SidePanel from '../../components/Dashboard/SidePanel';
import DashHead from '../../components/Dashboard/DashHead' ;
import DailyNews from '../../components/Dashboard/DailyNews';
import Task from '../../components/Dashboard/Task';
import Arrival from '../../components/Dashboard/Arrival';
import Calendar from '../../components/Dashboard/Calendar';
import Performer from '../../components/Dashboard/Performer';
import PipLine from '../../components/Dashboard/PipLine';
import Activity from '../../components/Dashboard/Activity';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor : "#EEEEEE",
        
        paddingLeft : "10px",
        paddingRight : "10px" ,

        minHeight : '100vh',

        paddingTop : "20px",
        paddingBottom : "20px",

        display : "flex",
    },
    content : {
        paddingLeft : "15px",
        width : 'calc(100% - 60px)',
    },
}));

const Dashboard  = () => {

    const classes = useStyles () ;

    return (
        <Box className={classes.root}>
            <SidePanel />
            <Box className={classes.content}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <DashHead />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={9}>

                                <Grid container spacing={1}>
                                    <Grid item xs={9} >
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <DailyNews />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Task />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Arrival />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Grid item xs={12}>
                                            <Calendar />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Performer />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <PipLine />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3}>
                                <Activity />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Dashboard ;