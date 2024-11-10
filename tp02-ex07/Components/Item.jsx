import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Item({ item }) {
    return (
        <TouchableOpacity style={stylesComponent.visionrectangle}>
            <Text>{item}</Text>
        </TouchableOpacity>

     
    );
}

const stylesComponent = StyleSheet.create({
    visionrectangle: {
        borderRadius: 10,
        padding: 10,
        width: '100%',
        height: 100,
        backgroundColor: 'orange',
        alignItems: 'start',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
        margin: 10,
    },
})