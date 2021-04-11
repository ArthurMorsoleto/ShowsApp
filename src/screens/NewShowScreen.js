import { View, StyleSheet, StatusBar, Button } from "react-native"
import React, { useContext, useState } from "react"
import Input from "../components/form/Input"
import { ADD_ITEM, AppContext } from "../context/AppContext"

const NewShowScreen = () => {
    const [stateName, setStateName] = useState("")
    const [stateNetwork, setStateNetwork] = useState("")
    const [stateCountry, setStateCountry] = useState("")
    const [stateThumbNail, setStateThumbnail] = useState("")
    const { state, dispatch } = useContext(AppContext);

    const saveShow = () => {
        const lastItem = state.showList[state.showList.length - 1]
        var newId = lastItem.id + 1
        if (newId === lastItem.id) { newId++ }
        const action = {
            type: ADD_ITEM,
            payload: {
                id: newId,
                name: stateName,
                network: stateNetwork,
                country: stateCountry,
                image_thumbnail_path: stateThumbNail,
            }
        }
        console.log(action.payload)
        dispatch(action);
    }

    return (
        <View style={styles.viewStyle}>
            <Input
                style={styles.inputStyle}
                label={"Show name: "}
                initialValue={""}
                onChange={(text) => setStateName(text)} />

            <Input
                style={styles.inputStyle}
                label={"Show Network: "}
                initialValue={""}
                onChange={(text) => setStateNetwork(text)} />

            <Input
                style={styles.inputStyle}
                label={"Country:"}
                initialValue={""}
                onChange={(text) => setStateCountry(text)} />

            <Input
                style={styles.inputStyle}
                label={"Thumbnail:"}
                initialValue={""}
                onChange={(text) => setStateThumbnail(text)} />

            <Button style={styles.buttonStyle} title={"Save Show"} onPress={saveShow} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    inputStyle: {
        marginTop: 50,
        backgroundColor: "red"
    },
    buttonStyle: {
        marginTop: 36
    }
})

export default NewShowScreen;
