import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default function CafeteriaList({ navigation }) {
  const [cafeterias, setCafeterias] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/campuses/1/cafeterias') // replace 1 with selected campus
      .then(res => setCafeterias(res.data))
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MenuScreen', { cafeteria: item })}>
      <Image source={{ uri: item.hero_image || 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.hours}>{item.hours}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={cafeterias} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:10, backgroundColor:'#fff' },
  card: { marginBottom:15, backgroundColor:'#f5f5f5', borderRadius:10, overflow:'hidden' },
  image: { width:'100%', height:150 },
  name: { fontSize:18, fontWeight:'bold', padding:10 },
  hours: { fontSize:14, color:'#555', paddingHorizontal:10, paddingBottom:10 }
});
