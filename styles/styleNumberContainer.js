import {StyleSheet} from 'react-native';
import color from '../constans/color';

const styleNumberContainer = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    color: color.accent,
    fontSize: 22,
  },
});

export default styleNumberContainer;
