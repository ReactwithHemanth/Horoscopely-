const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  //common C
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  Cmargin: {margin: 20},
  //SignUpScreen
  Button: {
    borderRadius: 25,
    padding: 10,
    margin: 15,
    elevation: 0.5,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: 0.1,
  },
  input: {width: '100%', backgroundColor: '#f8f8ff', margin: 5, padding: 10},

  //Custom
  LinearBotton: {padding: 10, borderRadius: 20, margin: 10},
  TextWhite: {textAlign: 'center', color: 'white', fontSize: 18},
});

export default styles;
