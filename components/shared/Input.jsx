import { Text, TextInput, View } from 'react-native'


export default function Input({ placeholder, password = false, onChangeText, label }) {
    return (
        <View style={{
            marginTop: 15,
            width: '100%'
        }}>
            <Text style={{
                fontWeight: 'medium',
                marginBottom: 5,
                fontSize: 18
            }}>{label}</Text>
            <TextInput placeholder={placeholder}
                secureTextEntry={password}
                onChangeText={(value) => onChangeText(value)}
                style={{
                    padding: 15,
                    borderWidth: 1,
                    borderRadius: 10,
                    width: '100%',
                    fontSize: 16,
                    paddingVertical: 15,
                    marginTop: 2
                }}
            />
        </View>
    )
}