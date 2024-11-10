import React from 'react';
import { Image,View, Text, FlatList, StyleSheet } from 'react-native';

const Cart = ({ cart }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho de Compras</Text>
            {cart.length > 0 ? (

                <FlatList data={cart} keyExtractor={(_, index) => index.toString()} renderItem={({ item }) => (
                   
                    <View style={styles.cartItem}>
                        <Image style={styles.productImage} source={{
                            uri: item.image, method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            },
                        }} />
                        <View style={styles.cartItemDescription}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>R$ {item.price}</Text>
                        </View>
                    </View>
                    )}
                />
            ) : (
                <Text style={styles.emptyCart}>O carrinho está vazio</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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

    cartItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cartItemDescription: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#0ab',
    },

    itemName: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 16,
        color: '#333',
    },
    emptyCart: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Cart;
