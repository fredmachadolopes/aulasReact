import React from 'react';

import {View, StyleSheet} from 'react-native'

const DesafioDois = ()=>{
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  box1: {
    backgroundColor:"#50E3C2",
  
   height: 100,
   width: 100,
  },  box2: {
    backgroundColor:"#4A90E2",
 
   height: 100,
   width: 100,
  },  box3: {
    backgroundColor:"#9013FE",
 
   height: 100,
   width: 100,
  }
})
export default DesafioDois;