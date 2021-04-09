import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import GenericInput from "./GenericInput";

const SearchInput = (props) => {

    const onSearchChange = (text) => {
        setStateValue(text);
        if (props.onChange) {
            props.onChange(text);
        }
    }

    return (
        <View style={styles.viewStyle}>
            <AntDesign name="search1" size={24} color="black" />
            <GenericInput
                style={styles.textInputStyle}
                value={props.initialValue}
                onChangeText={onSearchChange} />
        </View>
    );
}

export default SearchInput;

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "#d1cdcd",
        padding: 8,
        borderRadius: 24
    },
    textInputStyle: {
        marginStart: 8
    }
});
