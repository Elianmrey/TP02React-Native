import { Image, StyleSheet, View, Text } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={{
                uri: 'https://images.pexels.com/photos/28462220/pexels-photo-28462220/free-photo-of-hiroshi-hiroshi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                method: 'POST', headers: { Pragma: 'no-cache' }
            }} />
            
            <Text style={styles.title}>Perfil de Usuário</Text>
            <Text style={styles.subtitle}>Nome: João</Text>
            <Text style={styles.subtitle}>Email: joao@email.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
});