import {
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import styles, {SPACING} from '../Styles/styles';
import {HIcon, SignUpTheme3} from './SvgComponent';
import {height, screenDiagonal, width} from '../Utils/helperFunctions';
import Animated from 'react-native-reanimated';
const dgl = screenDiagonal();
export const LinearCommonButton = props => {
  return (
    <LinearGradient
      colors={['#32A0EE', '#9713C6']}
      start={{x: 0, y: 0}}
      style={styles.LinearBotton}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.TextWhite}>{props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export const FirstTheme = ({item}) => {
  switch (item) {
    case 'topSvg':
      return (
        <View style={styles.NumSignUpThemeStylle}>
          <SignUpTheme3 />
        </View>
      );
    case 'topImage':
      return (
        <View>
          <Image
            style={{width: dgl * 0.42}}
            resizeMode="cover"
            source={require('../Assets/OnBoarding/Component_16_1.png')}
          />
        </View>
      );
    default:
      return null;
  }
};

export const BottomImage = props => {
  const [show, setshow] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyBoardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyBoardDidHide);

    return () => {
      Keyboard.addListener('keyboardDidShow', _keyBoardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyBoardDidHide);
    };
  }, []);

  const _keyBoardDidShow = () => setshow(true);
  const _keyBoardDidHide = () => setshow(false);

  return <ViewtoRender show={show} src={props.image} />;
};

const ViewtoRender = props => {
  return (
    props.show && (
      <Image
        resizeMode="contain"
        style={styles.viewToRender}
        source={require('../Assets/SignUp_Mobile_number/bottomDesign.png')}
      />
    )
  );
};

export const CustomTextInput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
}) => {
  const [text, setText] = useState('');

  const _handleChangeText = inputText => {
    setText(inputText);
    if (onChangeText) {
      onChangeText(inputText);
    }
  };

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.input2}
        placeholder={placeholder}
        value={text}
        onChangeText={_handleChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const PickerComponent = props => {
  return (
    <View style={styles.cardSpace}>
      <Text style={styles.titleText}>Gender</Text>
      {/* <TextInput placeholder="Gender" style={styles.input} /> */}
      <View style={styles.input}>
        <Picker
          key={index}
          selectedValue={selectedGender}
          onValueChange={handleChange}>
          {genderArray.map(gender => (
            <Picker.Item
              key={gender.value}
              label={gender.label}
              value={gender.value}
            />
          ))}
        </Picker>
      </View>
      <LinearCommonButton
        title={'Submit'}
        onPress={() => {
          if (index === data.length - 1) {
            return;
          }

          setindex(index + 1);
        }}
      />
    </View>
  );
};

export const LoadingView = props => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setisLoading(false);
    });
    return () => clearTimeout(Timeout);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../Assets/loading/bgimage.png')}
        style={{width: width, height: height + 30, position: 'absolute'}}
        resizeMode="cover"
      />
      <Image
        source={require('../Assets/loading/circleBg.png')}
        style={{width: width / 2, height: height + 30, alignSelf: 'center'}}
        resizeMode="contain"
      />

      <View style={styles.svgCenter}>
        <HIcon width={50} height={50} />
      </View>

      <View style={styles.loading}>
        <Text style={{fontSize: 20, color: '#FFF'}}>Loading...</Text>
      </View>
      {/* <Text style={styles.text1}>Welcome {user?.email}</Text>
    <Text onPress={handleSignOut} style={styles.text1}>
      SignOut {user?.email}
    </Text> */}
    </View>
  );
};

export const ImageBackgroundView = props => {
  const {style, children} = props;
  return (
    <ImageBackground
      source={require('../Assets/Home/Component1.png')}
      style={styles.imageBgView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          style ?? {alignItems: 'center', padding: SPACING}
        }>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export const WelcomeText = props => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTextSub}>{props.SubTitle}</Text>
      <Text style={styles.welcomeTitleText}>{props.title}</Text>
    </View>
  );
};

// const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
// const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const zodiacData = ['pices', 'sprites', 'Cancer'];
export const Backdrop = ({movies, scrollX}) => {
  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={zodiacData}
        keyExtractor={item => item.key + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}>
              <Image
                source={{uri: item.backdrop}}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export const LogoTitle = () => {
  return <Image source={require('../Assets/Home/LogoHeader1.png')} />;
};
