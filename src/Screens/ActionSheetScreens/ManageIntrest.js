import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {MainContext} from '../../Confg/Context';
import styles, {SPACING} from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {
  Intrest1,
  Intrest2,
  Intrest3,
  Intrest4,
  Intrest5,
  Intrest6,
} from '../../Components/SvgComponent';
import LinearGradient from 'react-native-linear-gradient';
import {LinearCommonButton} from '../../Components/CustomComponents';
import {getIcon} from '../../Components/GetIcon';
import {Color} from '../../Utils/Color';
import {useFocusEffect} from '@react-navigation/native';
const dgl = screenDiagonal();
const ManageIntrest = () => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  useFocusEffect(
    useCallback(() => {
      setFooterVisible(false);
    }, []),
  );

  const data = [
    {id: 0, title: 'Profession', value: 'Profession'},
    {id: 1, title: 'Personal Life', value: 'Personal'},
    {id: 2, title: 'Travel', value: 'Travel'},
    {id: 3, title: 'Health', value: 'Health'},
    {id: 4, title: 'Luck', value: 'Luck'},
    {id: 5, title: 'Emotion', value: 'Emotion'},
  ];
  const [selectedItem, setselectedItem] = useState([]);

  const selectItems = item => {
    if (selectedItem.includes(item.id)) {
      const newList = selectedItem.filter(listItem => listItem !== item.id);
      return setselectedItem([...newList]);
    }
    setselectedItem([...selectedItem, item.id]);
  };

  return (
    <>
      <ImageBackground
        source={require('../../Assets/ManageInterest/Component.png')}
        resizeMode="cover"
        style={styles.imageBgView}>
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title}
          style={styles.manageIntrest}
          renderItem={({item, index}) => (
            <View
              style={{
                alignItems: 'center',
                margin: 10,
              }}>
              <Pressable onPress={() => selectItems(item)}>
                <LinearGradient
                  colors={
                    selectedItem.includes(item.id)
                      ? ['#B55DF8', '#74D2F6']
                      : ['#F2F2F2', '#F2F2F2']
                  }
                  style={styles.IntrestBox}>
                  {/* <Intrest1 /> */}
                  {getIcon(item)}
                </LinearGradient>
              </Pressable>
              <Text>{item.title}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{paddingBottom: dgl * 0.5}} />
          )}
        />
      </ImageBackground>
      <View style={styles.customFooter}>
        <View style={styles.AlignCustomFooter}>
          <Text style={{color: Color.grey}}>Reset</Text>
          <LinearCommonButton
            title={'Done'}
            style={{
              padding: SPACING,
              paddingHorizontal: 30,
              borderRadius: 40,
              width: '40%',
            }}
          />
        </View>
      </View>
    </>
  );
};
export default ManageIntrest;

// const styles = StyleSheet.create({});
