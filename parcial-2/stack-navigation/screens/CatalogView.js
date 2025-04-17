import { FlatList, View, Text, Image } from "react-native";
import styles from "../styles/styles";
import data from "../data/data";

export default function DynamicList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Id</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Image</Text>
        <Text style={styles.headerText}>Weight</Text>
        <Text style={styles.headerText}>Height</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text style={styles.cell}>{item.weight}</Text>
            <Text style={styles.cell}>{item.height}</Text>
          </View>
        )}
        style={styles.flatlist}
      />
    </View>
  );
}