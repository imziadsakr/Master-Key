
import React from 'react' ;

import Person1 from '../../../../assets/dashboard/task/people/person1.png';
import Person2 from '../../../../assets/dashboard/task/people/person2.png';
import Person3 from '../../../../assets/dashboard/task/people/person3.png';
import Alarm from '../../../../assets/dashboard/task/alarm.png';
import TagImg from '../../../../assets/dashboard/task/tag.png';

import EditRoundedIcon from '@mui/icons-material/EditRounded';

import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableFooter,
    TableRow,
    TableCell,
    TextField,
    AvatarGroup,
    Avatar,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        "& .MuiTableContainer-root" : {
            marginTop : '30px'
        },
        "& .MuiTableHead-root" : {
            "& .MuiTableCell-root" : {
                padding : '5px',
                textAlign : 'center'
            }
        },
        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" :{
                "& .MuiTableCell-root" : {
                    background : "#C4C4C4",
                    padding : '5px',
                    paddingRight : '10px',
                    paddingLeft : '10px',
                }
            },
        }
    },
    container: {

        height : '190px',
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

            marginTop : '30px',
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
        cursor : 'pointer',
        border: '2px solid #CDAF63',
        width : '75px',
        padding : '5px' ,

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        textTransform: 'uppercase',
        color: 'transparent', 

        positon : 'absolute',

        fontSize : '14px',
        textAlign : 'center',
        borderRadius : '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundImage: 'linear-gradient(to bottom, black 30.04%, #CDAF63 100%)',
        '-webkit-background-clip': 'text',
    },
    priority : {
        cursor : 'pointer',
        fontSize : '12px !important',
        textAlign : 'center',
        color : 'white !important',
        minWidth : '110px !important',
        padding : '5px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 36.98%), #CDAF63 !important',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius : '15px !important'
    },
    alarm : {
        backgroundColor : 'white',

        cursor : 'pointer',

        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

        borderRadius : '5px',
        padding : '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    alarmImg : {
        width : '30px',
    },
    tagImg : {
        width : '30px'
    },
    tag : {
        position : 'relative'
    },
    tagLabel : {
        position : 'absolute',

        fontSize : '10px',
        top : 3,
        left : "44%"
    },
    call : {
        cursor : 'pointer',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

        backgroundColor : 'black',
        padding : '5px',
        height : '40px',
        borderRadius : '10px',
        minWidth : '120px'
    },
    callBt : {
        fontFamily: 'Jura',
        color: 'white'
    },
    ellipse : {
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',

        backgroundColor : 'white',
        border : '3px solid #CDAF63',
        borderRadius : '5px' ,
        width : 35,
        height : 35
    },
    circle : {
        borderRadius : '50%' ,
        height : '5px',
        width : '5px',
        border : '1px solid black',
        backgroundColor : '#CDAF63'
    },
    textCtrl : {
       
        "& .MuiTextField-root" : {
            boxShadow : 'inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25) ',
            borderRadius : '5px'
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 'bold',
            textAlign : 'center',
            background : 'white',
            borderRadius : '5px',
            height : '40px !important',

            "&:hover" : {
                color : 'blue !important'
            },
            "&:focus" : {
                outline : 'none !important'
            }
        },
        "& .MuiInputBase-root" : {
            direction : 'ltr',
            padding : '0px !important',
            "&:focus" : {
                outline : 'none !important'
            }
        },
    }
})) ;

const TaskList = () => {

    const classes = useStyles() ;

    const avatarList = [
        Person1,
        Person2,
        Person3
    ];

    const headFields = [
        <Box className={classes.gradientText}>
            Task
        </Box>,
        "",
        <Box className={classes.gradientText}>
            DUE DATE
        </Box>,
        <Box className={classes.gradientText}>
            PRIORITY
        </Box>,
        <Box className={classes.gradientText}>
            PRIORITY
        </Box>,
        <Box className={classes.gradientText}>
            PEOPLE
        </Box>,
        "",
        <Box classsName={classes.tag}>
            <Box component={'img'} src={TagImg} className={classes.tagImg} />
            <Box className={classes.tagLabel}>Tag</Box>
        </Box>,
        ""
    ];

    return (
        <Box className={classes.root}>
            <TableContainer className={classes.container}>
                <Table>
                    <TableHead>
                        <TableRow>
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
                    <TableBody>
                        {
                            [...Array(5)].map((row, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell sx={{minWidth : '170px' , borderTopLeftRadius : '15px' , borderBottomLeftRadius : '15px'}} className={classes.textCtrl}>
                                            <TextField 
                                                multiline
                                                size={'small'}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box className={classes.edit}>
                                                <EditRoundedIcon />
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box className={classes.dateBg}>
                                                <Box className={classes.dateBt}>
                                                    <Box>
                                                        MARCH
                                                    </Box>
                                                    <Box>
                                                        5
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Button varaint={'contained'} size={"small"} className={classes.priority}>
                                                HIGH PRIORITY
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button varaint={'contained'} size={"small"} className={classes.priority}>
                                                HIGH PRIORITY
                                            </Button>
                                        </TableCell>
                                        <TableCell >
                                            <AvatarGroup max={4} sx={{direction : 'ltr'}}>
                                                <Avatar alt="Remy Sharp" src={Person1} />
                                                <Avatar alt="Cindy Baker" src={Person2} />
                                                <Avatar alt="Cindy Baker" src={Person3} />
                                            </AvatarGroup>
                                        </TableCell>
                                        <TableCell>
                                            <Box className={classes.alarm}>
                                                <Box component={'img'} src={Alarm} className={classes.alarmImg} />
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box className={classes.call}>
                                                <Box className={classes.callBt}>
                                                    CALL CLIENT
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ borderTopRightRadius : '15px' , borderBottomRightRadius : '15px'}}>
                                            <Box className={classes.ellipse}>
                                                <Box className={classes.circle}>

                                                </Box>
                                                <Box className={classes.circle}>
                                                    
                                                </Box>
                                                <Box className={classes.circle}>
                                                    
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TaskList ;