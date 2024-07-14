import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './MySkillsStyle';

interface MySkillsProps {
    name: string
    starts: number
}

export function MySkills(props: MySkillsProps) {


    return (
        <View style={styles.container}>
            <Text style={styles.text} >{props.name}: {NumberOfStars(props)}
            </Text>

        </View>
    );
}




function NumberOfStars(props: MySkillsProps) {
    const stars = [];
    const totalStars = props.starts // Número total de estrelas baseado em `props`

    for (let i = 0; i < totalStars; i++) {
        stars.push(<Ionicons key={i} name='star' color='yellow' size={30} />);
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            {stars}
        </View>
    );
}

export default NumberOfStars;