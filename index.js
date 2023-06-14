/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
      {/* {data && data.map((connection: any, key: any) => (
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
      ))} */}