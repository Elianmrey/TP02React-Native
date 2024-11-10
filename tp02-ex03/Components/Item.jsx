import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Item({ item }) {
    return (
        <TouchableOpacity style={styles.visionrectangle}>
            <Text>{item}</Text>
        </TouchableOpacity>

     
    );
}

const styles = StyleSheet.create({
    visionrectangle: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,
        width: '40%',
        height: 100,
        backgroundColor: 'orange',
        alignItems: 'start',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
    },
})