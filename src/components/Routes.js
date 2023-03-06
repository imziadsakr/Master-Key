import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import Dashboard from "../pages/Dashboard" ;
import Listing from "../pages/Listing";
import Property from '../pages/Property';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/property" element={<Property />} />

            <Route element={<ProtectedRoute />}>

            </Route>
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
