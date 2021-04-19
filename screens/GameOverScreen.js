import React from 'react';
import {View, Text, Button} from 'react-native';
import styleGameOverScreen from '../styles/styleGameOverScreen';

const GameOverScreen = props => {
  return (
    <View style={styleGameOverScreen.screen}>
      <Text style={styleGameOverScreen.textItem}>The game is over!</Text>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;
