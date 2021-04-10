import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { useShows } from "../../hooks/useShows"

const ShowList = () => {
    const {shows} = useShows();

    return (
        <View>
            <FlatList
                data={shows}
                keyExtractor={((item) => item.id)}
                renderItem={
                    ({ item }) =>
                        <TouchableOpacity>
                            <View style={styles.itemStyle}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                }>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#93ceed",
        borderColor: "#084769",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5
    }
})

export default ShowList;