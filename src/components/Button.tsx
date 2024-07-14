import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './ButtonStyle';

interface NamePros {
    name: string
    icon: any

}




export function ButtonSocialMedia(props: NamePros) {

    return (
        <>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{props.icon}  {props.name}</Text>

            </TouchableOpacity>
        </>
    );
}