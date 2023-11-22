import {
  View,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Firebase_app} from '../../Confg/Firebase';
import styles from '../../Styles/styles';
import {
  BottomImage,
  FirstTheme,
  LinearCommonButton,
  SecondTheme,
} from '../../Components/CustomComponents';
import {
  width as PAGE_WIDTH,
  height as PAGE_HEIGHT,
} from '../../Utils/helperFunctions';

const auth = getAuth(Firebase_app);
const data = [
  {id: '1', name: 'Name'},
  {id: '2', name: 'Email'},
  {id: '3', name: 'Date Of Birth'},
  {id: '4', name: 'Time Of Birth'},
  {id: '5', name: 'Place of birth'},
];
const OnBoarding = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const _spacing = 10;
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  const renderItem = ({item, idx}) => {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'lightblue',
          width: PAGE_WIDTH,
          padding: _spacing,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>
          {item?.name}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>
          {item.name}
        </Text>
        <TextInput style={styles.input} />
        <LinearCommonButton
          title="Continue"
          onPress={() => {
            if (index === 0 || index === data.length - 1) return;

            setIndex(index + 1);
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SecondTheme />
      {/* <View style={{flex: 1, alignItem: 'center', justifyContent: 'center'}}>
        <FlatList
          ref={ref}
          initialScrollIndex={index}
          data={data}
          style={{flexGrow: 0}}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
        />
      </View> */}
    </View>
  );
};

export default OnBoarding;
