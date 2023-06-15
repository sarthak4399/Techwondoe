import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import { QueryClientProvider,QueryClient } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProfileScreen from './Screens/ProfileScreen'
const queryClient = new QueryClient();
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App

const styles = StyleSheet.create({})