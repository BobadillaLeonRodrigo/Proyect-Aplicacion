import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity, Alert} from 'react-native'
const BottonSP = (props) => {
    /* Descomponesmos el objeto */
    const { onPress,text } = props
    /* Fin Descompocicion del objeto */
    return(
        /* onPress es la accion que dara el boton, y en diferentes textos aplicados */
        <TouchableOpacity 
            style = {styles.buttonCenter}
            onPress = { onPress }
            >
            <Text style = {styles.buttonText}> 
                {text}
            </Text>
        </TouchableOpacity>
    )
};
export default BottonSP

const styles = StyleSheet.create({
    buttonCenter: {
        backgroundColor: 'yellow',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 20,
    },
});
