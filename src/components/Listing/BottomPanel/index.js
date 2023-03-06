
import React from 'react' ;

import KeyImg from '../../../assets/dashboard/SideItems/key.png' ;
import HomeIcon from '@mui/icons-material/Home';
import ListImg from '../../../assets/dashboard/SideItems/list.png' ;
import CalendarImg from '../../../assets/dashboard/SideItems/calendar.png' ;
import GraphImg from '../../../assets/dashboard/SideItems/graph.png' ;
import EnvelopeImg from '../../../assets/dashboard/SideItems/envelope.png' ;
import ReloadImg from '../../../assets/dashboard/SideItems/reload.png' ;
import BookImg from '../../../assets/dashboard/SideItems/book.png' ;
import SearchImg from '../../../assets/dashboard/SideItems/search.png' ;
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import BottomItem from './BottomItem';

import clsx from 'clsx';

import  {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {
        width : "100%",

        paddingLeft : "10px" ,
        paddingRight : "10px" ,

        paddingTop : "10px",
        paddingBottom : "10px",

        background: 'linear-gradient(180deg, #CDAF63 1.04%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,

        "& .MuiGrid-item" : {
            display : "flex",
            justifyContent : 'center'
        }
    },
    flex : {
        display : "flex",
        justifyContent : 'space-between'
    },
    center : {
        textAlign : 'center'
    }
}));

const BottomPanel = () => {
    
    const classes = useStyles() ;

    const itemList = [
        {
            icon : KeyImg,
            isImg : true
        },
        {
            icon : <HomeIcon />,
            isImg : false
        },
        {
            icon : ListImg,
            isImg : true
        },
        {
            icon : CalendarImg,
            isImg : true
        },
        {
            icon : GraphImg,
            isImg : true
        },
        {
            icon : EnvelopeImg ,
            isImg : true
        },
        {
            icon : ReloadImg,
            isImg : true
        },
        {
            icon : BookImg,
            isImg : true
        },
        {
            icon : "" ,
            isImg : true
        },
        {
            icon : SearchImg,
            isImg: true
        },
        {
            icon : <PersonOutlineOutlinedIcon />,
            isImg : false
        },
        {
            icon : <SettingsIcon />,
            isImg : false
        }
    ]

    return (
        <Box className={clsx(classes.root, classes.flex)}>
            {
                itemList.map((item, index) => {
                    return (
                        <BottomItem 
                            key={index}
                            icon={item.icon}
                            isImg={item.isImg}
                        />
                    )
                })
            }
        </Box>
    )
}

export default BottomPanel ;