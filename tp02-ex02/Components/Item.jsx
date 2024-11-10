import { StyleSheet, Text, View } from 'react-native';
export default function Item({ item }) {
    return (
        <View style={styles.visionrectangle}>
            <Text>{item}</Text>
        </View>

     
    );
}

const styles = StyleSheet.create({
    visionrectangle: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        alignItems: 'start',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
    },
})