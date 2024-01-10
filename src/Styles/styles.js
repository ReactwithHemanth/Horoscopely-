import {Color} from '../Utils/Color';
import {screenDiagonal} from '../Utils/helperFunctions';
export const SPACING = 10;

const {StyleSheet, Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');
const dgl = screenDiagonal();

//common C
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F7F6F8',
    justifyContent: 'center',
    padding: SPACING * 2,
  },
  CWidth: {width: '100%', padding: SPACING * 2},
  CRow: {flex: 1, flexDirection: 'row'},
  Cmargin: {margin: 20},
  Cpadding: {padding: SPACING},
  titleText: {
    fontSize: 15,
    padding: SPACING,
    marginLeft: SPACING,
    color: Color.grey,
    fontFamily: 'SFProDisplay-Regular',
  },
  dateText: {
    fontSize: 15,
    fontWeight: '200',
    color: Color.white,
    paddingVertical: SPACING,
  },
  nameText: {fontSize: 20, fontWeight: '500', color: Color.white},
  padded: {
    padding: SPACING,
  },
  compatibilityView: {
    alignItems: 'center',
    padding: SPACING,
    right: 20,
    // marginLeft: 20,
  },
  compatibilityText: {
    fontSize: 20,
    marginBottom: dgl * 0.005,
    color: Color.white,
    fontWeight: '700',
    fontFamily: 'SFProDisplay-Regular',
  },

  compatibilitySubText: {
    fontSize: 15,
    marginBottom: dgl * 0.005,
    color: Color.white,
    fontWeight: '400',
    fontFamily: 'SFProDisplay-Regular',
  },
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
  SubTitileTextNotifications: {
    fontSize: dgl * 0.015,
    // marginTop: SPACING,
    // color: Color.grey,
  },
  alignItemStyle: {alignItems: 'center'},
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
  justifyView: {justifyContent: 'space-between'},
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
    fontFamily: 'SFProDisplay-Regular',
    padding: SPACING,
  },
  homeView2: {flex: 1},
  smallText: {
    fontSize: 12,
    textAlign: 'center',
    padding: 22,
    fontFamily: 'SFProDisplay-Regular',
  },
  SkipText: {margin: 20, color: 'grey'},

  BottomSvgStyle: {bottom: 0, position: 'absolute', alignSelf: 'center'},
  buttonTextStyle: {textAlign: 'center', fontSize: 20},
  LinkText: {color: 'blue', textDecorationLine: 'underline'},
  EditText: {color: 'blue', fontSize: 16},
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
    backgroundColor: Color.white,
    marginLeft: 15,
    alignItems: 'center',
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
  input3: {
    height: 40,
    // width: '100%',
    color: Color.grey,
    borderColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // paddingHorizontal: SPACING,
    borderRadius: 5,
    margin: 10,
  },
  NumSignUpThemeStylle: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    alignItems: 'center',
  },

  //Custom
  LinearBotton: {
    width: '90%',
    borderRadius: 20,
    margin: SPACING * 2,
    padding: SPACING,
    alignSelf: 'center',
  },
  TextWhite: {
    textAlign: 'center',
    color: Color.shadedWhite,
    fontSize: 18,
  },
  TextWhiteS12: {
    textAlign: 'center',
    color: Color.shadedWhite,
    fontSize: 12,
  },
  viewToRender: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height / 3.5,
  },
  //Home
  text1: {fontSize: 20, marginLeft: 30},
  textBold: {fontSize: 20, fontWeight: 'bold'},
  textSemiBold: {fontSize: 15, fontWeight: 'bold', marginLeft: SPACING},
  width: width / 2,
  SemiBoldText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.shadedWhite,
    width: width / 3,
  },
  normalText1: {
    fontSize: 15,
    fontFamily: 'SFProDisplay-Regular',
    color: Color.shadedWhite,
  },
  traitsText: {
    marginBottom: 10,
    fontSize: 14,
    color: Color.shadedWhite,
    fontFamily: 'SFProDisplay-Regular',
  },
  TabTextView: {
    marginTop: 20,
    flexDirection: 'row',
    width: width / 2,
    justifyContent: 'space-between',
  },
  imageBgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
  },

  CustomimageBgView: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  imageBgViewCustom: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    right: 1,
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
    shadowColor: Color.grey,
    shadowOpacity: 0.5,
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
  signupButton: {
    width: dgl * 0.35,
    height: 45,
    alignSelf: 'center',
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    // alignSelf: 'flex-start',
    padding: SPACING,
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
    fontWeight: 'bold',
  },

  // Notifications
  MainBoxNotifications: {
    flexDirection: 'row',
    backgroundColor: Color.whiteOpacity,
    justifyContent: 'space-between',
    borderRadius: SPACING,
    width: width - 30,
    marginBottom: SPACING,
  },
  notificationsIndication: {
    width: dgl * 0.01,
    height: dgl * 0.01,
    backgroundColor: Color.regularViolet,
    paddingLeft: SPACING,
    alignSelf: 'center',
    borderRadius: 20,
    marginLeft: SPACING,
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
  ColoumBoxNotification: {
    padding: SPACING,
    width: width - 50,
    flexDirection: 'column',
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: dgl * 0.38,
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
    // backgroundColor: 'red',
    marginTop: 80,
    justifyContent: 'space-around',
  },
  compatibilityContainer: {
    height: dgl * 0.09,
    width: dgl * 0.09,
    justifyContent: 'center',
    borderRadius: dgl * 0.009,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
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
    marginLeft: dgl * 0.02,
    top: dgl * 0.25,
  },
  compatibilityButon: {
    padding: dgl * 0.02,
    backgroundColor: Color.white,
    borderRadius: dgl * 0.05,
  },
  svgBox: {flex: 1, flexDirection: 'row'},
  filterTextStyle: {color: '#fff', width: dgl * 0.06},
  IntrestBox: {
    padding: SPACING,
    width: dgl * 0.15,
    height: dgl * 0.15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderWidth: dgl * 0.002,
    borderColor: '#FFFFFF',
    margin: 20,
    shadowColor: Color.grey,
    shadowOpacity: 0.5,
  },
  intrstOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    justifyContent: 'center',
    paddingLeft: SPACING,
  },
  customFooter: {
    // backgroundColor: 'red',
    width: width,
    paddingHorizontal: dgl * 0.05,
    paddingVertical: dgl * 0.02,
    // flex: 1,
  },
  AlignCustomFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radiostyle: {
    borderColor: Color.primaryBlue,
    borderWidth: 1,
    padding: 2,
    marginVertical: 10,
    borderRadius: 20,
    // marginLeft: 10,
  },

  MainBox: {
    flexDirection: 'row',
    backgroundColor: Color.whiteOpacity,
    borderRadius: SPACING,
    margin: SPACING,
  },
  rowBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Color.white,
    // width: width /,
  },
  rowBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING,

    // width: dgl * 0.38,
  },
  // SubTitileText: {
  //   fontSize: dgl * 0.015,
  //   paddingLeft: SPACING,
  //   color: Color.grey,
  // },
  ColoumBox: {
    margin: SPACING,
    width: dgl * 0.38,
    // flexDirection: 'column',
  },
  BoxTitle: {
    fontSize: 18,
    paddingLeft: SPACING,
    color: Color.shadedWhite,
    fontWeight: '700',
  },
  SubTitileText: {
    fontSize: dgl * 0.018,
    padding: SPACING,
    color: Color.grey,
  },
  SubTitle2: {
    fontSize: dgl * 0.011,
    padding: SPACING,
    color: Color.lightBlue,
    // fontFamily: '',
  },
  box: {
    width: dgl * 0.2,
    height: dgl * 0.01,
    marginVertical: 20,
    // borderColor: '#000000',
    borderRadius: 7.0,
    backgroundColor: '#08407E',
  },
  viewMore: {color: Color.shadedWhite, fontSize: 15},
  ProfileText: {
    fontSize: 18,
    color: Color.white,
    // fontFamily: 'SFProDisplay-Regular',
    fontWeight: '700',
  },
  TextAlign: {textAlign: 'center'},
  ProfileSubText: {
    fontSize: 13,
    // fontFamily: 'SFProDisplay-Regular',
    color: Color.white,
    fontWeight: '300',
  },
  //profile
  LinearProfile: {
    width: width,
    height: dgl * 0.15,
    marginTop: dgl * 0.35,
    alignItems: 'center',
    overflow: 'visible',
  },
  ProfileView: {
    width: dgl * 0.15,
    height: dgl * 0.15,
    borderRadius: dgl * 0.15,
    position: 'absolute',
    backgroundColor: '#FFFFFFD9',
    alignItems: 'center',
    bottom: dgl * 0.07,
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: Color.shadedWhite,
  },
  ProfileAvatar: {
    width: dgl * 0.11,
    height: dgl * 0.11,
  },
  ProfileView2: {
    alignItems: 'center',
    marginBottom: 30,
    top: 90,
  },
  ProfileView3: {
    flex: 1,
    width: '100%',
  },
  viewMore1: {
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between',
    paddingBottom: SPACING * 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: dgl * 0.1,
  },
  profileContainer: {
    borderRadius: 20,
    borderBottomWidth: 3,
    backgroundColor: Color.white,
    borderBottomColor: Color.white,
    shadowColor: Color.black,
    shadowOpacity: 1,
  },
  tabsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignSelf: 'center',
    height: '100%',
    marginTop: 80,
    width: width - 20,
  },
  tabsView2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
  },
  tabLabel: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  animatedBorder: {
    height: 4,
    width: 110,
    marginTop: 4,
    backgroundColor: Color.shadedWhite,
    borderRadius: 20,
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: Color.shadedWhite,
    borderColor: Color.shadedWhite,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  tables: {
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.shadedWhite,
    marginBottom: 10,
    marginTop: 30,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  tableContainer: {flex: 1, padding: 10, paddingTop: 30},
  border: {
    borderWidth: 1,
    borderColor: Color.whiteOpacity,
    borderTopEndRadius: 20,
  },
  head: {
    height: 40,
    // borderTopEndRadius: 30,
    // borderTopStartRadius: 30,
  },
  headText: {textAlign: 'center', fontWeight: 'bold', color: 'white'},
  cellText: {textAlign: 'center', color: 'white'},
  rows: {height: 30},
});

export default styles;
