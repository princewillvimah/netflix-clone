import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
const MovieColomn = ({title,url}) => {

 const [movies,setMovies]=useState([])

 useEffect(()=>{
    const movieData=async()=>{
     await fetch(url)
     .then(response=> response.json()).then((data)=> setMovies(data.results))
    }
    movieData();
 },[])
  return (
    <View>
    <Text style={{color:'#fff',fontSize:19,fontWeight:'600'}}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {movies.map((item, index) => (
      <TouchableOpacity key={index} style={{flexDirection:'row',alignItems:'center'}}>
        <Image
          style={{
            width: 105,
            height: 152,
            borderRadius: 6,
            resizeMode: "cover",
            margin: 10,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
        />
      </TouchableOpacity>
    ))}
  </ScrollView>
    </View>
  )
}

export default MovieColomn

const styles = StyleSheet.create({})