import React from "react";

import Region1Img from '../../../assets/listing/map/region1.png' ;
import Region2Img from '../../../assets/listing/map/region2.png' ;
import Region3Img from '../../../assets/listing/map/region3.png' ;

import GoogleMapReact from "google-map-react";

import {
    Box
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    root : {
        height: '100%',
        width: '100%',

        border : '3px solid #CDAF63',
        borderRadius : '5px',

        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    region : {
        width : 70,
        height : 70
    }
}))

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const Map = () => {
    const classes = useStyles() ;

    const regionList = [
        { id: 1, title: "Round Pond", lat: 51.512, lng: -0.184, imgSrc :  Region1Img},
        { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175, imgSrc : Region2Img },
        { id: 3, title: "The Serpentine", lat: 51.502, lng: -0.171, imgSrc : Region3Img }
    ];

    const MyMarker = (props) => {
        const {
            imgSrc
        } = props ;

        return (
            <Box component={'img'} src={imgSrc} className={classes.region}/>
        )
    }
    return (
        <Box className={classes.root}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCa_9q0ZxoPzHsSV_ih8aoqM4UUhOnWy7Y",
                    language: "en",
                    region: "US",
                    libraries:['places'],
                }}
                defaultCenter={{ lat: 51.506, lng: -0.169 }}
                defaultZoom={15}
                distanceToMouse={distanceToMouse}
            >
                {
                    regionList.map(({ lat, lng, id, title , imgSrc }) => {
                        return (
                            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} imgSrc={imgSrc}
                            />
                        );
                    })
                }
            </GoogleMapReact>
        </Box>
    );
}

export default Map;
