import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

export default function CartScreen({ navigation }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name} x{item.quantity}</Text>
      <Text>₽ {item.price * item.quantity}</Text>
      <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={cartItems} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      <Text style={styles.total}>Total: ₽ {total}</Text>
      <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('OrderStatus')}>
        <Text style={styles.checkoutText}>Proceed to Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearBtn} onPress={() => dispatch(clearCart())}>
        <Text style={styles.clearText}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:15, backgroundColor:'#fff' },
  item:{ flexDirection:'row', justifyContent:'space-between', paddingVertical:10, borderBottomWidth:1, borderColor:'#eee' },
  remove:{ color:'red' },
  total:{ fontSize:18, fontWeight:'600', marginVertical:15 },
  checkoutBtn:{ backgroundColor:'#1160FF', padding:15, borderRadius:10, alignItems:'center', marginBottom:10 },
  checkoutText:{ color:'#fff', fontSize:16, fontWeight:'600' },
  clearBtn:{ backgroundColor:'#ccc', padding:10, borderRadius:10, alignItems:'center' },
  clearText:{ fontSize:14 }
});
