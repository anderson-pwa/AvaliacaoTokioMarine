import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#88b8ba',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 5,
    borderTopColor: '#107F63',
    alignItems: 'center',
  }, 
  button: {
    position: 'relative',
    top: -40
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    position: 'absolute',
    top: 30,
    color: 'white'
  }

});

export default styles;