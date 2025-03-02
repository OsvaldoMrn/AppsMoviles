import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#273c75',
      justifyContent: 'center',
      flex: '1', 
      padding: 10,
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: '#dcdde1',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 16,
      flex: 1,
      textAlign: 'center',
    },
    textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue',
    },
    body:{
      marginTop: 34,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue',
    },
    textBody: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#f5f6fa',
    },
    flatlist: {
      width: '100%',
      flex: '1',
      height: '90%',
    },
    flatlistText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#f5f6fa',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 14,
      justifyContent: 'center',
      alignSelf: 'center',
      color: '#f5f6fa'
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
  });

export default styles;