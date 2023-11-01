import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #ff9966 0%, #ff5e62 100%)',
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 7,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
