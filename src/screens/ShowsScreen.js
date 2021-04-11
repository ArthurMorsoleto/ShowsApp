import { Text, View, StyleSheet } from "react-native"
import React from "react"
import ShowList from "../components/list/ShowList"
import ShowDetail from "../components/detail/ShowDetail"
import { ScrollView } from "react-native-gesture-handler"

const ShowsScreen = () => {
    return (
        <ScrollView style={styles.viewStyle} >
            <View>
                <ShowList></ShowList>
                <View style={styles.detailStyle}>
                    <ShowDetail></ShowDetail>
                </View>
            </View>
        </ScrollView>
    )
}

export default ShowsScreen;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        padding: 16,
        backgroundColor: "#e1f0f7",
    },
    detailStyle: {
        flex: 1,
    }
});