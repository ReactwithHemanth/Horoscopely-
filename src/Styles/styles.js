const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  //common C
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  CRow: {flexDirection: 'row'},
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
  signUpMethView2: {flex: 1.2, justifyContent: 'center'},
  smallText: {fontSize: 12, textAlign: 'center', padding: 22},
  SkipText: {margin: 20, color: 'grey'},
  signUpMethBottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomSvgStyle: {bottom: 0, position: 'absolute', alignSelf: 'center'},
  buttonTextStyle: {textAlign: 'center', fontSize: 20},
  LinkText: {color: 'blue', textDecorationLine: 'underline'},
  TopRightSvgStyle: {position: 'absolute', top: 0, left: 90},
  StandartText: {fontSize: 30},
  weighted: {fontWeight: 'bold'},
  IconMargin: {marginHorizontal: 25, top: 4},
  signUpMethView: {flex: 1, justifyContent: 'center', marginTop: 10},
  input: {width: '100%', backgroundColor: '#f8f8ff', margin: 5, padding: 10},

  //Custom
  LinearBotton: {padding: 10, borderRadius: 20, margin: 10},
  TextWhite: {textAlign: 'center', color: 'white', fontSize: 18},

  //Home
  text1: {fontSize: 20, marginLeft: 30},
});

export default styles;
