import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const GenericInput = (props) => {
    const [stateValue, setStateValue] = useState(props.initialValue);

    const onChangeInputField = (text) => {
        setStateValue(text);
        
        if (props.onChange) {
            props.onChange(text);
        }
    }

    return (
        <>
            <TextInput
                style={props.style}
                value={stateValue}
                onChangeText={onChangeInputField} />
        </>
    );
}

export default GenericInput;

