const {StyleSheet, Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');
const _spacing = 10;

const styles = StyleSheet.create({
  //common C
  Container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
    justifyContent: 'center',
    padding: 20,
  },
  CRow: {flexDirection: 'row'},
  Cmargin: {margin: 20},
  titleText: {fontSize: 18, padding: 10},
  //Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
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
  signUpMethView3: {flex: 2, justifyContent: 'center'},
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
  TopRightSvgStyle2: {position: 'absolute', top: 0, left: 10},
  StandartText: {fontSize: 30},
  weighted: {fontWeight: 'bold'},
  IconMargin: {marginHorizontal: 25, top: 4},
  signUpMethView: {flex: 1, justifyContent: 'center', marginTop: 10},
  input: {
    width: '100%',
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 12,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    // shadowOffset: 0.1,
    width: '95%',
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  NumSignUpThemeStylle: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'cyan',
    width: width,
  },
  //Custom
  LinearBotton: {padding: 10, borderRadius: 20, margin: 10},
  TextWhite: {textAlign: 'center', color: 'white', fontSize: 18},
  viewToRender: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height / 3.5,
  },
  //Home
  text1: {fontSize: 20, marginLeft: 30},

  //onBoarding
  cardSpace: {
    marginRight: _spacing,
    padding: _spacing,
    width: width - 40,
  },
});

export default styles;
