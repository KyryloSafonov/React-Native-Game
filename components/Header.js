import React from 'react';
import {View, Text} from 'react-native';
import stylesHeader from '../styles/stylesHeader';

const Header = props => {
  return (
    <View style={stylesHeader.header}>
      <Text style={stylesHeader.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;
