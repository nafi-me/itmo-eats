//Email + Phone + Google placeholders)


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Placeholder: connect with backend auth
    navigation.navigate('CampusSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone" style={styles.input} value={phone} onChangeText={setPhone} />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:20 },
  title:{ fontSize:24, fontWeight:'bold', marginBottom:20 },
  input:{ width:'100%', borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:15 },
  btn:{ backgroundColor:'#1160FF', padding:15, borderRadius:10, width:'100%', alignItems:'center' },
  btnText:{ color:'#fff', fontWeight:'600' }
});
