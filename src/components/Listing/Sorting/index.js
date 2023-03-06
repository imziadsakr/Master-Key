import React from 'react' ;

import NavItem from './NavItem';
import SortItem from './SortItem';

import MonsterImg from '../../../assets/listing/sorting/navItems/item3.png' ;
import SortItemImg1 from '../../../assets/listing/sorting/sortItems/item1.png' ;
import HomeImg from '../../../assets/listing/sorting/home.png' ;

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HomeIcon from '@mui/icons-material/Home';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    },
    nav : {
        paddingLeft : '10px',
        display : 'flex',
        justifyContent : 'space-around'
    },
    sort : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-end'
    },
    by : {
        fontSize: '20px',
        color : 'rgba(0, 0, 0, 0.5)',
        textShadow :  '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    price : {
        fontSize : '20px',
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    sortSlide : {
        marginTop : '15px !important',
        direction : 'rtl' ,
        height : '480px',
        paddingLeft : '10px',

        overflowY : 'scroll',

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
            background: 'linear-gradient(90deg, rgb(255,255,255) 0.01%, #CDAF63 90%)' ,
            borderRadius: '10px',
        },
    },
}))

const Sorting = () => {
    const classes = useStyles() ;

    const itemList = [

        {
            icon : <ViewHeadlineIcon />,
            isImg : false
        },
        {
            icon : <WidgetsIcon />,
            isImg : false
        },
        {
            icon : MonsterImg,
            isImg: true
        }
    ]
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6} className={classes.nav}>
                    {
                        itemList.map((item, index) => {
                            return (
                                <NavItem
                                    key={index}
                                    icon={item.icon}
                                    isImg={item.isImg}
                                />
                            )
                        })
                    }
                </Grid>
                <Grid item xs={6} className={classes.sort}>
                    <Box component={'span'} className={classes.by}>
                        Sort By :
                    </Box>
                    <Box component={'span'} className={classes.price}>
                        Price
                    </Box> <ArrowDownwardIcon />
                </Grid>
                <Grid item xs={12} className={classes.sortSlide}>
                    <Box sx={{direction : 'ltr'}}>
                        {
                            [...Array(7)].map((item, index) => {
                                return (
                                    <SortItem key={index} 
                                        key={index}
                                        imgSrc={SortItemImg1}
                                        icon={HomeImg}
                                        street={"123 Main Street"}
                                        itemName={"Bushwick"}
                                    />
                                )
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Sorting ;