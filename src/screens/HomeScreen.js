import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const HomeScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text>Shows Inc.</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        margin: 16,
        paddingTop: 16,
        alignItems: "center",
        justifyContent: "center",
    }
});
