import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, TextInput, Image, ScrollView } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';


 const ApresentacaoPessoal = () =>{

  return(
    <View style={style.container}>
      <Image style={style.img}  source={require("./src/assets/imagem/foto.png")} ></Image>
      <Text style={style.titulo}>Apresentação pessoal</Text>
     <Text style={style.nome}>Fred Lopes</Text>
     <ScrollView style={style.apresentacao}>
     <Icon name="facebook" size={150} color="red" />
     <Text style={style.textoMussum}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
     Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
     A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</Text>
     </ScrollView>
    </View>
  );
}


export default ApresentacaoPessoal;


const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },  img:{
    marginTop: 150,
    marginBottom: 50,
    height: 200, 
    width: 200,
    borderRadius:200,

  },apresentacao:{

    textAlign: 'center',
    width: 300,

  }, titulo:{
    fontSize: 20,
    alignSelf: 'center'
  }, nome:{
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 50,
  }, textoMussum:{
    textAlign: 'justify'
  }
})