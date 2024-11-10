import { Image, View, Text, StyleSheet } from 'react-native';

export default function PersonalInfoScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/avatar.jpg')} />

            <Text style={styles.title}>Informações Pessoais</Text>
            <Text style={styles.text}>Nome: João Silva</Text>
            <Text style={styles.text}>Idade: 25 anos</Text>
            <Text style={styles.text}>Profissão: Desenvolvedor Mobile</Text>
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
        color: 'orange',
    },
    text: {
        color: '#fff',
    },
});
