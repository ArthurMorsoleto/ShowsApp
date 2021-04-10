import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const mockShows = {
    items: [
        {
            id: 1,
            name: "Show 01"
        },
        {
            id: 2,
            name: "Show 02"
        }
        ,
        {
            id: 3,
            name: "Show 03"
        }
        ,
        {
            id: 4,
            name: "Show 04"
        }
    ]
}

const ShowList = () => {
    return (
        <View>
            <FlatList
                data={mockShows.items}
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
        justifyContent:"center",
        backgroundColor: "#93ceed",
        borderColor: "#084769",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5
    }
})

export default ShowList;