import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const GenericInput = (props) => {
    const [stateValue, setStateValue] = useState(props.initialValue);

    const onChangeGenericInput = (text) => {
        setStateValue(text);
        
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    }

    return (
        <>
            <TextInput
                style={props.style}
                value={stateValue}
                onChangeText={onChangeGenericInput} />
        </>
    );
}

export default GenericInput;

