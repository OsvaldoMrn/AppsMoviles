import { StyleSheet, Text, View, Image, Linking } from 'react-native';

const myName = 'Osvaldo'
const description = '20 años\n Estudiante de Ingeniería en Software\n FIF UAQ'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Perfil</Text>
      </View>
      <View>
        <Image source={require('./assets/background.png')} style={styles.portada} />
        <Image source={require('./assets/profile.png')} style={styles.foto_perfil} />
      </View>
      <View>
        <Text style={styles.text_name}>Hola, soy {myName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://open.spotify.com/track/3dSplmMF8Dyw5R8NL5fb5c?si=nBJHC3wDSUKcQUApMdhgeg&context=spotify%3Aplaylist%3A37i9dQZF1Epsid2LPyVPJ2')}>
          Hit del momento
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe6e9',
  },
  navbar:{
    backgroundColor: '#273c75',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#dcdde1',
  },
  title:{
    color: '#f5f6fa',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  portada:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 500,
    margin: 'auto',
    position: 'relative', 
  },
  foto_perfil:{
    marginLeft: 5,
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text_name:{
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  description:{
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    lineHeight: 24,
  },
  link:{
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});