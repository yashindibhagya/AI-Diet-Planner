import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";
import Colors from "../../shared/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.PRIMARY
        }}>
            <Tabs.Screen name='Home'
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Entypo name="home" size={size} color={color} />

                }} />

            <Tabs.Screen name='Meals' />
            <Tabs.Screen name='Progress' />
            <Tabs.Screen name='Profile' />
        </Tabs>
    )
}