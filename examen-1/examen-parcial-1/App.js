import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleNewItem = () => {
    if (inputText.trim()) {
      setItems([...items, { text: inputText, checked: false }]);
      setInputText('');
    }
  };

  const handleState = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>
        Lista de compras
        </Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text>
            Por comprar:
          </Text>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            style={styles.input}
          />
          <Button title="Agregar" onPress={handleNewItem} style={styles.botonAgregar}/>
        </View>
        <ScrollView>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <CheckBox checked={item.checked} onPress={() => handleState(index)} 
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#219ebc" />
              <Text style={item.checked ? styles.checkedItem : styles.uncheckedItem}>
                {item.text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#8ecae6',
    height: '100%',
    width: '100%',
  },
  tituloContainer: {
    justifyContent: 'space-around',
    allignItems: 'bottom',
    backgroundColor: '#219ebc',
    height: '10%',
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    backgroundColor: '#bde0fe',
    borderBottomColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkedItem: {
    fontSize: 17,
    fontFamily: 'times new roman',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  uncheckedItem: {
    fontSize: 17,
    fontFamily: 'times new roman',
    color: 'black',
  }
});