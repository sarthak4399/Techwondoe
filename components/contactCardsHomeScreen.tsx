import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const Data = [
  {
    index: 6,
    picture: 'http://placehold.it/32x32',
    age: 35,
    firstname: 'Brock',
    surname: 'Burton',
    gender: 'male',
    company: 'PROSELY',
    email: 'brockburton@prosely.com',
    phone: '+1 (966) 525-3347',
  },
];

const ContactCardsHomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <View>
          <Image source={{ uri: Data[0].picture }} style={styles.profileImage} />
        </View>
        <View style={styles.infocontainer}>
          <View style={styles.nametext}>
            <Text style={styles.firstname}>{Data[0].firstname}</Text>
            <Text style={styles.surname}>{Data[0].surname}</Text>
            <TouchableOpacity  style={styles.icon}>
            <Icon name='arrowright' size ={30}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.company}>{Data[0].company}</Text>
   
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactCardsHomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    width: '80%',
    height: 100,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 10,
    marginTop: 60,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
  },
  infocontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  nametext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstname: {
    fontFamily: 'Impact',
    color: '#000',
    fontSize: 18,
    marginRight: 5,
  },
  surname: {
    fontFamily: 'Impact',
    color: '#000',
    fontSize: 18,
  },
  company: {
    fontFamily: 'Arial',
    color: '#666',
    marginTop: 5,
  },
  icon: {
    color: '#000',
    position: 'absolute',
    right: 10,
    marginRight: -100,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
