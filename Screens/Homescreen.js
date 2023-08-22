import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import { StatusBar } from 'expo-status-bar'
import TrendingComponent from '../Component/TrendingComponent'
import MovieRows from '../Component/MovieRows'

const Homescreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#000'}}>
    <Header/>
    <TrendingComponent/>
    <MovieRows/>
    <StatusBar style='light'/>
    </ScrollView>
  )
}

export default Homescreen;

const styles = StyleSheet.create({})