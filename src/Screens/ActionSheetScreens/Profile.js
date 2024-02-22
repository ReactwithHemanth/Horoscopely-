import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {
  FormateDate,
  height,
  screenDiagonal,
  width,
} from '../../Utils/helperFunctions';
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
import {MainContext} from '../../Confg/Context';
import {RnGet} from '../../hooks/RnstoreHook';
import {Table, Row, Rows} from 'react-native-table-component';
import {DateInput} from './DatePicker';
import {TimePicker} from './TimePicker';
import {menuList, tableData, tableData2, traits} from '../../Utils/Dummy';
import {useFocusEffect} from '@react-navigation/native';
const dgl = screenDiagonal();

const TAB_WIDTH = 120;
const DOWN_VALUE = 400;
const TABS = ['Planets', 'Houses', 'Traits'];
const Profile = ({navigation}) => {
  const AnimHight = useSharedValue(height);

  const [Result, setResult] = useState([]);
  const [ToggleView, setToggleView] = useState(false);
  const [ToggleEdit, setToggleEdit] = useState(false);
  const [username, setUsername] = useState(Result?.name);
  const [email, setEmail] = useState(Result?.email);
  const [number, setNumber] = useState(Result?.email);
  const [Dob, setDob] = useState(Result?.DOB);
  const [Pob, setPob] = useState(Result?.POB);
  const [Tob, setTob] = useState(Result?.TOB);
  const [gender, setGender] = useState(Result?.gender);
  const [RelationShip, setRelationShip] = useState(Result?.relationShip);
  const [Tabs, setTabs] = useState('Planets');
  const offset = useSharedValue(-TAB_WIDTH);
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  useEffect(() => {
    CheckLaunchedFirst();
    setFooterVisible(false);
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
      : withSpring(AnimHight.value - DOWN_VALUE);
  };

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
            <Text style={styles.traitsText}>{traits}</Text>
            <Text style={styles.traitsText}>{traits}</Text>
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

    return (
      <View style={styles.tableContainer}>
        <Table borderStyle={styles.border}>
          <Row
            data={planetHead}
            style={styles.head}
            // textStyle={styles.headText}
            textStyle={{textAlign: 'center', color: 'white'}}
          />
          <Rows
            data={tableData2}
            style={styles.rows}
            textStyle={{textAlign: 'center', color: 'white'}}
          />
        </Table>
      </View>
    );
  };

  const HouseTables = () => {
    const planetHouse = ['House', 'Sign', 'Deg'];

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

        {HandleTabView(Tabs)}
      </View>
    );
  };

  const ProfileImageComponent = ({item}) => {
    return (
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
        {!ToggleView && (
          <View style={styles.ProfileView2}>
            <Text style={styles.ProfileText}>{item?.name}</Text>
            <Text style={styles.ProfileSubText}>{FormateDate(item?.DOB)}</Text>
          </View>
        )}
      </LinearGradient>
    );
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animated.View style={styles.profileContainer}>
        <Animated.View
          style={[
            styles.containerStyle2,
            {
              height: AnimHight,
            },
          ]}>
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
          <ProfileImageComponent item={Result} />
          <FlatList
            data={menuList}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            style={styles.ProfileView3}
            keyExtractor={item => item.sub}
            renderItem={({item, index}) => {
              return (
                <View style={styles.containerStyle}>
                  <TouchableOpacity>{getIcon(item)}</TouchableOpacity>
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
            <Text style={styles.viewMore}>
              {ToggleView ? 'View more' : 'View Less'}
            </Text>
            <View
              style={{transform: [{rotate: !ToggleView ? '180deg' : '0deg'}]}}>
              <ArrowLeft fill={Color.shadedWhite} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      <ImageBackground
        source={require('../../Assets/ManageInterest/Component.png')}
        resizeMode="cover"
        style={styles.imageBgView}>
        <View style={[styles.CRow, styles.justifyView, styles.CWidth]}>
          <Text style={styles.textBold}>Basic details</Text>
          <Text
            onPress={() => setToggleEdit(!ToggleEdit)}
            style={styles.EditText}>
            Edit
          </Text>
        </View>
        <View style={{flex: 16, justifyContent: 'flex-start', width: '90%'}}>
          <View>
            <Text style={styles.textSemiBold}>Name</Text>
            <TextInput
              placeholder="Name"
              onChangeText={text => setUsername(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={username}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Date of Birth</Text>
            {ToggleEdit ? (
              <TextInput
                placeholder="Date of Birth"
                onChangeText={text => setDob(text)}
                style={ToggleEdit ? styles.Editinput3 : styles.input3}
                value={FormateDate(Dob)}
              />
            ) : (
              <DateInput dateTime={Result?.DOB} />
            )}
          </View>
          <View>
            <Text style={styles.textSemiBold}>Time of Birth</Text>
            {ToggleEdit ? (
              <TextInput
                placeholder="Time of Birth"
                onChangeText={text => setTob(text)}
                style={ToggleEdit ? styles.Editinput3 : styles.input3}
                value={FormateDate(Result?.TOB)}
              />
            ) : (
              <TimePicker dateTime={Result?.TOB} />
            )}
          </View>
          <View>
            <Text style={styles.textSemiBold}>Place of Birth</Text>
            <TextInput
              placeholder="Place of Birth"
              onChangeText={text => setPob(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={Result?.POB}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Email ID</Text>
            <TextInput
              placeholder="Email ID"
              onChangeText={text => setEmail(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={Result?.email}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              onChangeText={text => setNumber(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={Result?.number}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Birth Gender</Text>
            <TextInput
              placeholder="Birth Gender"
              onChangeText={text => setGender(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={Result?.gender}
            />
          </View>
          <View>
            <Text style={styles.textSemiBold}>Relationship Status</Text>
            <TextInput
              placeholder="Relationship Status"
              onChangeText={text => setRelationShip(text)}
              style={ToggleEdit ? styles.Editinput3 : styles.input3}
              value={Result?.relationShip}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={{paddingBottom: dgl * 0.03}} />
    </ScrollView>
  );
};

export default Profile;
