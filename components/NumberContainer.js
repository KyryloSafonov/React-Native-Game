import React from 'react';
import {View, Text} from 'react-native';
import styleNumberContainer from '../styles/styleNumberContainer';

const NumberContainer = props => {
  return (
    <View style={styleNumberContainer.container}>
      <Text style={styleNumberContainer.numbers}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;
