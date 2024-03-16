import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from  '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()


//importando componentes 
 import LoginScreen from './screens/login';
import createCluster from "./screens/createCluster";
import createClusterDetailsScreen from "./screens/clusterDetails";
import createClusterListScreen from "./screens/clusterList";
import  HomeScreen from "./screens/home"



// function MyStack(){
//    return(
//    <Stack.Navigator>
//         <Stack.Screen name='Login' component={LoginScreen}/>
//         <Stack.Screen name='create' component={createCluster}/>
//         <Stack.Screen name='details' component={createClusterDetailsScreen}/>
        
//         <Stack.Screen name='list' component={createClusterListScreen}/>
//    </Stack.Navigator>

//    )
// }

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='create' component={createCluster}/>
      <Stack.Screen name='details' component={createClusterDetailsScreen}/>
      <Stack.Screen name='list' component={createClusterListScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
