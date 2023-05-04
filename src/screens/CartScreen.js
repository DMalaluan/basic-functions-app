import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'item1':
            return state.item1 + action.payload < 0 
            ? state
            : { ...state, item1: state.item1 + action.payload };
        case 'item2':
            return state.item2 + action.payload < 0 
            ? state
            : { ...state, item2: state.item2 + action.payload };
        case 'item3':
            return state.item3 + action.payload < 0 
            ? state
            : { ...state, item3: state.item3 + action.payload };
        case 'clear':
            return {...state, item1: 0, item2: 0, item3: 0}
        default:
            return state;    
    }
};

const CartScreen = () => {
    const [state, dispatch] = useReducer(reducer, {item1: 0, item2: 0, item3: 0});

    return <View>
        <CartItem 
            name="Item 1"
            quantity={state.item1}
            onIncrease={() => dispatch({ type: 'item1', payload: 1 })}
            onDecrease={() => dispatch({ type: 'item1', payload: -1 })}
        />
        <CartItem 
            name="Item 2"
            quantity={state.item2}
            onIncrease={() => dispatch({ type: 'item2', payload: 1 })}
            onDecrease={() => dispatch({ type: 'item2', payload: -1 })}
        />
        <CartItem 
            name="Item 3"
            quantity={state.item3}
            onIncrease={() => dispatch({ type: 'item3', payload: 1 })}
            onDecrease={() => dispatch({ type: 'item3', payload: -1 })}
        />
        <Button
            onPress={() => dispatch({ type: 'clear' })}
            title="Clear All"
        />
    </View>
};

const styles = StyleSheet.create({});

export default CartScreen;