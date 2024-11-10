import { View, Text, StyleSheet } from 'react-native';
import { usersData } from '../Utils/Utils';
export default function AffinityScreen({ userResponses }) {
   
    const calculateAffinity = (userResponses) => {
        const userProfile = userResponses.map(response => response.response);
       

        const affinityScores = usersData.map(user => {
            const similarity = user.responses.reduce((score, response, index) => {
                return score + (response === userProfile[index] ? 1 : 0);
            }, 0);
            return { id: user.id, score: similarity };
        });

      
        return affinityScores.sort((a, b) => b.score - a.score);
    };

    const affinityList = calculateAffinity(userResponses);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuários com afinidade</Text>
            {affinityList.map((user) => (
                <Text key={user.id} style={styles.userText}>
                    Usuário {user.id} - Nome: {user.name} - Afinidade: {user.score}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
        justifyContent: 'center',
        alignContent: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ccc',
    },
    userText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#ccc',
    },
});
