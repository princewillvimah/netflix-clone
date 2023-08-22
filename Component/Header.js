import { Image, StyleSheet, Text, View,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import pic from '../assets/netflix-logo.png.png'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
const Header = () => {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
       const movieData=async()=>{
        await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=420691a5522d50b54309a2a19774b077')
        .then(response=> response.json()).then((data)=> setMovies(data.results[Math.floor(Math.random() * data.results.length-1)]))
       }
       movieData();
    },[])
  return (
    <View style={{marginTop:40}}>
      <ImageBackground
      style={{width:'100%',height:500,position:'relative'}}
      source={{uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`}}
      >
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

        <Image
        style={{height:100,width:140, marginTop:20}}
        source={pic}
        />
        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20}}>
        <AntDesign style={{marginRight:10}} name="search1" size={24} color="#fff" />
        <FontAwesome name="product-hunt" size={24} color="yellow" />
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'80%',margin:20,paddingLeft:29}}>
       <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}> Tv show</Text>
       <Text style={{fontSize:17,fontWeight:'bold',color:'#fff',marginHorizontal:15}}>Movies</Text>
       <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}>Categories</Text>
      </View>
      </ImageBackground>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
      <View>
    
     <AntDesign name="plus" size={24} color="#fff" />
     <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}>My List</Text>
      </View>
      <View style={{backgroundColor:'#fff',padding:7,borderRadius:7,flexDirection:'row',padding:8}}>
    
      <AntDesign name="play" size={24} color="black" />
     <Text style={{fontSize:17,fontWeight:'bold',color:'#000'}}>Play</Text>
      </View>
      <View>
    
      <AntDesign name="infocirlce" size={24} color="#fff" />
     <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}>Info</Text>
      </View>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})