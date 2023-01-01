import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
        initialRouteName={"Home"}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="about" component={About} />
        {/* <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="contacts" component={Contacts} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
