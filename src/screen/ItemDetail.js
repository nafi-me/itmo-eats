import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ItemDetail({ route, navigation }) {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity }));
    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.photos[0] || 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>₽ {item.price}</Text>
      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q-1))} style={styles.qtyBtn}><Text>-</Text></TouchableOpacity>
        <Text style={styles.qty}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(q => q+1)} style={styles.qtyBtn}><Text>+</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
        <Text style={styles.addBtnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:15, backgroundColor:'#fff' },
  image:{ width:'100%', height:200, borderRadius:10 },
  name:{ fontSize:22, fontWeight:'bold', marginVertical:10 },
  desc:{ fontSize:16, marginBottom:10 },
  price:{ fontSize:18, fontWeight:'600', marginBottom:20 },
  qtyContainer:{ flexDirection:'row', alignItems:'center', marginBottom:20 },
  qtyBtn:{ padding:10, borderWidth:1, borderColor:'#ccc', borderRadius:5 },
  qty:{ fontSize:18, marginHorizontal:15 },
  addBtn:{ backgroundColor:'#FF2B5C', padding:15, borderRadius:10, alignItems:'center' },
  addBtnText:{ color:'#fff', fontSize:16, fontWeight:'600' }
});
