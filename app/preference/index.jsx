import { StyleSheet, Text, View } from 'react-native'
import Input from "../../components/shared/Input"
import Colors from "../../shared/Colors"

export default function Preferance() {
    return (
        <View style={{
            padding: 30,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={styles.heading}>Tell us about yourself</Text>

            <Text style={styles.subheading}>This help us create your personalized meal plan</Text>

            <View style={styles.input}>
                <View>
                    <Input placeholder={'eg. 70'} label={"Weight"} />
                </View>
                <View>
                    <Input placeholder={'eg. 70'} label={"Height"} />
                </View>
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
    }
})