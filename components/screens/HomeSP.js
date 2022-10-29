import React from "react";
import { View, Text } from "react-native";
import BottonSP from "../BottonSP";

const HomeSP = ( navigation) => {
    return(
        <View>
            <BottonSP 
            Text = "Ir al perfil"
            onPress = { () => {
                navigation.navigate('Perfil')
            }}
            />
        </View>
    )
}
export default HomeSP