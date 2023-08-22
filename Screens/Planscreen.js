import { StyleSheet, Text, TouchableOpacity, View,ScrollView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto,Entypo } from '@expo/vector-icons'; 
import plans from '../plans';
import { StatusBar } from 'expo-status-bar';
import {useStripe} from '@stripe/stripe-react-native'

const Planscreen = ({navigation}) => {

    // stripe inplimentation////

 const stripe = useStripe();
  const subscribe = async() => {
    const response = await fetch("http://localhost:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount:Math.floor(price * 100),

      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Merchant Name',
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);

  }

    const [selected,setSeleted]=useState([]);
    const [price,setPrice]=useState([]);
    const data= plans
  return (
    <>
    <ScrollView style={{marginTop:20}}>
      <View style={{marginTop:40,padding:10}}>
      <Text style={{fontSize:17, fontWeight:'600'}}>Choose the plan that is right for you</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:6}}>
      <AntDesign name="check" size={24} color="#e50914" />
      <Text style={{marginLeft:10,fontSize:16,fontWeight:'600'}}>Watch all you want ads free</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:6}}>
      <AntDesign name="check" size={24} color="#e50914" />
      <Text style={{marginLeft:10,fontSize:16,fontWeight:'600'}}>Recomendation just for your self</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:6}}>
      <AntDesign name="check" size={24} color="#e50914" />
      <Text style={{marginLeft:10,fontSize:16,fontWeight:'600'}}>Cancel anytime and anywhere dude </Text>
      </View>
      <View style={{marginTop:20}}>
      {data.map((item,index)=>(
            <TouchableOpacity onPress={()=>{setSeleted(item.name), setPrice(item.price)}} key={index}
            style={selected.includes(item.name)?{height:170,borderRadius:7,borderColor:'#e50914',borderWidth:2,padding:5,margin:10}:
                 {height:170,borderRadius:7,borderColor:'#e50914',borderWidth:0.5,padding:5,margin:10}} 
            >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{backgroundColor:'#e50914',padding:10,width:120,borderRadius:7}}>
            <Text style={{textAlign:'center',color:'white',fontWeight:'600',fontSize:16}}>{item.name}</Text>
            </View>
            <Text style={{fontSize:15,fontWeight:'600'}}> Price: #{item.price}</Text>
            </View>

            <View style={{marginTop:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View>
            <Text style={{color:'grey',fontSize:15,fontWeight:'500'}}>Video Quality: {item.videoQuality}</Text>
            <Text style={{color:'grey',fontSize:15,fontWeight:'500', marginTop:3}}> Resolution: {item.resolution}</Text>
            </View>

            <Fontisto style={{marginRight:6}} name="netflix" size={24} color="black" />
            </View>

            <View style={{marginTop:10, flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize
            :16}}>Devices you can watch on</Text>

            <View style={{flexDirection:'row',alignItems:'center'}}>
            {item.devices.map((devices,i)=>(
                
            <Entypo key={i} style={{marginRight:6}} name={devices.name} size={27} color="#e50914" />
            ))}
            </View>
            </View>

            </TouchableOpacity>
      ))}
      </View>
      <StatusBar style='auto'/>
    </ScrollView>
    {selected.length===0? null:(
        <View style={{backgroundColor:'#e50914',height:50, padding:10,marginBottom:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View>
        <Text  style={{color:'#fff',fontSize:17,fontWeight:'bold'}} > Selected plan: {selected}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
          <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}} >Pay: #{price}</Text>
        </TouchableOpacity>
        </View>
    ) }
   
    </>
  )
}

export default Planscreen

const styles = StyleSheet.create({})