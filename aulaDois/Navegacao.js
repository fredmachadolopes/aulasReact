import React from 'react';
import 'react-native-gesture-handler';

import ApresentacaoPessoal from './ApresentacaoPessoal';

import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

 function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation}
        />
      </View>
    );
  }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navegacao = () => {
  return (
    <NavigationContainer>
    {/*
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Details' component={ApresentacaoPessoal} />
      </Stack.Navigator>

    */}
        <Drawer.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawer {...props}/>}>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name='Details' component={ApresentacaoPessoal} />
        </Drawer.Navigator>

    </NavigationContainer>
  );
};

export default Navegacao;


const CustomDrawer = ({ navigation })=>{
    return (
        <View style={{backgroundColor: "red", flex: 1}}  >
                 <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
                         <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        </View>
    );
}