import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('receive_message', data => setMessages(prev => [...prev, data]));
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', { text: input });
    setInput('');
  };

  const renderItem = ({ item }) => <Text style={styles.msg}>{item.text}</Text>;

  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={renderItem} keyExtractor={(item, i) => i.toString()} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Type a message" />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}><Text>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff' },
  msg:{ padding:10, borderBottomWidth:1, borderColor:'#eee' },
  inputContainer:{ flexDirection:'row', padding:10, borderTopWidth:1, borderColor:'#eee' },
  input:{ flex:1, borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10 },
  sendBtn:{ justifyContent:'center', alignItems:'center', marginLeft:10, paddingHorizontal:15, backgroundColor:'#1160FF', borderRadius:10 }
});
