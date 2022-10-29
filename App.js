/* Importaciones de Dependencias React,Freamwork,Componetes y pantallas */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import BottonSP from './components/BottonSP';
/* Finalizacion de las importaciones */

/* Inicio de aplicacion -- Agregamos las partes a importar para cada pantalla o accion */
function App() {
  return(
    <SafeAreaView style = {styles.container}>
        <Text style = { [styles.textCenter] }>
          NUEVA ORDEN
        </Text>

      <BottonSP/>
      
    </SafeAreaView>
  );
};
/* Finalizacion de la Aplicacion */


/* Estilos para cada "etiqueta" de lo que se importa de otros componentes */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    color: 'dark',
    fontSize: 25,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    alignContent: 'center',
  },
});
/* Fin estilos */
export default App;
