/* Importaciones de Dependencias React,Freamwork,Componetes y pantallas */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import BottonSP from './components/BottonSP';
import HomeSP from './components/screens/HomeSP';
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
    </SafeAreaView>
  );
};
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
