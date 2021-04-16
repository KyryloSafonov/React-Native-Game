import React from 'react';
import {View} from 'react-native';
import styleCard from '../styles/styleCard';

const Card = props => {
  return (
    <View style={{...styleCard.card, ...props.style}}>{props.children}</View>
  );
};

export default Card;
