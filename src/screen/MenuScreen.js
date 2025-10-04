import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MenuScreen({ route, navigation }) {
  const { cafeteria } = route.params;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/cafeterias/${cafeteria.id}/menu?time=all`)
      .then(res => setMenu(res.data))
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ItemDetail', { item })}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₽ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cafeteria.name} Menu</Text>
      <FlatList data={menu} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', padding:10 },
  title: { fontSize:22, fontWeight:'bold', marginBottom:10 },
  item: { flexDirection:'row', justifyContent:'space-between', padding:15, borderBottomWidth:1, borderColor:'#eee' },
  name: { fontSize:16 },
  price: { fontSize:16, fontWeight:'600' }
});
