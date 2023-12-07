import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/styles';
import {HIcon, SignUpTheme3} from './SvgComponent';
import {height, width} from '../Utils/helperFunctions';

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
            style={{width: 400}}
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
