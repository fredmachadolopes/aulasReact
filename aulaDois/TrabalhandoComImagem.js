import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image
} from 'react-native';


const Imagem = () =>{
const [valor, setValor] = useState(0);
const [liberador, setLiberado] = useState(true);
const [texto, setTexto] = useState("");

    return(
      <View style={styles.container} >
        <Image style={styles.img}  source={require("./src/assets/imagem/img.png")} ></Image>
      </View>
    );
 }
export default Imagem;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'


  },  img:{
    height: 300, 
    width: 300,
    borderRadius:200,
    
    //resizeMode OBS tem diversos atributos
  }
})