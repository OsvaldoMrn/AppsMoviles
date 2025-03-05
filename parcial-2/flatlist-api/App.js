import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  const [dogImage, setDogImage] = useState(null);
  const [breed, setBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);
  const [activeTab, setActiveTab] = useState('random'); 
  const [errorMessage, setErrorMessage] = useState('');

  const fetchRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      if (json.status === 'success') {
        setDogImage(json.message);
        setActiveTab('random');
        setErrorMessage('');
      } else {
        setErrorMessage('No encontrado');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('No encontrado');
    }
  };

  const fetchDogByBreed = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/5`);
      console.log(response);
      const json = await response.json();
      if (json.status === 'success' && json.message.length > 0) {
        setBreedImages(json.message);
        setActiveTab('breed');
        setErrorMessage('');
      } else {
        setErrorMessage('No encontrado');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('No encontrado');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Perros</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la raza del perro"
        placeholderTextColor="#dcdde1"
        value={breed}
        onChangeText={setBreed}
      />
      <View style={styles.buttonContainer}>
        <Button title="Buscar por raza" onPress={fetchDogByBreed} color="#44bd32" />
        <Button title="Sorpréndeme" onPress={fetchRandomDog} color="#e84118" />
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <>
          {activeTab === 'random' && dogImage && (
            <Image style={styles.randomDogImage} source={{ uri: dogImage }} />
          )}
          {activeTab === 'breed' && (
            <FlatList
              data={breedImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Image style={styles.breedImage} source={{ uri: item }} />
              )}
              style={styles.flatList}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273c75',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f6fa',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#dcdde1',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#f5f6fa',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  randomDogImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
  },
  flatList: {
    width: '100%',
  },
  breedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  errorText: {
    color: '#e84118',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});