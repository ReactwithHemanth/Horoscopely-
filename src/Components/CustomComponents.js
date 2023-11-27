import {
  Dimensions,
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
import {SignUpTheme3} from './SvgComponent';

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
        <View style={styles.NumSignUpThemeStylle}>
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

// export const SecondTheme = () => {
//   return (
//     <View>
//       <Image
//         style={{width: 400}}
//         resizeMode="cover"
//         source={require('../Assets/OnBoarding/Component_16_1.png')}
//       />
//     </View>
//   );
// };

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
  // const {width, height} = Dimensions.get('window');

  return props.show ? (
    <Image
      resizeMode="contain"
      style={styles.viewToRender}
      source={require('../Assets/SignUp_Mobile_number/bottomDesign.png')}
    />
  ) : (
    <View />
  );
};

export const CustomTextInput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
}) => {
  const [text, setText] = useState('');

  const handleChangeText = inputText => {
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
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
