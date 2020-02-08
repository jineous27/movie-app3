import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default ({ navigation }) => (
    <>
        <Text>Movies</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Detail")}>
            <Text>Go to detail</Text>
        </TouchableOpacity>
    </>
)