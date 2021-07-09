import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity
} from 'react-native';

const somar = () =>{

}
const StyleBotao = () =>{
const [valor, setValor] = useState(0);

    return(
      <View style={styles.container}>
        <Text>Valor {valor}</Text>
        <View style={styles.container2}>

          <TouchableOpacity title="Adicionar" style={styles.botao}
          color="#841584"
          
          onPress={()=>{somar(setValor(valor + 1))}}>
             <Text>Adicionar</Text>
          </TouchableOpacity>
                <TouchableOpacity title="resete" style={styles.botao}
          color="red"
          
          onPress={()=>{somar(setValor(0))}}>
            <Text>Resetar</Text>
          </TouchableOpacity>
                <TouchableOpacity title="decremento" style={styles.botao}
          color= 'blue'
          onPress={()=>{somar(setValor(valor - 1))}}>
            <Text>Diminuir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
 }
export default StyleBotao;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center'
  },  container2:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },botao:{
    marginRight: 5,
    backgroundColor: 'red',
    padding: 5
  }
})