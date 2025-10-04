import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const campuses = [
  { id: 1, name: 'Kronverkskiy Avenue, 49' },
  { id: 2, name: 'Lomonosova Street, 9' }
];

export default function CampusSelection({ navigation, setCampus }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Campus</Text>
      {campuses.map(c => (
        <TouchableOpacity
          key={c.id}
          style={styles.button}
          onPress={() => setCampus(c)}
        >
          <Text style={styles.buttonText}>{c.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 },
  button: { padding:15, backgroundColor:'#1160FF', borderRadius:10, marginBottom:15, width:300, alignItems:'center' },
  buttonText: { color:'#fff', fontSize:16, fontWeight:'600' }
});
