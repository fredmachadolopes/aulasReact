import React from 'react';
import { StatusBar } from 'react-native';
import {View, StyleSheet} from 'react-native'




const Tentativa = ()=>{
  return (
    <View style={styles.principal}>
      <StatusBar hidden={true}>

      </StatusBar>
      <View style={styles.box1}/>
      <View style={styles.boxEmBranco}>
        <View style={styles.box4}/>
        <View style={styles.box4Retangulo}/>
      </View>
      <View style={styles.boxRow}>
      <View style={styles.box3}/>
      <View style={styles.box2}/>
      </View>
      <View style={styles.box1}/>
      <View style={styles.boxEmBranco2}>
      
      
        <View style={styles.box4SpaceTop}/>
        <View style={styles.box4SpaceTop}/>
        <View style={styles.box4SpaceTop}/>
        <View style={styles.box4SpaceTop}/>
        <View style={styles.box4SpaceTop}/>
        <View style={styles.box4SpaceTop}/>

      </View>

      <View style={styles.rodaPe}/>

 

    </View>
  );
}

const styles = StyleSheet.create({
   principal:{
    flex:1,
  
    
    flexWrap: 'wrap',
  },
  box1: {
    backgroundColor:"#50E3C2",
  
   height: 20,
   width: "100%",
  },boxEmBranco:{
    height: 250,
    width: '100%',
    alignItems: 'center',
    
    justifyContent: 'space-evenly',
  
  },boxEmBranco2:{
    height: 290,
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  
  },boxRow:{
    height: 70,
    width: '100%',
    alignItems: 'center',
    
    flexDirection: 'row',
 
  },  box2: {
    backgroundColor:"#4A90E2",
 
    height: 70,
    width: '50%',
  },  box3: {
    backgroundColor:"#9013FE",
 
   height: 70,
   width: '50%',
  },box4SpaceTop: {
    backgroundColor:"#F5A623",
    marginTop: 40,
   height: 100,
   width: 100,
  },box4: {
    backgroundColor:"#F5A623",
   
   height: 100,
   width: 100,
  },box4Retangulo: {
    backgroundColor:"#F5A623",
 
   height: 40,
   width: 150,
  },  rodaPe: {
    backgroundColor:"#4A90E2",
    marginTop: 0,
    height: 68,
    width: '100%',
  }
})
export default Tentativa;