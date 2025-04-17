import { StyleSheet, Text, View, Button, Alert, Platform} from 'react-native';

export default function App() {
  const simpleAlert = () =>{
    Alert.alert(
      'Titulo de Alerta',
      'Este es el mensaje de mi alerta'
    )  
  }
  const multipleButtonAlert = () =>{
    Alert.alert(
      'Titulo de Alerta',
      'Selecciona una opción',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Aceptar',
          onPress: () => console.log('Aceptar Pressed'),
        },
        {
          text: 'More options',
          onPress: () => console.log('More options Pressed'),        }
      ]
    )
  }

  const promptAlert = () =>{
    if(Platform.OS === 'ios'){
      Alert.prompt(
        'Alerta con input',
        'Ingresa tu nombre',
        (text) => console.log(text),
        'plain-text',
        '',
        'default'
      )
  }else{
    Alert.alert(
      'Info',
      'Los inputs en android no funcionan',
      [{text: 'OK'}]
    )
  }
  }
  
  return (
    <View style={styles.container}>
      <Text>Demo de alertas en react native</Text>
      <View style = {styles.buttonContainer}>
        <Button
          title = "Alerta simple"
          onPress= {simpleAlert}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <Button
          title = "Alerta de múltiples botones"
          onPress= {multipleButtonAlert}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <Button
          title = "Alerta from input"
          onPress= {promptAlert}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
