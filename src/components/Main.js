

import React, { useEffect , useRef, useState  } from 'react' ;

import { useLocation, useNavigate } from 'react-router-dom' ;

import Routing from './Routes';

import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

AOS.init({once : true}) ;

const useStyles = makeStyles((theme) => ({
    root : {
        
    }
}))

const Main = () => {
    const classes = useStyles() ;

    const [isVisibleFooter , setIsVisibleFooter] = useState(true) ;
    const location = useLocation() ;

    return (
        <Box className={classes.root}>
            <Routing />
        </Box>
    )
}
export default Main ;