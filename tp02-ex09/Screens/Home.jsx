import React from 'react';
import {  Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { posts } from '../Utils/Utils';


const PostList = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.postContainer}
                    onPress={() => navigation.navigate('DetailsScreen', { post: item })}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.summary}>{item.summary}</Text>
                    <Text style={styles.info}>Curtidas: {item.likes} | Compartilhamentos: {item.shares}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    postContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#222',
        backgroundColor: '#e0e1dd',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003049',
    },
    summary: {
        fontSize: 14,
        color: '#023e8a',
    },
    info: {
        fontSize: 12,
        color: '#0077b6',
        marginTop: 4,
    },
});

export default PostList;
