import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function TravelPostScreen({ route }) {
    const { post } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: post.photo, method: 'POST', headers: { Pragma: 'no-cache' } }} style={styles.photo} />
            <Text style={styles.title}>{post.destination}</Text>
            <Text style={styles.subtitle}>De:  🛫  {post.startDate}</Text>
            <Text style={styles.subtitle}>Ate: 🛬  {post.endDate}</Text>
            <Text style={styles.subtitle}>Rating: {post.rating}/5</Text>
            <Text style={styles.description}>{post.description}</Text>
            <Button title="Like" onPress={() => alert('Post liked!')} style={styles.likeButton} />
        </View>
    );
}


const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    likeButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
});