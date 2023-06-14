import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import ContactCardsHomeScreen from '../components/contactCardsHomeScreen'


const HomeScreen = () => {

  return (
    <ScrollView>
      <ContactCardsHomeScreen />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  connectioncard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000'
  }
})
