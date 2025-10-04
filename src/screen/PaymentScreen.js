//(Placeholder for Mir & SBP)


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PaymentScreen({ navigation }) {
  const handlePayment = (method) => {
    alert(`Payment via ${method} simulated`);
    navigation.navigate('OrderStatus');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Payment Method</Text>
      <TouchableOpacity style={styles.btn} onPress={() => handlePayment('Mir')}>
        <Text style={styles.btnText}>Pay with Mir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handlePayment('SBP')}>
        <Text style={styles.btnText}>Pay with SBP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handlePayment('Cash')}>
        <Text style={styles.btnText}>Pay Cash at Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:20 },
  title:{ fontSize:22, fontWeight:'bold', marginBottom:20 },
  btn:{ backgroundColor:'#FF2B5C', padding:15, borderRadius:10, marginBottom:15, width:'100%', alignItems:'center' },
  btnText:{ color:'#fff', fontWeight:'600' }
});
