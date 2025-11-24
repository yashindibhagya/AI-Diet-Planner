import { useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../../context/UserContext';

export default function Home() {
    const { user } = useContext(UserContext)
    const router = useRouter();

    useEffect(() => {
        if (!user?.weight) {
            //router.replace('/preference')
        }
    })
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}