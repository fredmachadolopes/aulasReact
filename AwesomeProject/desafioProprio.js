import React from 'react';

import {View, StyleSheet} from 'react-native'

const DesafioProprio = ()=>{
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} >
      <View style={styles.box4} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

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
   width: '100%',
   justifyContent: 'center',
   alignItems: 'center',
  },box4: {
    backgroundColor:"#50E3C2",
 
   height: 40,
   width: 40,
   borderRadius: 3,
  }
})
export default DesafioProprio;