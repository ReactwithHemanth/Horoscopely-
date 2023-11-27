import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {width} from '../../Utils/helperFunctions';
import styles from '../../Styles/styles';
import {
  FirstTheme,
  LinearCommonButton,
} from '../../Components/CustomComponents';

export default function HomeScreen({navigation}) {
  const _spacing = 10;
  const data = [
    {id: '1', label: 'nameInput'},
    {id: '2', label: 'emailInput'},
    {id: '3', label: 'numberInput'},
    {id: '4', label: 'DOB'},
    {id: '5', label: 'POB'},
  ];
  const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
  };
  const ref = useRef();
  const [index, setindex] = useState(0);
  // const [viewPosition, setviewPosition] = useState(0.5);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 0.5 || 1 ? 0 : _spacing,
      // viewPosition,
    });
  }, [index]);
  const WelcomeText = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
          marginLeft: _spacing * 2,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'left',
          }}>
          Welcome User
        </Text>
        <Text style={{fontSize: 25, padding: 5, fontWeight: 'bold'}}>
          Lets ge started
        </Text>
        {/* <Text style={styles.titleText}>Email</Text> */}
      </View>
    );
  };
  const RenderItem = ({item, idx}) => {
    switch (item.label) {
      case 'nameInput':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Name</Text>

            <TextInput placeholder="name" style={styles.input} />
            <LinearCommonButton
              title={'Continue'}
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }

                setindex(index + 1);
              }}
            />
          </View>
        );
      case 'emailInput':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Email</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <LinearCommonButton
              title={'Continue'}
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }
                setindex(index + 1);
              }}
            />
          </View>
        );
      case 'numberInput':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Phone Number</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <LinearCommonButton
              title={'Continue'}
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }
                setindex(index + 1);
              }}
            />
          </View>
        );
      case 'DOB':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Date of birth</Text>
            <TextInput placeholder="Email" style={styles.input} />
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
      case 'TOB':
        return (
          <View style={styles.cardSpace}>
            <Text style={styles.titleText}>Place of birth</Text>
            <TextInput placeholder="Email" style={styles.input} />
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
      default:
        return null;
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FirstTheme item={'topImage'} />
      <WelcomeText />
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={{flexGrow: 0}}
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{paddingLeft: _spacing}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return <RenderItem item={item} />;
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: _spacing * 2,
          width: width,
          padding: _spacing * 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{padding: _spacing}}>
          <Text>
            {index}/{data.length}
          </Text>
        </View>
        <View
          style={{
            padding: _spacing,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {data.map((item, idx) => {
            return (
              <TouchableOpacity
                onPress={() => setindex(0)}
                style={{
                  padding: _spacing / 2,
                  margin: _spacing / 2,
                  borderRadius: _spacing,
                  backgroundColor: idx == index ? '#328AEE' : '#8EBDF3',
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
const styles1 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});
