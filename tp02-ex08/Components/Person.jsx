import { Image, StyleSheet, Text, View } from 'react-native';
 
export default function Person({ person }) {
    return (
        <View style={stylesComponent.container}>
            <View style={stylesComponent.capsuleImage}>
                <Image source={{
                    uri: person.imageSource,
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    }
}} style={stylesComponent.image} />
            </View>
            <View style={stylesComponent.capsuleText}>
                <Text>{person.name}</Text>
                <Text>{person.address}</Text>
                <Text>{person.phone}</Text>
            </View>
            
        </View>     
    );
}

const stylesComponent = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '80%',
        height: 150,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
        margin: 10,
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'blue',
    },
    capsuleImage: {
        display: 'flex',
        width: 'fit-content',
        alignItems: 'flex-start',
        marginLeft: 10,
        width: 'fit-content',
        height: 100,
    },
    capsuleText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        width: 'fit-content',
        height: 100,
        width: '100%',
        marginLeft: 10,
        fontFamily: 'sans-serif',
        textRendering: 'optimizeLegibility',

    }
})