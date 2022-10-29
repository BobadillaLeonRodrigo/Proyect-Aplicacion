import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeSP from "../components/screens/HomeSP";
import Perfil from "../components/screens/Perfil";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name ="Home"
                component= { HomeSP }
                />
                <Stack.Screen 
                name ="Perfil"
                component= { Perfil }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainStack