import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetails = ({ route }) => {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.summary}>{post.summary}</Text>
            <Text style={styles.details}>Data de Publicação: {post.date}</Text>
            <Text style={styles.details}>Autor: {post.author}</Text>
            <Text style={styles.details}>Curtidas: {post.likes}</Text>

            <Text style={styles.details}>Compartilhamentos: {post.shares}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    backgroundColor: '#ccfff',},
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    summary: {
        fontSize: 16,
        color: '#333',
        marginBottom: 16,
    },
    details: {
        fontSize: 14,
        color: '#777',
        marginBottom: 8,
    },
});

export default PostDetails;
