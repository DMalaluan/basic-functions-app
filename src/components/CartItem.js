import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartItem = ({ name, quantity, onIncrease, onDecrease }) => {
    return <View style={styles.parentViewStyle}>
        <Text style={styles.nameStyle}>{name}</Text>
        <View style={styles.childViewStyle}>
            <Text style={styles.textStyle}>QTY: {quantity}</Text>
            <TouchableOpacity onPress={() => onIncrease()} title={`Increase quantity`}>
                <Text style={styles.textStyle}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDecrease()} title={`Decrease quantity`}>
                <Text style={styles.textStyle}>Decrease</Text>
            </TouchableOpacity>
        </View>
    </View>
};


const styles = StyleSheet.create({
    parentViewStyle: {
        margin: 25
    },
    childViewStyle: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    nameStyle: {
        fontSize: 25
    },
    textStyle: {
        fontSize: 20
    }
});

export default CartItem;