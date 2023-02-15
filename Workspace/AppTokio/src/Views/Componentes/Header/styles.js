import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 160,
    backgroundColor: '#88b8ba',
    borderBottomWidth: 5,
    borderBottomColor: '#107F63',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: { 
    marginTop : 40,
    width: 217,
    height: 84
  },
  nome: {
    fontWeight:'bold',
    fontSize: 25,
    verticalAlign : 'center',
    position: 'absolute',
    left: 10,
    alignItems : 'center',
    color : 'white'
  },
  notification: {
     alignItems : 'center',
    position: 'absolute',
    right: 20
  },
  notificationImage: {
    width: 30,
    height: 35
  },
  notificationText: {
    fontWeight: 'bold',
    color: '#EE6B26'
  },
  circle: {
    width: 25,
    height: 25,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    bottom: 13
  },
  leftIcon: {
    position: 'absolute',
    left: 20
  },
  leftIconImage: {
    width: 30,
    height: 30
  }
});

export default styles;