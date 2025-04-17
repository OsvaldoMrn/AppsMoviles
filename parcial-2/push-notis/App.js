import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const registerpushnotifications = async () => {
    if (!Device.isDevice) {
      Alert.alert('Debes usar un dispositivo físico');
      return;
    }
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No tienes permisos para recibir notificaciones');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    Alert.alert('Token generado');
  };

  useEffect(() => {
    registerpushnotifications();
    const notificacionesListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida', notification);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificacionesListener);
    };
  }, []);

  const setNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'notificacion de prueba',
        body: 'esto es una notificacion de prueba',
        data: { ejemplo: 'data' },
      },
      trigger: { seconds: 10 },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Prueba de Push Notifications</Text>
      <Button title="Enviar Notificación" onPress={setNotification} />
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