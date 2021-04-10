import { Text, View, StyleSheet } from "react-native"
import React from "react"
import ShowList from "../components/list/ShowList"
import ShowDetail from "../components/detail/ShowDetail"

const ShowsScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.listStyle}>
                <ShowList></ShowList>
            </View>
            <View style={styles.detailStyle}>
                <ShowDetail></ShowDetail>
            </View>
        </View>
    )
}

export default ShowsScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        padding: 16,
        backgroundColor: "#e1f0f7"
    },
    listStyle: {
        flex: 2,
    },
    detailStyle: {
        flex: 1,
    }
});