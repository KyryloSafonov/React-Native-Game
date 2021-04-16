import React from 'react';
import {TextInput} from 'react-native';
import styleInput from '../styles/styleInput';

const Input = props => {
  return <TextInput {...props} style={{...styleInput.input, ...props.style}} />;
};

export default Input;
