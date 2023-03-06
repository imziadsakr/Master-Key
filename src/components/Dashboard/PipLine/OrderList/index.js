
import React from 'react' ;

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        "& .MuiTableContainer-root:first-child" : {
            marginTop : '30px',
        },
       
        "& .MuiTableCell-root" : {
            borderBottom : 'none !important',
        },
        "& .MuiTableHead-root" : {
            "& .MuiTableCell-root" : {
                padding : '5px',
                textAlign : 'center'
            }
        },
        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" :{
                border : 'none !important',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px',
                marginBottom : '10px',
                "& .MuiTableCell-root" : {
                    padding : '5px',
                    paddingBottom : '15px',
                    paddingRight : '10px',
                    paddingLeft : '10px',
                }
            },
        }
    },
    container: {
        height : "280px",

        overflowY : 'scroll',
        overflow : 'hidden',

        direction: 'rtl',
        "& .MuiTableHead-root" : {
            transform: 'rotate(180deg) !important',
            "& .MuiTableCell-root" : {
                transform: 'rotate(180deg) !important',
            }
        },
        "& .MuiTableBody-root" : {
            transform: 'rotate(180deg) !important',
            "& .MuiTableCell-root" : {
                transform: 'rotate(180deg) !important',
            }
        },

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
            background: 'linear-gradient(90deg, rgb(200,200,200) 0.01%, #CDAF63 90%)' ,
            borderRadius: '10px',
        },
    },
    gradientText : {
        position : 'abolute',
        textTransform: 'uppercase',
        color: 'transparent', 

        fontSize : '12px',
        backgroundImage: 'linear-gradient(to bottom, black 10.04%,  white 90%)',

        '-webkit-background-clip': 'text',
    },
    edit : {
        backgroundColor : 'white',

        cursor : 'pointer',
        border : '2px solid #CDAF63',
        textAlign : 'center',
        borderRadius : '5px',

        "& .MuiSvgIcon-root" : {
            color : '#CDAF63'
        }
    },
    dateBg : {
        position : 'relative',
        backgroundColor : 'white',
        borderRadius : '10px',
    },
    dateBt : {
        minWidth : '120px',
        textAlign : 'center !important',
        "& .MuiButtonBase-root" : {
            cursor : 'pointer',
            fontSize : '12px',
            textAlign : 'center',
            color : 'white',
            padding : '5px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 36.98%), #CDAF63',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius : '15px' ,

            "&:hover" : {
                background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 36.98%), #CDAF63',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            }
        }
    },
    client : {
        minWidth : '120px',
        fontSize : "14px !important",
        color : 'black !important',
        fontWeight : '600 !important'
    },
    userIcon : {
        display : 'flex',
        alignItems :'center',
        justifyContent : 'center',

        width : '30px',
        height : '30px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 36.98%), #CDAF63',
        borderRadius : '50%'
    },
    close : {
        cursor : 'pointer',
        "& .MuiSvgIcon-root" : {
            fontSize : '14px'
        }
    } ,
    empty : {
        height : '10px',
        border : 'none !important',
        boxShadow: 'none !important',
        borderRadius: '10px',
    }
})) ;

const OrderList = () => {

    const classes = useStyles() ;

    const headFields = [
        "",
        <Box className={classes.gradientText}>
            client
        </Box>,
        <Box className={classes.gradientText}>
            last contact
        </Box>,
        ""
    ];

    const CusomeTableRow = () => {
        return (
            <>
                <TableRow >
                    <TableCell>
                        <Box className={classes.userIcon}>
                            <PersonOutlineOutlinedIcon />
                        </Box>
                    </TableCell>
                    <TableCell className={classes.client}>
                        TONY STARK
                    </TableCell>
                    <TableCell  className={classes.dateBt}>
                        <Button variant={'contained'} size={'small'}>
                            2022/01/01
                        </Button>
                    </TableCell>
                    <TableCell className={classes.close}>
                        <CloseRoundedIcon />
                    </TableCell>
                </TableRow>
                <TableRow className={classes.empty}>

                </TableRow>
            </>
        )
    }
    return (
        <Box className={classes.root}>
            <TableContainer >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{minWidth : '50px'}}/>
                        {
                            headFields.map((field, index) => {
                                return(
                                    <TableCell key={index}>
                                        {
                                            field
                                        }
                                    </TableCell>
                                )
                                
                            })
                        }
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer className={classes.container}>
                <Table>
                    <TableBody>
                        {
                            [...Array(20)].map((item, index) => {
                                return (
                                    <CusomeTableRow key={index}/>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default OrderList ;