import React from "react";
import { ActivityIndicator, View } from "react-native";
import { White_BG_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
    justify-content: center;
    `;




    export default () => (
        <View>
            <ActivityIndicator color={"WHITE"}/>
        </View>
    );