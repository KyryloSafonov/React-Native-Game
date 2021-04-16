/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import stylesApp from './styles/stylesApp';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
    <View style={stylesApp.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
};

export default App;
