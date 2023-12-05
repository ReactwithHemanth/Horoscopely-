import {Color} from '../Utils/Color';
import {screenDiagonal} from '../Utils/helperFunctions';

const {StyleSheet, Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');
const _spacing = 10;
const dgl = screenDiagonal();

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
  Cpadding: {padding: _spacing},
  titleText: {fontSize: 18, padding: 10},
  loading: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
  svgCenter: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
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
  homeView3: {alignItems: 'flex-start', padding: 10},
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
  homeheading: {fontSize: 20, fontWeight: 'bold', color: Color.white},
  homeView2: {flex: 1, width: dgl * 0.4},
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
    alignItems: 'center',
    // justifyContent: 'center',
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
  imageBgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
  },
  filterStyle: {
    backgroundColor: '#CDA3EF',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BF7AF3',
    flexDirection: 'row',
    alignItems: 'center',
    width: dgl * 0.13,
    justifyContent: 'space-between',
  },
  LinearView: {
    width: '90%',
    height: 300,
    marginTop: dgl * 0.14,
    borderRadius: 20,
    padding: 20,
  },
  SvgView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BoxView2: {
    width: dgl * 0.38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BoxView: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.white,
  },
  alignView: {alignItems: 'center'},
  textMargin: {marginTop: 10, color: Color.white},
  LinearLineAlign: {flexDirection: 'row', justifyContent: 'space-between'},

  //onBoarding
  cardSpace: {
    marginRight: _spacing,
    padding: _spacing,
    width: width - 40,
  },
  //footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    padding: 10,
    backgroundColor: Color.darkViolet, // Set your preferred background color
  },
  footerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 12,
    color: Color.regularViolet, // Set your preferred text color
  },
});

export default styles;
