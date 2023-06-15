import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen: React.FC = ({ route }) => {
  const { selectedConnection } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: selectedConnection.picture }} style={styles.profileImage} />
      </View>

      <Surface style={styles.card}>
        <Animatable.View animation="fadeIn" duration={800} style={styles.cardContent}>
          <Text style={styles.name}>{selectedConnection.firstname} {selectedConnection.surname}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="birthday-cake" size={16} color="#031927" style={styles.icon} />
            </View>
            <Text style={styles.infoText}>{selectedConnection.age}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="venus-mars" size={16} color="#031927" style={styles.icon} />
            </View>
            <Text style={styles.infoText}>{selectedConnection.gender}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="building" size={16} color="#031927" style={styles.icon} />
            </View>
            <Text style={styles.infoText}>{selectedConnection.company}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="envelope" size={16} color="#031927" style={styles.icon} />
            </View>
            <Text style={styles.infoText}>{selectedConnection.email}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Icon name="phone" size={16} color="#031927" style={styles.icon} />
            </View>
            <Text style={styles.infoText}>{selectedConnection.phone}</Text>
          </View>
        </Animatable.View>
      </Surface>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    borderWidth: 2,
    // borderColor: '#031927',
    borderRadius: 75,
    padding: 2,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {},
  name: {
    fontFamily: 'Popins-Medium',
    fontSize: 24,
    marginBottom: 10,
    color: '#031927',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#F4FAFF',
  },
  icon: {
    color: '#031927',
  },
  infoText: {
    fontFamily: 'Popins-Regular',
    fontSize: 16,
    color: '#031927',
  },
});
