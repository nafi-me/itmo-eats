import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import screens
import LoginScreen from './screens/LoginScreen';
import CafeteriaList from './screens/CafeteriaList';
import MenuScreen from './screens/MenuScreen';
import ItemDetail from './screens/ItemDetail';
import CartScreen from './screens/CartScreen';
import OrderStatus from './screens/OrderStatus';
import ChatScreen from './screens/ChatScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="CafeteriaList" component={CafeteriaList} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="OrderStatus" component={OrderStatus} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
