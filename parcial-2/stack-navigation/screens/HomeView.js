import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.image} 
        source={{ uri: 'https://ih1.redbubble.net/image.233782690.1742/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg' }} 
      >
        <View style={styles.buttonContainer}>
          <Button title="Ingresar" onPress={() => alert('Ingresar presionado')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    allignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED1E24'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 9/15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '50%',
  },
});

export default HomeView;