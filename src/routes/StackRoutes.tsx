import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreens } from '../screens/HomeScreen';
import { Skill } from '../screens/Skill'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator()

export function Routes() {
    return (
        <Navigator
            initialRouteName='HomeScreens'
            backBehavior='order'
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: '#404040',
                        borderTopWidth: 0,

                        bottom: 14,
                        left: 14,
                        right: 14,
                        borderRadius: 14
                    },
                }
            }
        >
            <Screen
                name="Home"
                component={HomeScreens}
                options={{
                    title: 'Bem vindo!',
                    headerTintColor: '#E0E0E0',
                    headerStyle: {
                        backgroundColor: '#404040'

                    },
                    headerShown: true,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="home" size={size} color="black" />
                        }
                        return <AntDesign name="home" size={size} color="#E0E0E0" />
                    }

                }}

            />
            <Screen
                name="Skill"
                component={Skill}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="profile" size={size} color="black" />
                        }
                        return <AntDesign name="profile" size={size} color="#E0E0E0" />
                    }

                }}
            />
        </Navigator>
    )
}