import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {width} from '../../Utils/helperFunctions';
import {Color} from '../../Utils/Color';
import styles from '../../Styles/styles';
import {LoremIpsum} from '../../Utils/Dummy';

const HelpSection = () => {
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
      <View style={styles.gotView}>
        <Text style={styles.GotText}>Got it</Text>
      </View>
    </SafeAreaView>
  );
};

export default HelpSection;
