import React, { useEffect } from 'react';

import {View, StyleSheet} from 'react-native'




const DesafioQuarto = ()=>{
  return (
    <View style={styles.principal}>
        <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box1} />
      <View style={styles.box1} />


       </View>
    <View style={styles.container}>
      <View style={styles.box2} />
      <View style={styles.box2} />
      <View style={styles.box2} />


    </View>
    <View style={styles.container}>
      <View style={styles.box3} />
      <View style={styles.box3} />
      <View style={styles.box3} />


    </View>

    <View style={styles.container}>
      <View style={styles.box4} />
      <View style={styles.box4} />
      <View style={styles.box4} />


    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
 justifyContent: 'space-around',
 flexDirection: "row",
   
  },  principal:{
    flex:1,
    justifyContent: 'space-around',
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
  },box4: {
    backgroundColor:"#F5A623",
 
   height: 100,
   width: 100,
  }
})
export default DesafioQuarto;