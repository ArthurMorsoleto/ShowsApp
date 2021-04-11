import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import GenericInput from "./GenericInput";

const Input = (props) => {
    const onChangeInput = (text) => {
        if (props.onChange) {
            props.onChange(text);
        }
    }
    return (
        <>
            <Text>{props.label}</Text>
            <GenericInput
                style={styles.textInputStyle}
                initialValue={props.initialValue}
                onChangeText={onChangeInput} />
        </>
    );
}


export default Input;

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "#d1cdcd"
    }
});
