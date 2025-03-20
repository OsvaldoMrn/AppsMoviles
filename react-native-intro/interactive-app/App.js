import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { CheckBox } from '@rneui/themed'

export default function App() {

  const [items, setItems] = useState([
    { id: 1, text: 'App interactiva', subject: 'DAM', dueDate: 'Domingo 9', checked: false },
    { id: 2, text: 'Mapa mental', subject: 'Big Data', dueDate: 'Miércoles 5', checked: false },
  ]);

  const [newTask, setNewTask] = useState({ text: '', subject: '', dueDate: '' });

  const checkedHandler = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  }

  const addTaskHandler = () => {
    setItems([...items, { id: items.length + 1, ...newTask, checked: false }]);
    setNewTask({ text: '', subject: '', dueDate: '' });
  }

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
            Lista de Tareas
          </Text>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Estado</Text>
            <Text style={styles.tableHeaderText}>Tarea</Text>
            <Text style={styles.tableHeaderText}>Materia</Text>
            <Text style={styles.tableHeaderText}>Fecha de Entrega</Text>
          </View>
          {items.map(item => (
            <View key={item.id} style={[styles.tableRow, item.checked && styles.completedRow]}>
              <CheckBox
                checked={item.checked}
                onPress={() => checkedHandler(item.id)}
              />
              <Text style={styles.tableCell}>{item.text}</Text>
              <Text style={styles.tableCell}>{item.subject}</Text>
              <Text style={styles.tableCell}>{item.dueDate}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <CheckBox
              checked={false}
              disabled={true}
            />
            <TextInput
              style={styles.tableCell}
              placeholder="Nueva Tarea"
              value={newTask.text}
              onChangeText={(text) => setNewTask({ ...newTask, text })}
            />
            <TextInput
              style={styles.tableCell}
              placeholder="Materia"
              value={newTask.subject}
              onChangeText={(subject) => setNewTask({ ...newTask, subject })}
            />
            <TextInput
              style={styles.tableCell}
              placeholder="Fecha de Entrega"
              value={newTask.dueDate}
              onChangeText={(dueDate) => setNewTask({ ...newTask, dueDate })}
            />
          </View>
        </ScrollView>
        <Button title="Agregar Tarea" onPress={addTaskHandler} />
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#bdc3c7',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
  },
  completedRow: {
    backgroundColor: '#ffcccc',
  },
  tableCell: {
    width: '25%',
    textAlign: 'center',
  },
});