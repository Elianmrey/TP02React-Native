import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";



export default function CardFriend({ friend }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{
                uri: `${friend.photo}`,
                method: 'POST',
                headers: {
                    Pragma: 'no-cache',
                },
            }} style={styles.image} />
            <Text>{friend.name}</Text>
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 10,
        elevation:3,
    },
});

