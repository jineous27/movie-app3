import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVITY_COLOR, INACTIVE_COLOR } from "../constants/Colors";

const TabBarIcon = ({name, focused}) => (
    <Ionicons
        size={26}
        name={name}
        color={focused ? ACTIVITY_COLOR : INACTIVE_COLOR}
    />
);




TabBarIcon.PropTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired
};

export default TabBarIcon;