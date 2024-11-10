import React from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { products } from '../Utils/Utils';

const ProductList = ({ navigation, addToCart }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                      
                        <Image style={styles.productImage} source={{
                            uri: item.image, method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            },
                        }} />
                        <View style={styles.productDetailsAndButton}>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>R$ {item.price}</Text>
                                    <Button title="Adicionar ao Carrinho" onPress={() => addToCart(item)} />
                            </View>
                        </View>
                )}
            />
            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => navigation.navigate('Cart')}
            >
                <Text style={styles.cartButtonText}>Ver Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productContainer: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',
    },
    productDetailsAndButton: {
        flex: 1,
        marginLeft: 16,
    },
    productImage: {
        width: 100,  
        height: 100,
        resizeMode: 'cover',
        marginBottom: 8,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    productPrice: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
       
    },
    cartButton: {
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProductList;
