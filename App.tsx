import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import { QueryClientProvider,QueryClient } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import ContactCardsHomeScreen from './components/contactCardsHomeScreen';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <HomeScreen /> */}
        <ContactCardsHomeScreen />
      </NavigationContainer>
    </QueryClientProvider>
    
  )
}

export default App

const styles = StyleSheet.create({})