
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import app from './firebase.js'

import  BottomTabs  from './components/BottomTabs';

export default function App() {
  return (

    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  );
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
