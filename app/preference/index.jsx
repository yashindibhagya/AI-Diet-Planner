import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/shared/Button';
import Input from "../../components/shared/Input";
import Colors from "../../shared/Colors";

export default function Preferance() {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [gender, setGender] = useState();
    const [goal, setGoal] = useState();

    return (
        <View style={{
            padding: 30,
            backgroundColor: Colors.WHITE,
            height: '100%',
            marginTop: 20
        }}>
            <Text style={styles.heading}>Tell us about yourself</Text>

            <Text style={styles.subheading}>This help us create your personalized meal plan</Text>

            <View style={styles.input}>
                <View style={styles.inputField}>
                    <Input placeholder={'eg. 70'} label={"Weight (kg)"}
                        onChangeText={setWeight}
                    />
                </View>
                <View style={styles.inputField}>
                    <Input placeholder={'eg. 5.10'} label={"Height (ft)"}
                        onChangeText={setHeight}
                    />
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={styles.gender}>Gender</Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 15
                }}>
                    <TouchableOpacity style={styles.genderOptions}>
                        <Ionicons name="male" size={40} color={Colors.BLUE} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genderOptions}>
                        <Ionicons name="female" size={40} color={Colors.PINK} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                marginTop: 15
            }}>
                <Text style={styles.gender}>What's your goal</Text>
                <TouchableOpacity style={styles.goal}>
                    <FontAwesome5 name="weight" size={24} color="black" />
                    <View>
                        <Text style={styles.goalText}>Weight Loss</Text>
                        <Text style={styles.goalSubText}>Reduce body fat &get leaner</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.goal}>
                    <FontAwesome5 name="weight" size={24} color="black" />
                    <View>
                        <Text style={styles.goalText}>Muscle Gain</Text>
                        <Text style={styles.goalSubText}>Build Muscle & get Stronger</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.goal}>
                    <FontAwesome5 name="weight" size={24} color="black" />
                    <View>
                        <Text style={styles.goalText}>Weight Gain</Text>
                        <Text style={styles.goalSubText}>Increase healthy body mass</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 25
            }}>
                <Button title={'Continue'} />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30
    },
    subheading: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.GRAY
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    inputField: {
        flex: 1
    },
    gender: {
        fontWeight: 'medium',
        fontSize: 18,
    },
    goal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        marginTop: 10
    },
    genderOptions: {
        borderColor: Colors.GRAY,
        padding: 7,
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
    },
    goalText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    goalSubText: {
        color: Colors.GRAY
    }
})