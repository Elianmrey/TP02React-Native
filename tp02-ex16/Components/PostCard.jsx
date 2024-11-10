import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function PostCard({ post, onPress }) {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: post.photo, method: 'POST', headers: { Pragma: 'no-cache' } }} />
            <Text>{post.destination}</Text>
            <Text>{post.startDate} - {post.endDate}</Text>
            <Text>Rating: {post.rating}/5</Text>
            <Button title="View Post" onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '90%',
        height: 300,
        alignSelf: 'center',
    },
    photo: {
        width: '100%',
        height: '50%',
       marginBottom: 10,
        borderRadius: 5,
    },
});