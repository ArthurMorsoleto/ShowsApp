import { Text, View, StyleSheet } from "react-native"
import React from "react"

const NewShowScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>This is NewShowScreen</Text>
        </View>
    )
}

export default NewShowScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        margin: 16,
        paddingTop: 16,
        alignItems: "stretch",
        justifyContent: "flex-start",
    }
});