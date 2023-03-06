import React from 'react' ;

import KeyImg from '../../../assets/property/detail/key.png';

import {
    Box,
    Grid ,
    TextField
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

        marginBottom : 10,
        
        background: 'linear-gradient(270.04deg, #808080 -20.47%, #FFFFFF 58.57%), #808080',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius : '5px',

        padding : '10px',

        position : 'relative',

        "& input" : {
            border : "none" ,
        },
        "& input:focus" : {
            outline : "none"
        }
    },
    detail : {
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 30,
        fontWeight : 600,
        textTransform : 'uppercase'
    },
    key : {
        position : 'absolute',

        top : 30,
        right : 70,

        "& img" : {
            width : 150,
            height : 150
        }
    },
    street : {
        marginTop : 90,

        fontFamily : 'cursive',

        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize : 35
    },
    textCtrl : {
        paddingTop : '0px !important',

        display : 'flex',
        flexDirection : 'column',

        "& .MuiFormControl-root" : {
            marginRight : '30px',
        },
        "& .MuiTextField-root" : {
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius : '5px',
            border : '1px solid #CDAF63'
        },
        "& .MuiOutlinedInput-input" : {
            color : 'black !important',
            fontWeight : 600,
            padding : 5,
            background : 'white',
            borderRadius : 5,

            "&:hover" : {
                color : 'blue !important'
            }
        },
    },
    textLabel : {
        color: '#000000',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',

        fontSize : 20,
        fontWeight : 500,

        paddingLeft : '5px'
    },
    formPn : {
        display : 'flex',
        justifyContent : 'space-between' ,
        alignItems : 'flex-start',

        "& > div" : {
            marginLeft : '5px',
            marginRight : '5px',
            marginBottom : 30
        },

        flexWrap : 'wrap'
    },
    unit : {
        width : 100
    },
    neighbour : {
        width: 180
    },
    code : {
        width : 130
    },
    net : {
        width : 100
    },
    gross : {
        width : 100
    },
    apartment : {
        width : 170
    },
    bath : {
        width : 90
    },
    status : {
        width : 100
    },
    fee : {
        width : 150
    },
    lease : {
        width : 150
    },
    move : {
        width : 170
    },
    available : {
        width : 120
    },
    market : {
        width : 180
    },
    floor : {
        width : 70
    },
    elevator : {
        width : 100
    },
    property : {
        width : 170
    },
    building : {
        width : 180
    },
    sqft : {
        width : 100
    },
    pets : {
        width : 100
    },
    policy : {
        width : 300
    },
    util : {
        width : 200
    },
    incentive : {
        width : 300
    },
    op : {
        width : 100
    },
    bonus : {
        width : 300
    },
    bottom : {
        marginTop : 10,

        fontFamily : 'cursive',
        textAlign : 'right',

        color: '#000000',
        fontSize : 25
    }
}))

const Detail = () => {

    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.detail}>
                The Details
            </Box>
            <Box className={classes.street}>
                123 Main Street
            </Box>
            <Box className={classes.formPn}>
                <Box className={classes.unit}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Unit #
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.neighbour}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Neighborhood #
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.code}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            LL Code #
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.net}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Net
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.gross}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Gross
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.apartment}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Apartment Size
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.bath}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Bath
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.status}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Status
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.fee}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Fee or no fee
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.lease}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Lease Length
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.move}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Move in Date
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.available}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Available
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.market}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Days on Market
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.floor}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Floors
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.elevator}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Elevator
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.property}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Property type
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.building}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Building Type
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.sqft}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Sq Ft
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.pets}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Pets
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.policy}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Pet Policy
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.util}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Utilities
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.incentive}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Incentive
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                multiline
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.op}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            OP
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.bonus}>
                    <Box className={classes.textCtrl}>
                        <Box className={classes.textLabel}>
                            Bonus
                        </Box>
                        <Box >
                            <TextField 
                                size={'small'}
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bottom}>
                123 Main Street
            </Box>
            <Box className={classes.key}>
                <Box component={'img'} src={KeyImg} />
            </Box>
        </Box>
    )
}

export default Detail;