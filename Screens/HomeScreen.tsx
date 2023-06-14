import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const allConnectionsUrl = 'https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17'

const fetchAllConnections = async () => {
  const response = await axios.get(allConnectionsUrl)
  return response.data
}

const HomeScreen = () => {
  const { isLoading, data } = useQuery('connections', fetchAllConnections)
  if (isLoading) {
    return <Text>Loading...</Text>
  }
  return (
    <ScrollView>
      {data && data.map((connection: any, key: any) => (
        <View key={key} style={styles.connectioncard}>
          <Image source={{ uri: connection.picture }} style={{ borderColor:'black',borderWidth:1 , height:'10%',width:'10%',}}/>
          <Text>Age: {connection.age}</Text>
          <Text>Firstname: {connection.firstname}</Text>
          <Text>Surname: {connection.surname}</Text>
          <Text>Gender: {connection.gender}</Text>
          <Text>Company: {connection.company}</Text>
          <Text>Email: {connection.email}</Text>
          <Text>Phone: {connection.phone}</Text>
        </View>
      ))}

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
