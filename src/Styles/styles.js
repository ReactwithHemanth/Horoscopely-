import {Color} from '../Utils/Color';
import {screenDiagonal} from '../Utils/helperFunctions';

const {StyleSheet, Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');
export const _spacing = 10;
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
  titleText: {fontSize: 18, padding: _spacing},
  focusView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: dgl * 0.35,
  },
  titleText2: {fontSize: 18, paddingLeft: _spacing},
  loading: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
  SubTitileText: {
    fontSize: dgl * 0.015,
    paddingLeft: _spacing,
    color: Color.grey,
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
    marginRight: _spacing,
  },
  homeView3: {alignItems: 'flex-start', padding: _spacing},
  //SignUpScreen
  Button: {
    borderRadius: 25,
    padding: _spacing,
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
  TopRightSvgStyle2: {position: 'absolute', top: 0, left: _spacing},
  StandartText: {fontSize: 30},
  weighted: {fontWeight: 'bold'},
  IconMargin: {marginHorizontal: 25, top: 4},
  signUpMethView: {flex: 1, justifyContent: 'center', marginTop: _spacing},
  input: {
    width: '_spacing0%',
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 12,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    // shadowOffset: 0.1,
    width: '95%',
  },
  paginationView: {
    position: 'absolute',
    bottom: _spacing * 2,
    width: width,
    padding: _spacing * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: _spacing,
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
  LinearBotton: {padding: _spacing, borderRadius: 20, margin: _spacing},
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
    // marginTop: _spacing,
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
    padding: _spacing,
    margin: _spacing,
    borderRadius: _spacing,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.white,
  },
  alignView: {alignItems: 'center'},
  textMargin: {marginTop: _spacing, color: Color.white},
  LinearLineAlign: {flexDirection: 'row', justifyContent: 'space-between'},

  //onBoarding
  cardSpace: {
    marginRight: _spacing,
    padding: _spacing,
    width: width - 40,
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: _spacing * 2,
  },
  //footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    padding: _spacing,
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
  ItemListView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: _spacing * 2,
    backgroundColor: Color.white,
    // marginBottom: _spacing,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: Color.grey,
  },
  // dateTimePicker
  welcomeView: {
    alignSelf: 'flex-start',
    marginLeft: _spacing * 3,
  },
  welcomeTitleText: {fontSize: 25, fontWeight: 'bold'},
  welcomeTextSub: {
    fontSize: 20,
    textAlign: 'left',
  },

  // Notifications
  MainBox: {
    flexDirection: 'row',
    backgroundColor: Color.whiteOpacity,
    borderRadius: _spacing,
  },
  headerNotifyBar: {
    position: 'absolute',
    height: dgl * 0.02,
    width: dgl * 0.02,
    left: 9,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: Color.regularViolet,
  },
  ColoumBox: {
    padding: _spacing,
    width: dgl * 0.38,
    flexDirection: 'column',
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: dgl * 0.38,
  },
  notificationsContainer: {
    width: dgl * 0.01,
    height: dgl * 0.01,
    backgroundColor: Color.regularViolet,
    paddingLeft: _spacing,
    alignSelf: 'center',
    borderRadius: 20,
    marginLeft: _spacing,
  },
});

export default styles;
