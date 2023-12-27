import {Color} from '../Utils/Color';
import {screenDiagonal} from '../Utils/helperFunctions';
export const SPACING = 10;

const {StyleSheet, Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');
const dgl = screenDiagonal();

const styles = StyleSheet.create({
  //common C
  Container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
    justifyContent: 'center',
    padding: SPACING,
  },
  CRow: {felx: 1, flexDirection: 'row'},
  Cmargin: {margin: 20},
  Cpadding: {padding: SPACING},
  titleText: {fontSize: 18, padding: SPACING},
  focusView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: dgl * 0.35,
  },
  titleText2: {fontSize: 18, paddingLeft: SPACING},
  loading: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
  SubTitileText: {
    fontSize: dgl * 0.015,
    padding: SPACING,
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
    marginRight: SPACING,
  },
  homeView3: {alignItems: 'flex-start', padding: SPACING},
  //SignUpScreen
  Button: {
    borderRadius: 25,
    padding: SPACING,
    margin: 15,
    elevation: 0.5,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: 0.1,
  },
  homeheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
    fontFamily: 'Molle',
    padding: SPACING,
  },
  homeView2: {flex: 1},
  smallText: {fontSize: 12, textAlign: 'center', padding: 22},
  SkipText: {margin: 20, color: 'grey'},

  BottomSvgStyle: {bottom: 0, position: 'absolute', alignSelf: 'center'},
  buttonTextStyle: {textAlign: 'center', fontSize: 20},
  LinkText: {color: 'blue', textDecorationLine: 'underline'},
  TopRightSvgStyle: {position: 'absolute', top: 0, left: 90},
  TopRightSvgStyle2: {position: 'absolute', top: 0, left: SPACING},
  StandartText: {fontSize: 30},
  weighted: {fontWeight: 'bold'},
  IconMargin: {marginHorizontal: 25, top: 4},
  signUpMethView: {
    flex: 1.5,
    justifyContent: 'space-evenly',
  },
  signUpMethView2: {
    flex: 1,
    margin: SPACING * 2,
    justifyContent: 'flex-end',
  },
  signUpMethBottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 12,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    // shadowOffset: 0.1,
  },
  paginationView: {
    position: 'absolute',
    bottom: SPACING * 2,
    width: width,
    padding: SPACING * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: SPACING,
    borderRadius: 5,
  },
  NumSignUpThemeStylle: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'cyan',
    // width: width,
  },

  //Custom
  LinearBotton: {padding: SPACING, borderRadius: 20, margin: SPACING},
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
    // marginTop: SPACING,
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
    // width: dgl * 0.38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING,
  },
  BoxView: {
    flex: 1,
    padding: SPACING,
    margin: SPACING,
    borderRadius: SPACING,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.white,
  },
  alignView: {alignItems: 'center'},
  textMargin: {marginTop: SPACING, color: Color.white},
  LinearLineAlign: {flexDirection: 'row', justifyContent: 'space-between'},

  //onBoarding
  cardSpace: {
    width: width,
    height: height / 3,
    // marginRight: SPACING,
    padding: SPACING,
    margin: 5,
    // alignSelf: 'center',
    borderRadius: 15,
    // backgroundColor: 'red',
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    // alignSelf: 'flex-start',
    marginLeft: SPACING * 2,
  },
  //footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    padding: SPACING,
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
    padding: SPACING * 2,
    backgroundColor: Color.white,
    // marginBottom: SPACING,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: Color.grey,
  },
  // dateTimePicker
  welcomeView: {
    alignSelf: 'flex-start',
    marginLeft: SPACING * 3,
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
    borderRadius: SPACING,
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
    padding: SPACING,
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
    paddingLeft: SPACING,
    alignSelf: 'center',
    borderRadius: 20,
    marginLeft: SPACING,
  },
  zodiacBox: {
    height: dgl * 0.1,
    width: dgl * 0.1,
    padding: dgl * 0.03,
    marginHorizontal: width / 3,
    backgroundColor: Color.whiteOpacity,
    justifyContent: 'center',
    borderRadius: dgl * 0.009,
    alignItems: 'center',
  },
  customInput: {
    width: '70%',
    height: 45,
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 12,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
  },
  flagContainer: {
    width: 100,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: 'grey',
    shadowOpacity: 0.3,
  },
  safeArea: {
    flex: 2.6,
    justifyContent: 'space-around',
  },
  compatibilityContainer: {
    height: dgl * 0.09,
    width: dgl * 0.09,
    justifyContent: 'center',
    borderRadius: dgl * 0.009,
  },
  zodiaImageView: {
    width: dgl * 0.06,
    height: dgl * 0.06,
    alignSelf: 'center',
  },
  zodiaImageView2: {width: dgl * 0.07, height: dgl * 0.07},
  zodiaActive: {
    backgroundColor: '#6F4ED0',
    // alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    marginBottom: 5,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Color.shadedWhite,
    alignSelf: 'center',
  },
  flatListView1: {
    height: dgl * 0.1,
    width: dgl * 0.1,
    padding: dgl * 0.03,
    marginHorizontal: width / 3,
    backgroundColor: Color.whiteOpacity,
    justifyContent: 'center',
    borderRadius: dgl * 0.009,
    alignItems: 'center',
  },
  zodiaNormal: {
    height: dgl * 0.09,
    width: dgl * 0.09,
    justifyContent: 'center',
    borderRadius: dgl * 0.009,
  },
  arrowStyle: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    paddingHorizontal: dgl * 0.08,
    alignItems: 'center',
    top: dgl * 0.35,
  },
  compatibilityButon: {
    padding: dgl * 0.02,
    backgroundColor: Color.white,
    borderRadius: dgl * 0.05,
  },
});

export default styles;
