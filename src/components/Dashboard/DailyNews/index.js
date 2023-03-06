import React from 'react' ;

import News1 from '../../../assets/dashboard/news/news_1.png' ;
import News2 from '../../../assets/dashboard/news/news_2.png' ;
import News3 from '../../../assets/dashboard/news/news_3.png' ;
import News4 from '../../../assets/dashboard/news/news_4.png' ;

import {
    Box
} from '@mui/material' ;

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {
        position : 'relative' ,
        borderRadius : '10px',
        padding : '5px',

        background: 'linear-gradient(180deg, #FFFFFF 3.03%, rgba(255, 255, 255, 0) 101.99%), #FFFFFF' ,
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
        right : 0,
        top : 0
    },
    newsSlide : {
       
        marginTop : '15px',
        '&::-webkit-scrollbar' :{
            width: '8px',
            height : '8px'
        },
      
        /* Track */
        '&::-webkit-scrollbar-track' : {
            borderRadius: '5px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',

            marginRight : '140px',
            marginLeft : '30px'
        },
      
        /* Handle */
        '&::-webkit-scrollbar-thumb' : {
            background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #CDAF63' ,
            borderRadius: '10px'
        },
      
        transform: 'rotate(180deg)',
        direction: 'rtl',

        overflowX : 'scroll' ,
        display : "flex",
        paddingLeft : '15px',
        paddingBottom : '15px',
    },
    news : {
        width : '100%',
        height : '100%'
    },
    newsItem : {
        transform: 'rotate(180deg)',

        marginLeft : '-15px !important',

        borderRadius: '15px',
        overflow : 'hidden',
        padding : '0px',

        position : 'relative',
    },
    linkBt : {
        position : 'absolute',

        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

        width : '35px',
        height : '25px',
        top : 15,
        left : 15,
        cursor : 'pointer',

        borderRadius : '5px',

        filter: 'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        backgroundImage: 'linear-gradient(to bottom, #CDAF63, white)',
        
        "& .MuiSvgIcon-root" : {
            textShadow: '0px 1px 1px #CDAF63, 0px 4px 4px black',
        }
    }
}))

const DailyNews = () => {

    const classes = useStyles() ;

    const newsList = [
        News1,
        News2,
        News3,
        News4
    ]

    return (
        <Box className={classes.root}>
            <Box className={classes.gradientText}>
                Daily news feed
            </Box>
            <Box className={classes.arrow}>
                <KeyboardArrowUpRoundedIcon />
            </Box>
            <Box className={classes.newsSlide}>
                {
                    newsList.map((news, index) => {
                        return (
                            <Box key={index} className={classes.newsItem}>
                                <Box component={'img'} src={news} className={classes.news}/>
                                <Box className={classes.linkBt}>
                                    <InsertLinkIcon />
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default DailyNews ;