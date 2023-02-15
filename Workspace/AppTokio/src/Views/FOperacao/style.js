import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  banner: {
    top: 0,
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE6B26'
  },
  filterTextInative: {
    color: '#20295f',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.5
  },
  content: {
    width: '100%',
    marginTop: 0,
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#20295f',
    alignItems: 'center'
  },
  titleText: {
    color: '#20295f',
    fontSize: 18,
    position: 'relative',
    top: 11,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  input: {
    fontSize: 16,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0E634D',
    marginHorizontal: 10,
    textAlign : 'center',
  },
  inputarea: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: '#EE6B26',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'top'
  },
});

export default styles;