import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ShowsScreen from "./src/screens/ShowsScreen";
import NewShowScreen from "./src/screens/NewShowScreen";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function App() {
  const tabNav = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tabNav.Navigator tabBar={props => <TabNavigationBar {...props} />}>
        <tabNav.Screen name="HomeScreen" component={HomeScreen} />
        <tabNav.Screen name="ShowsScreen" component={ShowsScreen} />
        <tabNav.Screen name="NewShowScreen" component={NewShowScreen} />
      </tabNav.Navigator>
    </NavigationContainer>
  );
}

const TabNavigationBar = ({ navigation, state }) => {
  const index = state.index;
  return (
    <View style={tabBarStyles.viewStyle}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Entypo name="home" size={32} color={index === 0 ? "blue" : "gray"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ShowsScreen")}>
        <Entypo name="list" size={32} color={index === 1 ? "blue" : "gray"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("NewShowScreen")}>
        <Ionicons name="add-circle" size={32} color={index === 2 ? "blue" : "gray"} />
      </TouchableOpacity>
    </View>
  )
}

const tabBarStyles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5
  }
});

export default App;