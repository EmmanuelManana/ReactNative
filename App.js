import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';


const App = () => {
  return (

    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
