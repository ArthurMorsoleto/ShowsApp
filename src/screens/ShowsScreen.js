import { Text, View, StyleSheet } from "react-native"
import React from "react"

const ShowsScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>This is ShowsScreen</Text>
        </View>
    )
}

export default ShowsScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        margin: 16,
        paddingTop: 16,
        alignItems: "stretch",
        justifyContent: "flex-start",
    }
});