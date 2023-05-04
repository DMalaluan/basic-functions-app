import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TextInput} from 'react-native';

const ItemListScreen = () => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemList, setItemList] = useState([]);
    
    const newItem = () => {
        const newItemName = itemName;
        const newItemQuantity = itemQuantity;
    
        return {newItemName, newItemQuantity};
    }

    return <View>
        <Text>Enter Item Name:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={itemName}
        onChangeText={(newValue) => setItemName(newValue)}
        />
        <Text>Enter Quantity:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={itemQuantity}
        onChangeText={(newValue) => setItemQuantity(newValue)}
        />
        <Button title="ADD ITEM" 
        onPress={() => { setItemList([...itemList, newItem()])
        }}/>

        <FlatList 
            keyExtractor={itemList => itemList.name} //Extracts key from each object
            data={itemList}
            renderItem={({item}) => {
                return <Text style={styles.listText}>{item.newItemName}: {item.newItemQuantity}</Text>;
            }}
        />
    </View>
}



const styles = StyleSheet.create({  
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    listText: {
        fontSize: 15,
        margin: 10
    }
});

export default ItemListScreen;