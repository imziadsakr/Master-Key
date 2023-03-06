import React from 'react' ;

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import Avatar1Img from '../../../assets/property/stats/avatar1.png' ;
import Avatar2Img from '../../../assets/property/stats/avatar2.png' ;
import Avatar3Img from '../../../assets/property/stats/avatar3.png' ;

import ReactApexChart from 'react-apexcharts' ;

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        padding : 10,
        background: 'linear-gradient(180deg, rgba(205, 175, 99, 0.75) 13.02%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
        border: '1px solid #FFFFFF' ,
        boxSizing: 'border-box' ,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

        "& .apexcharts-toolbar" : {
            visibility : 'hidden'
        },

        marginBottom : 10
    },
    title : {
        color: '#000000' ,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',

        fontSize : 25,
        fontWeight : 600
    },
    circleBt : {
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
    icon : {
        display : 'flex',
        alignItems : 'center',

        "& span" : {
            marginLeft : 10,
            fontFamily : 'cursive'
        }
    },
    center : {
        textAlign : 'center',

        "& span" : {
            padding : 10,
            fontFamily : 'cursive'
        }
    },
    number : {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 99.99%, rgba(205, 175, 99, 0.75) 100%), #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5
    },
    numberLabel : {
        fontFamily : 'cursive'
    },
    teamLabel : {
        fontFamily : 'cursive'
    },
    graph : {
        marginTop : 50,

        paddingTop : 20,
        borderTop : '1px solid lightgray',
    },
    top3 : {
        fontFamily : 'cursive',
        fontSize : 25,
        fontWeight : 600,
        textAlign : 'center'
    },
    topPn : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',

        background: 'rgba(0, 0, 0, 0.1)',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(4px)',

        borderRadius: 10,

        padding : 10,
        marginBottom : 5,
        marginTop : 5
    },
    topName : {
        fontFamily : 'cursive',
        fontSize : 20
    },
    topAvatar : {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 99.99%, rgba(205, 175, 99, 0.75) 100%), #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,

        display : "flex",
        alignItems : 'center'
    },
    topIcon : {
        width : 50,
        heiht : 50
    },
    activity : {
        border : '1px solid red',
        height : '100%',

        padding : 5,

        background: 'linear-gradient(0.13deg, #000000 -54.16%, rgba(255, 251, 251, 0.552083) 34.71%, rgba(0, 0, 0, 0) 34.71%), #FFFFFF',
        border: '1px solid #CDAF63',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5
    },
    recent : {
        fontFamily : 'cursive',
        fontSize : 20
    },
    topData : {
        padding : 5,

        display : 'flex'
    },
    topBigAvatar : {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 99.99%, rgba(205, 175, 99, 0.75) 100%), #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        padding : 15,

        display : 'flex',
        alignItems : 'center'
    },
    topBigIcon : {
        width : 40,
        height : 40
    },
    name : {
        marginLeft : 10,
        fontFamily : 'cursive',
        fontSize : 25
    },
    date : {
        color: 'rgba(0, 0, 0, 0.5)',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginLeft : 10,
    },
    topList : {
        dispaly : 'flex',
        flexDirection : 'column' ,

        justifyContent : 'space-between',

        width : '100%',
        height : 50
    }
}))

const Stats = () => {
    const classes = useStyles() ;

    const series = [{
        name: 'Inflation',
        data: [2.3, 2.5, 2.0, 2.1, 1.7, 2.6, 1.2]
    }] ;

    const options = {
        chart: {
          height: '150px',
          type: 'bar',
        },
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        plotOptions: {
          bar: {
            borderRadius: 5,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: false,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            maxWidth: 50,
            formatter: function (val) {
              return val + "%";
            }
          },
        },
        title: {
          floating: true,
          align: 'center',
          style: {
            color: '#444'
          }
        },
        tooltip : {
            show: false,
            enabled : false
        }
      } ;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                The Stats
            </Box>
            <Grid container sx={{mt : 2}}>
                <Grid item xs={6} className={classes.icon}>
                    <Box className={classes.circleBt}>
                        <EventAvailableIcon />
                    </Box>
                    <Box component={'span'} >
                        Total Showings
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.icon}>
                    <Box className={classes.circleBt}>
                        <AccessTimeIcon />
                    </Box>
                    <Box component={'span'}>
                        Avg Showing Duration
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={{mt : 2 }}>
                <Grid item xs={6} className={classes.center}>
                    <Box className={classes.number} component={'span'}>
                        100
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.center}>
                    <Box className={classes.number} component={'span'}>
                        20 mins
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.graph}>
                <Grid item xs={12} className={classes.numberLabel}>
                    The Numbers
                </Grid>
                <Grid item xs={12}>
                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                </Grid>
            </Grid>


            <Grid container className={classes.graph}>
                <Grid item xs={12} className={classes.teamLabel}>
                    The Team
                </Grid>
                <Grid item xs={12}>
                   <Grid container spacing={1}>
                       <Grid item xs={5}>
                            <Box className={classes.topList}>
                            <Box className={classes.top3}>
                                Top 3
                            </Box>
                            <Box className={classes.topPn}>
                                <Box className={classes.topAvatar}>
                                    <Box component={'img'} src={Avatar1Img} className={classes.topIcon}/>
                                </Box>
                                <Box className={classes.topName}>
                                    Adom
                                </Box>
                                <Box className={classes.circleBt}> 
                                    1
                                </Box>
                            </Box>
                            <Box className={classes.topPn}>
                                <Box className={classes.topAvatar}>
                                    <Box component={'img'} src={Avatar2Img} className={classes.topIcon}/>
                                </Box>
                                <Box className={classes.topName}>
                                    Adom
                                </Box>
                                <Box className={classes.circleBt}> 
                                    1
                                </Box>
                            </Box>
                            <Box className={classes.topPn}>
                                <Box className={classes.topAvatar}>
                                    <Box component={'img'} src={Avatar3Img} className={classes.topIcon}/>
                                </Box>
                                <Box className={classes.topName}>
                                    Adom
                                </Box>
                                <Box className={classes.circleBt}> 
                                    1
                                </Box>
                            </Box>
                            </Box>
                       </Grid>
                       <Grid item xs={7}>
                            <Box className={classes.activity}>
                                <Box className={classes.recent}>
                                    Recent Activity
                                </Box>
                                <Box className={classes.topData}>
                                    <Box className={classes.topBigAvatar}>
                                        <Box component={'img'} src={Avatar1Img} className={classes.topBigIcon}/>
                                    </Box>
                                    <Box className={classes.data}>
                                        <Box className={classes.name}>
                                            Adam
                                        </Box>
                                        <Box className={classes.date}>
                                            July 20th 2:00 pm
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.topData}>
                                    <Box className={classes.topBigAvatar}>
                                        <Box component={'img'} src={Avatar2Img} className={classes.topBigIcon}/>
                                    </Box>
                                    <Box className={classes.data}>
                                        <Box className={classes.name}>
                                            Sarah
                                        </Box>
                                        <Box className={classes.date}>
                                            July 20th 2:00 pm
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.topData}>
                                    <Box className={classes.topBigAvatar}>
                                        <Box component={'img'} src={Avatar3Img} className={classes.topBigIcon}/>
                                    </Box>
                                    <Box className={classes.data}>
                                        <Box className={classes.name}>
                                            Frankie
                                        </Box>
                                        <Box className={classes.date}>
                                            July 20th 2:00 pm
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                       </Grid>
                   </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Stats ;