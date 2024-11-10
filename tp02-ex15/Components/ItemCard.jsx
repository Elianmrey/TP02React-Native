import { View, Text, Button, StyleSheet } from 'react-native';

export default function ItemCard({ item, onResponse }) {
    return (
        <View style={styles.card}>
            <Text style={styles.itemText}>{item}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Sim" onPress={() => onResponse('sim')} />
                <Button title="Não" onPress={() => onResponse('não')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ccc',
        elevation: 5,
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
