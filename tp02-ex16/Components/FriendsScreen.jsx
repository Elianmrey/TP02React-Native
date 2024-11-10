import { View, Text } from 'react-native';
import CardFriend from './CardFriend';
import { StyleSheet } from 'react-native';

export default function FriendsScreen() {
    return (
        <View>
            <Text style={styles.title}>Friends List</Text>
           <View style={styles.container}>
                <CardFriend friend={{ name: 'Maria', photo: 'https://randomuser.me/api/portraits/women/1.jpg' }} />
                <CardFriend friend={{ name: 'João', photo: 'https://randomuser.me/api/portraits/men/1.jpg' }} />
                <CardFriend friend={{ name: 'Paulo', photo: 'https://randomuser.me/api/portraits/men/2.jpg' }} />
                <CardFriend friend={{ name: 'Ana', photo: 'https://randomuser.me/api/portraits/women/2.jpg' }} />
                <CardFriend friend={{ name: 'Pedro', photo: 'https://randomuser.me/api/portraits/men/3.jpg' }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center',
        color: '#444',
        
    },
});