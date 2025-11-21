import Colors from '@/shared/Colors'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 15,
        marginTop: 15
    },
    text: {
        fontSize: 16,
        color: Colors.WHITE,
        textAlign: "center"
    }
})