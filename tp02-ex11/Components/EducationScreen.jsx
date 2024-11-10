import { View, Text, StyleSheet } from 'react-native';

export default function EducationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formação Acadêmica</Text>
            <Text style={ styles.text}>Curso: Ciência da Computação</Text>
            <Text style={styles.text}>Instituição: Universidade XYZ</Text>
            <Text style={styles.text}>Ano de Conclusão: 2023</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222',
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color : 'orange'
    },
    text: {
        color: '#FFF'
    }
});
