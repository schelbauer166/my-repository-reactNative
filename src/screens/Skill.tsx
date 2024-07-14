import React from 'react';
import { ButtonSocialMedia } from '../components/Button';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MySkills } from '../components/MySkills/MySkills';
import { StatusBar } from 'expo-status-bar';



export function Skill() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Image style={styles.image} source={{ uri: 'https://github.com/schelbauer166.png' }} />
            <Text style={styles.aboutMe}>Minhas Habilidades</Text>
            <MySkills name='CSS' starts={2} />
            <MySkills name='JavaScript' starts={3} />
            <MySkills name='HTML' starts={2} />
            <ButtonSocialMedia name='Fala comigo   ☎️' />
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
    aboutMe: {
        fontSize: 25,
        marginBottom: 50,
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#E0E0E0'
    }
})