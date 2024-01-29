import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {ImageBackgroundView} from '../../Components/CustomComponents';
import {MakePaymentSvg} from '../../Components/SvgComponent';
import {Color} from '../../Utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/styles';
const dgl = screenDiagonal();

const MakePayment = () => {
  return (
    <ImageBackgroundView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.outerTitle}>Current plan</Text>
        <LinearGradient
          colors={['#2272FCFC', '#4BE1DCFC']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.LinearPaymentView}>
          <View style={styles.makePaymantView}>
            <View>
              <Text style={styles.currentPlanText}>Your Current plan</Text>
              <Text style={styles.amountText}>$11.99</Text>
              <Text style={styles.MontlyPlanText}>Monthly Plan</Text>
              {/* <Text>kshd</Text> */}
            </View>
            <MakePaymentSvg fill={Color.black} />
          </View>
          <View style={styles.ViewPlanButton}>
            <Text style={{color: Color.primaryBlue}}>View Plans</Text>
          </View>
        </LinearGradient>

        <Text style={styles.outerTitle}>Current plan</Text>
        <View style={styles.valueBox}>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: $11.99 monthly plan</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: $11.99 monthly plan</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: 21 Jan 2021</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: 21 Jan 2021</Text>
          </View>
        </View>
        <View style={styles.valueBox}>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: $11.99 monthly plan</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: $11.99 monthly plan</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: 21 Jan 2021</Text>
          </View>
          <View style={[styles.padded, styles.valueStyeMain]}>
            <Text style={styles.valueText}>kshdf</Text>
            <Text style={styles.valueStye}>: 21 Jan 2021</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackgroundView>
  );
};

export default MakePayment;
