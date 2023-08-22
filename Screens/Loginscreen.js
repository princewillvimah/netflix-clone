import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import pic from '../assets/netflix-logo.png.png'
import {Input} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const Loginscreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigation=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:'black',padding:10,alignItems:'center'}}>
    <KeyboardAvoidingView>
      <View style={{alignItems:'center',justifyContent:'space-between'}}>
      <Image
      style={{height:100,width:140, marginTop:20}}
      source={pic}
      />
      </View>
      <View style={{width:320, marginTop:45}}>
        <Input type='email' placeholder='Email' 
        value={email}
        onChangeText={(e)=>setEmail(e)}
        inputContainerStyle={{borderBottomWidth:0}}
        placeholderTextColor={'#fff'}
        style={{width:300,padding:15,borderRadius:5,color:'#fff',backgroundColor:'grey',}} />
        <Input type='password' placeholder='Password' 
        inputContainerStyle={{borderBottomWidth:0}}
        placeholderTextColor={'#fff'}
        secureTextEntry
        value={password}
        onChangeText={(e)=>setPassword(e)}
        style={password.length>4? {width:300,padding:15,borderRadius:5,color:'#fff',backgroundColor:'red',}
        :{width:300,padding:15,borderRadius:5,color:'#fff',backgroundColor:'grey',} }
        />
      </View>
      <TouchableOpacity 
      style={{width:300, marginLeft:'auto',marginRight:'auto',justifyContent:'center',alignItems:'center',borderWidth:2,padding:14,borderColor:'#fff'}}>
      <Text style={{textAlign:'center',fontSize:17,fontWeight:'700',color:'#fff'}}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{width:300, marginLeft:'auto',marginRight:'auto', marginTop:15}}>
      <Text style={{textAlign:'center',fontSize:19,fontWeight:'700',color:'#fff'}} onPress={()=>navigation.navigate('Register')}>New to netflix? Sign up now</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({})