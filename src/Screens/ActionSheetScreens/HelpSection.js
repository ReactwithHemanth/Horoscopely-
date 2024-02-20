import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from '../../Styles/styles';
import {LoremIpsum} from '../../Utils/Dummy';
import {MainContext} from '../../Confg/Context';
import {RnGet} from '../../hooks/RnstoreHook';
import {Toast} from '../../Utils/helperFunctions';

const HelpSection = ({navigation}) => {
  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);
  const [result, setResult] = useState([]);
  useEffect(() => {
    setFooterVisible(false);
    CheckLaunchedFirst();
  }, []);

  const CheckLaunchedFirst = async () => {
    const user = await RnGet('userData');
    // setResult(user);
    if (user != undefined)
      Toast('Continue with User', 'You can continue with Previous User');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Componentcloud/ComponentCloud.png')}
          style={{width: 300, height: 230}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.helpContainer}>
        <View style={styles.ContainerF1}>
          <Text style={styles.helpDeskTitle}>Date of Birth</Text>
          <Text numberOfLines={2} style={styles.helpDesk}>
            {LoremIpsum}
          </Text>
        </View>
        <View style={styles.ContainerF1}>
          <Text style={styles.helpDeskTitle}>Time of Birth</Text>
          <Text numberOfLines={2} style={styles.helpDesk}>
            {LoremIpsum}
          </Text>
        </View>
        <View style={styles.ContainerF1}>
          <Text style={styles.helpDeskTitle}>Place of Birth</Text>
          <Text numberOfLines={2} style={styles.helpDesk}>
            {LoremIpsum}
          </Text>
        </View>
        <View style={styles.ContainerF1}>
          <Text style={styles.helpDeskTitle}>Birth Gender</Text>
          <Text numberOfLines={2} style={styles.helpDesk}>
            {LoremIpsum}
          </Text>
        </View>
        <View style={styles.ContainerF1}>
          <Text style={styles.helpDeskTitle}>Relationship Status</Text>
          <Text numberOfLines={2} style={styles.helpDesk}>
            {LoremIpsum}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.gotView}
        onPress={() => navigation.navigate('onBoarding')}>
        <Text style={styles.GotText}>Got it</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HelpSection;
