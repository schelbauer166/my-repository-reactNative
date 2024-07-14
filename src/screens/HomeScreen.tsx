import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { ButtonSocialMedia } from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';



export function HomeScreens() {
  const linkdin = <AntDesign name="linkedin-square" size={24} color="#E0E0E0" />;
  const telegram = <FontAwesome name="telegram" size={24} color="#E0E0E0" />;
  const github = <AntDesign name="github" size={24} color="#E0E0E0" />;

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image style={styles.image} source={{ uri: 'https://github.com/schelbauer166.png' }} />
      <Text style={styles.myName}>Felipe Schelbauer</Text>
      <ButtonSocialMedia name='LINKDIN' icon={linkdin} />
      <ButtonSocialMedia name='GITHUB' icon={github} />
      <ButtonSocialMedia name='TELEGRAM' icon={telegram} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 50
  },
  myName: {
    fontSize: 25,
    marginBottom: 50,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#E0E0E0'
  }
});