/* Importaciones de Dependencias React,Freamwork,Componetes y pantallas */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import BottonSP from './components/BottonSP';
import HomeSP from './components/screens/HomeSP';
import Perfil from './components/screens/Perfil';
import MainStack from './navigation/MainStack';
/* Finalizacion de las importaciones */

/* Inicio de aplicacion -- Agregamos las partes a importar para cada pantalla o accion */
function App() {
  return(
    <SafeAreaView style = {styles.container}>
        <Text style = { [styles.textCenter] }>
          Nuevos Perifericos
        </Text>
      <BottonSP 
      text = "Comprar nuevos Perifericos"
      onPress = {() => {
          alert("Creando orden...")
        }}
      />
      <BottonSP 
      text = "Estes es otro Boton"
      onPress = {() => {
          alert("Hicistes accion aqui")
        }}
      />

    </SafeAreaView>
  );
};

/* Agregar el MainStack, para la navegacion, se agrega y marca error para mandar a llamar la navegacion */
/* Finalizacion de la Aplicacion */


/* Estilos para cada "etiqueta" de lo que se importa de otros componentes */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    alignContent: 'center',
    color: '#000000',
  },
});
/* Fin estilos */
export default App;
