import { View, Text, StyleSheet } from 'react-native';

export default function ExperienceScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Experiência Profissional</Text>
            <Text style={styles.text}>Empresa: Tech Solutions</Text>
            <Text style={styles.text}>Cargo: Desenvolvedor Mobile</Text>
            <Text style={styles.text}>Duração: 2 anos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'orange',
    },
    text: {
        color: '#FFF'
    }
});
