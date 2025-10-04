import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderStatus() {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    // Simulate order progress
    const timer1 = setTimeout(() => setStatus('Preparing'), 5000);
    const timer2 = setTimeout(() => setStatus('Ready'), 10000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <Text style={styles.status}>{status}</Text>
      {status === 'Ready' && <Text style={styles.pickup}>Show QR at cafeteria for pickup</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title:{ fontSize:22, fontWeight:'bold', marginBottom:20 },
  status:{ fontSize:20, color:'#1160FF', marginBottom:10 },
  pickup:{ fontSize:16, color:'#FF2B5C' }
});
