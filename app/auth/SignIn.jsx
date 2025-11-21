import { useConvex } from 'convex/react'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/shared/Button'
import Input from '../../components/shared/Input'
import { auth } from '../../config/FirebaseConfig'
import { UserContext } from '../../context/UserContext'
import { api } from '../../convex/_generated/api'

export default function SignIn() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const convex = useConvex()
    const { user, setUser } = useContext(UserContext);


    const onSignIn = () => {
        if (!email || !password) {
            Alert.alert('Missing Fields!', 'Enter All field values')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userData = await convex.query(api.Users.GetUser, {
                    email: email
                })

                console.log(userData);
                setUser(userData)

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            padding: 20
        }}>
            <Image source={require('../../assets/images/logo.png')}
                style={styles.image}
            />

            <Text style={styles.welcome}>Welcome Back</Text>

            <View style={{
                marginTop: 20,
                width: '100%'
            }}>
                <Input placeholder={'Email'} onChangeText={setEmail} />
                <Input placeholder={'Password'} password={true} onChangeText={setPassword} />
            </View>

            <View style={styles.button}>
                <Button title={'Login'} onPress={() => onSignIn()} />

                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginTop: 15,
                }}>Don't have an account? </Text>

                <Link href={'/auth/SignUp'}><Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginTop: 5,
                    fontWeight: 'bold'
                }}>
                    Create New Account</Text></Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginTop: 60
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    button: {
        width: '100%'
    }
})