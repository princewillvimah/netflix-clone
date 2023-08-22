import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginscreen from './Screens/Loginscreen';
import Registerscreen from './Screens/Registerscreen';
import Planscreen from './Screens/Planscreen';
import Homescreen from './Screens/Homescreen';


const Stack = () => {
    
const Stacks = createStackNavigator();
  return (
    <NavigationContainer>
    <Stacks.Navigator>
      <Stacks.Screen name="Login" component={Loginscreen} options={{
        headerShown:false
      }} />
      <Stacks.Screen name="Register" component={Registerscreen} 
      options={{
        headerShown:false
      }}/>
      <Stacks.Screen name="Plan" component={Planscreen} 
      options={{
        headerShown:false
      }}/>
      <Stacks.Screen name="Home" component={Homescreen} 
      options={{
        headerShown:false
      }}/>
    </Stacks.Navigator>
  </NavigationContainer>
  )
}

export default Stack

const styles = StyleSheet.create({})