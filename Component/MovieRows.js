import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieColomn from './MovieColomn';
import movieUrl from '../Component/movieUrl'
const MovieRows = () => {
   
 const data= movieUrl;
  return (
    <View>
    {data.map((movie,index)=>(
        <MovieColomn key={index} title={movie.name}  url={movie.url}/>
    ))}
  </View>
  )
}
export default MovieRows

const styles = StyleSheet.create({})