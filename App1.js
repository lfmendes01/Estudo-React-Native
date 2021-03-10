import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Text style={{color:'blue', fontSize:25}} >Pó de Diamante </Text>
     <Hyoga Largura={250} Altura={250}></Hyoga>
       
      <StatusBar style="auto" />
    </View>
  );
} 

class Hyoga extends Component
{
 render()
 {
  let img = 'https://static.wikia.nocookie.net/anicrossbr/images/c/cd/Cygnus_hyoga.png/revision/latest/scale-to-width-down/340?cb=20151029161553&path-prefix=pt-br';
   return (  
   <View>
      <Image source={{uri:img}} style={{width:this.props.Largura,height:this.props.Altura}}/>
      <Text style={{color:'black', fontSize:50}}>Hyoga </Text>
  </View>
   )
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
