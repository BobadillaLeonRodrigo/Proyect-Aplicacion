import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
const BottonSP = () => {
    return(
        <View style = {styles.buttonCenter}>
            <Text>
                Hola boton
            </Text>
        </View>
    )
};
export default BottonSP

const styles = StyleSheet.create({
    buttonCenter: {
        backgroundColor: 'red',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
