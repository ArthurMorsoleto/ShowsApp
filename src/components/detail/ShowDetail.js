import { View, Text, StyleSheet, Image } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../context/AppContext";

const ShowDetail = () => {
    const { state } = useContext(AppContext);
    const emptyShow = { name: "", country: "", network: "", image_thumbnail_path: "" };
    const detailedShow = state.selectedItem ? state.showList.find(item => item.id === state.selectedItem) : emptyShow
    return (
        <View style={styles.viewStyle}>
            <View style={styles.detailsStyle}>
                <Text>Name: {detailedShow.name}</Text>
                <Text>Country: {detailedShow.country}</Text>
                <Text>Network: {detailedShow.network}</Text>
            </View>
            <Image
                style={styles.pictureStyle}
                resizeMode={"contain"}
                source={detailedShow.image_thumbnail_path ? { uri: detailedShow.image_thumbnail_path } : null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 12
    },
    detailsStyle: {
        alignItems: "flex-start"
    },
    pictureStyle: {
        marginTop: 20,
        alignSelf: "center",
        height: 200,
        width: 300
    }
})

export default ShowDetail;