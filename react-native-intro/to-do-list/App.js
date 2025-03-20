import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar} >
        <Text style={styles.tittle}>
          To Do List
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.tittlecontainer}>
          <Text style={styles.titleBody}>
            Lista de compras
          </Text>
        </View>
      <ScrollView style={styles.bodyContainer}>
        <CheckBox title="Leche" containerStyle={styles.checkbox}/>
        <CheckBox title="Pan" containerStyle={styles.checkbox}/>
        <CheckBox title="Huevos" containerStyle={styles.checkbox}/>
        <CheckBox title="Cebolla" containerStyle={styles.checkbox}/>
        <CheckBox title="Papas" containerStyle={styles.checkbox}/>
        <CheckBox title="Tomate" containerStyle={styles.checkbox}/>
        <CheckBox title="Sal" containerStyle={styles.checkbox}/>
        <CheckBox title="Azucar" containerStyle={styles.checkbox}/>
        <CheckBox title="Aceite" containerStyle={styles.checkbox}/>
        <CheckBox title="Arroz" containerStyle={styles.checkbox}/>
        <CheckBox title="Frijoles" containerStyle={styles.checkbox}/>
        <CheckBox title="Carne" containerStyle={styles.checkbox}/>
        <CheckBox title="Pollo" containerStyle={styles.checkbox}/>
        <CheckBox title="Pescado" containerStyle={styles.checkbox}/>
        <CheckBox title="Cereal" containerStyle={styles.checkbox}/>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    
  },
  navbar:{
    backgroundColor: '#2c3e50',
    height: "10%",
    width: "100%",
    marginTop: 0,
    textAlign: "justify",
    justifyContent: "center",
  },
  tittle:{
    color:"#fff",
    fontSize: 20,
    fontWeight: 20,
    marginStart: 20,
    marginTop: 20,
  },
  body: {
    height: '90%',
    backgroundColor: '#ecf0f1',
    maxWidth: '100%'
  },
  tittlecontainer:{
    backgroundColor: '',
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBody:{
    color:"#000",
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyContainer:{
    width: '100%',
    marginBottom:'10%'
  },
  checkbox:{
    backgroundColor: "#7f8c8d",
    width: '75%',
    fontSize: 50,
  }
});