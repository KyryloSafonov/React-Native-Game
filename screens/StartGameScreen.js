import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import styleStartGameScreen from '../styles/styleStartGameScreen';
import Card from '../components/Card';
import color from '../constans/color';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [pint, setPint] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    setPint(false);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setPint(true);
  };

  const confirmInputHandler = () => {
    // eslint-disable-next-line radix
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    setPint(true);
  };

  const pintInputHandler = () => {
    setPint(false);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styleStartGameScreen.screen}>
        <Text style={styleStartGameScreen.title}>Start a new game!</Text>
        <Card style={styleStartGameScreen.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styleStartGameScreen.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
            caretHidden={pint}
            onPressIn={pintInputHandler}
          />
          <View style={styleStartGameScreen.buttonContainer}>
            <View style={styleStartGameScreen.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={color.accent}
              />
            </View>
            <View style={styleStartGameScreen.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={color.primary}
              />
            </View>
          </View>
        </Card>
        <Text style={styleStartGameScreen.numberBlock}>{confirmedOutput}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
