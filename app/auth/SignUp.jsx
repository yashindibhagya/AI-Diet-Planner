import { useMutation } from 'convex/react'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/shared/Button'
import Input from '../../components/shared/Input'
import { auth } from '../../config/FirebaseConfig'
import { UserContext } from '../../context/UserContext'
import { api } from "../../convex/_generated/api"

export default function SignUp() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const createNewUser = useMutation(api.Users.CreateNewUser)
    const { user, setUser } = useContext(UserContext);

    const onSignUp = () => {
        if (!name || !email || !password) {
            Alert.alert('Missing Fields!', 'Enter All field values')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('User account created & signed in!', user);
                if (user) {
                    const result = await createNewUser({
                        name: name,
                        email: email
                    });
                    console.log(result)
                    setUser(result);
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Sign Up Error', errorMessage)
                // ..
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

            <Text style={styles.welcome}>Create New Account</Text>

            <View style={{
                marginTop: 20,
                width: '100%'
            }}>
                <Input placeholder={'Full Name'} onChangeText={setName} />
                <Input placeholder={'Email'} onChangeText={setEmail} />
                <Input placeholder={'Password'} password={true} onChangeText={setpassword} />
            </View>

            <View style={styles.button}>
                <Button title={'Create Account'} onPress={() => onSignUp()} />

                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginTop: 15,
                }}>Already have an account? </Text>

                <Link href={'/auth/SignIn'}><Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginTop: 5,
                    fontWeight: 'bold'
                }}>
                    Sign In Here</Text></Link>
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