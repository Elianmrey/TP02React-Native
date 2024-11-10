import { ScrollView } from 'react-native';
import PostCard from './PostCard';
import { posts } from '../Utils/Utils';

export default function FeedScreen({ navigation }) {
    return (
        <ScrollView >
            {posts.map(post => (
                <PostCard key={post.id} post={post} onPress={() => navigation.navigate('Post da Viagem', { post })} />
            ))}
        </ScrollView>
    );
}

