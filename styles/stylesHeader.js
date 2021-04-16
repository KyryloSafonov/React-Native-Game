import {StyleSheet} from 'react-native';
import color from '../constans/color';

const stylesHeader = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 30,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default stylesHeader;
