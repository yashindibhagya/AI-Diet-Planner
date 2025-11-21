import { TextInput } from 'react-native'


export default function Input({ placeholder, password = false, onChangeText }) {
    return (
        <TextInput placeholder={placeholder}
            secureTextEntry={password}
            onChangeText={(value) => onChangeText(value)}
            style={{
                padding: 15,
                borderWidth: 1,
                borderRadius: 10,
                width: '100%',
                fontSize: 18,
                paddingVertical: 15,
                marginTop: 15
            }}
        />
    )
}