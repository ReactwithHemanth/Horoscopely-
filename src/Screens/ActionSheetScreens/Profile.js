import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {height, screenDiagonal, width} from '../../Utils/helperFunctions';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../Utils/Color';
import {
  AriesSvg,
  ArrowLeft,
  CapricornSvg,
  ChevronSvg,
  FixedBoxSvg,
  Intrest1,
  WindSvg,
} from '../../Components/SvgComponent';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {MainContext} from '../../Confg/Context';
import {RnGet} from '../../hooks/RnstoreHook';
import {Table, Row, Rows} from 'react-native-table-component';
const dgl = screenDiagonal();
const menuList = [
  {id: 0, sub: 'Sun sign', zodiac: 'Capricorn'},
  {id: 1, sub: 'Zodiac sign', zodiac: 'Aries'},
  {id: 2, sub: 'Modality', zodiac: 'Fixed'},
  {id: 3, sub: 'Moon sign', zodiac: 'Leo'},
  {id: 4, sub: 'Element', zodiac: 'Air'},
  {id: 5, sub: 'Ascedant', zodiac: 'Capricorn'},
];
const TAB_WIDTH = 120;
const DOWN_VALUE = 400;
const TABS = ['Planets', 'Houses', 'Traits'];
const Profile = () => {
  const [ToggleView, setToggleView] = useState(false);
  const [Tabs, setTabs] = useState('Planets');
  const [Result, setResult] = useState([]);
  const offset = useSharedValue(-TAB_WIDTH);
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  // const AnimatedBgImage = Animated.createAnimatedComponent(ImageBackground);
  const AnimHight = useSharedValue(height);
  useEffect(() => {
    CheckLaunchedFirst();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setFooterVisible(false);
    }, []),
  );

  const getIcon = icon => {
    switch (icon.zodiac) {
      case 'Capricorn':
        return <CapricornSvg />;
      case 'Aries':
        return <AriesSvg />;
      case 'Fixed':
        return <FixedBoxSvg />;
      case 'Leo':
        return <ChevronSvg />;
      case 'Air':
        return <WindSvg />;
      case 'Leo':
        return <ChevronSvg />;
    }
  };
  //First launched && check userdata is already stored
  const CheckLaunchedFirst = async () => {
    const user = await RnGet('userData');
    setResult(user);
  };

  const HandlePress = () => {
    setToggleView(!ToggleView);

    AnimHight.value = ToggleView
      ? withSpring(height)
      : withSpring(AnimHight.value + DOWN_VALUE);
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  const HandleTabs = tab => {
    setTabs(tab);
    const newOffset = (() => {
      switch (tab) {
        case 'Planets':
          return -TAB_WIDTH;
        case 'Houses':
          return 0;
        case 'Traits':
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();
    offset.value = withTiming(newOffset);
  };

  const HandleTabView = tab => {
    switch (tab) {
      case 'Planets':
        return (
          <View
            style={{
              // backgroundColor: 'red',
              height: height / 2,
              width: width - 20,
            }}>
            <PlanetTables />
          </View>
        );
      case 'Houses':
        return (
          <View
            style={{
              height: height / 2,
              width: width,
            }}>
            <HouseTables />
          </View>
        );
      case 'Traits':
        return (
          <View
            style={{
              height: height / 2,
              width: width,
              padding: SPACING * 2,
            }}>
            <Text style={styles.traitsText}>
              You may have had trouble communicating in early life. Perhaps you
              suffer from feelings of inadequacy. You overcome these feelings
              through sheer necessity, for you have determination in achieving
              your goals and purposes in life. You will have strong likes and
              dislikes, and can be very reserved and dignified, though when
              vexed you are apt to be sharp and sarcastic if not actually cruel.
              Avoid pride, cultivate sympathy and endeavour to see things from
              others standpoints as well as your own.
            </Text>
            <Text style={styles.traitsText}>
              You will have strong likes and dislikes, and can be very reserved
              and dignified, though when vexed you are apt to be sharp and
              sarcastic if not actually cruel. Avoid pride, cultivate sympathy
              and endeavour to see things from others standpoints as well as
              your own.
            </Text>
            <View style={styles.TabTextView}>
              <Text style={styles.SemiBoldText1}>Spiritual lesson </Text>
              <Text style={styles.normalText1}>: Sociability (lighten up)</Text>
            </View>
            <View style={styles.TabTextView}>
              <Text style={styles.SemiBoldText1}>key quality</Text>
              <Text style={styles.normalText1}>: We think</Text>
            </View>
          </View>
        );
      default:
        return (
          <View
            style={{
              backgroundColor: 'red',
              height: height / 2,
              width: width,
            }}></View>
        );
    }
  };

  const PlanetTables = () => {
    const planetHead = ['Name', 'Deg', 'Sign', 'House'];
    const planetHouse = ['House', 'Sign', 'Deg'];
    const tableData = [
      ['Sun', '54.1', 'Capricorn', '10'],
      ['Moon', '54.1', 'sagittarius', '12'],
      ['Mercury', '54.1', 'Aries', '1'],
      ['Venus', '54.1', 'Leo', '2'],
      ['Mars', '24.1', 'Capricorn', '3'],
      ['Jupiter', '24.1', 'sagittarius', '4'],
      ['Saturn', '24.1', 'Aries', '5'],
      ['Uranus', '24.1', 'Leo', '6'],
      ['Neptune', '24.1', 'Aries', '7'],
      ['Pluto', '54.1', 'Aries', '8'],
    ];
    return (
      <View style={styles.tableContainer}>
        <Table borderStyle={styles.border}>
          <Row
            data={planetHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={tableData}
            style={styles.rows}
            textStyle={styles.cellText}
          />
        </Table>
      </View>
    );
  };
  const HouseTables = () => {
    const planetHouse = ['House', 'Sign', 'Deg'];
    const tableData = [
      ['10', 'Capricorn', '54.1'],
      ['12', 'sagittarius', '54.1'],
      ['1', 'Aries', '54.1'],
      ['2', 'Leo', '54.1'],
      ['3', 'Capricorn', '24.1'],
      ['4', 'sagittarius', '24.1'],
      ['5', 'Aries', '24.1'],
      ['6', 'Leo', '24.1'],
      ['7', 'Aries', '24.1'],
      ['8', 'Leo', '54.1'],
    ];
    return (
      <View style={styles.tableContainer}>
        <Table borderStyle={styles.border}>
          <Row
            data={planetHouse}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={tableData}
            style={styles.rows}
            textStyle={styles.cellText}
          />
        </Table>
      </View>
    );
  };
  const AnimatedTabs = () => {
    return (
      <View style={styles.tabsView}>
        <LinearGradient
          style={styles.tabsView2}
          colors={['#2272FCFC', '#4BE1DCFC']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          {TABS.map((tab, i) => {
            return (
              <Pressable
                key={tab}
                style={i !== TABS.length - 1 ? styles.tab : styles.tab}
                onPress={() => {
                  HandleTabs(tab);
                  // HandleTabView(tab);
                }}>
                <Text
                  style={[
                    styles.TextAlign,
                    styles.textSemiBold,
                    {color: Color.shadedWhite},
                  ]}>
                  {tab}
                </Text>
              </Pressable>
            );
          })}
        </LinearGradient>
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
        {/* <View
          style={{
            backgroundColor: 'red',
            height: height / 2,
            width: width,
          }}></View> */}
        {HandleTabView(Tabs)}
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animated.View style={styles.profileContainer}>
        <Animated.View
          style={{
            overflow: 'hidden',
            borderRadius: 20,
            height: AnimHight,
          }}>
          <Animated.Image
            source={require('../../Assets/Profile/ComponentBg.png')}
            resizeMode="cover"
            style={[
              styles.CustomimageBgView,
              {
                height: AnimHight,
              },
            ]}
          />
          <LinearGradient
            colors={['rgba(34, 114, 252, 0.7)', 'rgba(75, 225, 220, 0.7)']}
            start={{x: 0, y: 0}}
            style={styles.LinearProfile}>
            <View style={styles.ProfileView}>
              <Image
                source={require('../../Assets/ariesAvatar/aries_2.png')}
                style={styles.ProfileAvatar}
                resizeMode="contain"
              />
            </View>
            <View style={styles.ProfileView2}>
              <Text style={styles.ProfileText}> John Luther</Text>
              <Text style={styles.ProfileSubText}>
                January 1, 1989 . 09:20 PM
              </Text>
            </View>
          </LinearGradient>
          <FlatList
            data={menuList}
            numColumns={3}
            style={styles.ProfileView3}
            renderItem={({item, index}) => {
              return (
                <View style={{margin: 30, alignItems: 'center'}}>
                  <TouchableOpacity>
                    {/* <CapricornSvg /> */}
                    {getIcon(item)}
                  </TouchableOpacity>
                  <Text style={styles.SubTitle2}>{item.sub}</Text>
                  <Text style={styles.TextWhiteS12}>{item.zodiac}</Text>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return <AnimatedTabs />;
            }}
          />
          <TouchableOpacity
            onPress={() => {
              HandlePress();
            }}
            style={styles.viewMore1}>
            <Text style={styles.viewMore}>View more</Text>
            <View
              style={{transform: [{rotate: ToggleView ? '180deg' : '0deg'}]}}>
              <ArrowLeft fill={Color.shadedWhite} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* papper View */}
      <ImageBackground
        source={require('../../Assets/ManageInterest/Component.png')}
        resizeMode="cover"
        style={styles.imageBgView}>
        <View style={[styles.CRow, styles.justifyView, styles.CWidth]}>
          <Text style={styles.textBold}>Basic details</Text>
          <Text style={styles.EditText}>Edit</Text>
        </View>
        <View style={{flex: 16, justifyContent: 'flex-start', width: '90%'}}>
          <View>
            <Text style={styles.textSemiBold}>Name</Text>
            <TextInput
              placeholder="Name"
              style={styles.input3}
              value={Result?.name}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Date of Birth</Text>
            <TextInput
              placeholder="Date of Birth"
              style={styles.input3}
              value={Result?.DOB}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Time of Birth</Text>
            <TextInput
              placeholder="Time of Birth"
              style={styles.input3}
              value={Result?.TOB}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Place of Birth</Text>
            <TextInput
              placeholder="Place of Birth"
              style={styles.input3}
              value={'Result'}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Email ID</Text>
            <TextInput
              placeholder="Email ID"
              style={styles.input3}
              value={Result?.email}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              style={styles.input3}
              value={Result?.number}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Birth Gender</Text>
            <TextInput
              placeholder="Birth Gender"
              style={styles.input3}
              value={Result?.gender}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Relationship Status</Text>
            <TextInput
              placeholder="Relationship Status"
              style={styles.input3}
              value={Result?.RelationShip}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={{paddingBottom: dgl * 0.03}} />
    </ScrollView>
  );
};

export default Profile;
