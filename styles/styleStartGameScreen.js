import {StyleSheet} from 'react-native';

const styleStartGameScreen = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 90,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  numberBlock: {
    paddingTop: 10,
    fontSize: 20,
    color: 'blue',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default styleStartGameScreen;
