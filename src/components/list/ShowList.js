import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useContext } from "react"
import { AppContext, SET_SELECTED_ITEM_ACTION } from "../../context/AppContext";

const ShowList = () => {
    const { state, dispatch } = useContext(AppContext);
    
    return (
        <View>
            <FlatList
                data={state.showList.sort((s1, s2) => ("" + s1.name.localeCompare(s2.name)))}
                keyExtractor={((item) => item.id)}
                renderItem={
                    ({ item }) =>
                        <TouchableOpacity onPress={() => dispatch({ type: SET_SELECTED_ITEM_ACTION, payload: item.id })}>
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