import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import {CloseSvg} from '../../Components/SvgComponent';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {LinearCommonButton} from '../../Components/CustomComponents';
import {screenDiagonal} from '../../Utils/helperFunctions';
const dgl = screenDiagonal();

const ShowSubscriptionNext = props => {
  const [EnablePush, setEnablePush] = useState(true);
  const [CloseAdd, setCloseAdd] = useState(true);

  return (
    <View style={styles.subscriptionAd}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.CloseSvgView}>
        <CloseSvg fill={Color.shadedWhite} />
      </TouchableOpacity>
      <View style={styles.OrderedList}>
        <View style={{flex: 2, alignItems: 'center', marginBottom: 20}}>
          <Text style={{fontWeight: '800', color: 'cyan'}}>
            Free 7 Days Trial
          </Text>
          <Text style={{fontWeight: '500', color: Color.white}}>
            After that<Text style={{fontWeight: 'bold'}}> $9.99</Text> Weekly
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={[styles.normalText1, {color: Color.lightBlue}]}>
          No Commitment. Cancel Anytime
        </Text>
      </View>

      <View style={styles.swtichView}>
        <View>
          <Text style={styles.SemiBoldText1}>Trail Period</Text>
          <Text style={styles.normalText1}>
            Turn off to discover other plans
          </Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: Color.regularViolet}}
          thumbColor={Color.white}
          ios_backgroundColor="#EDF0F1"
          onValueChange={() => setEnablePush(!EnablePush)}
          value={EnablePush}
        />
      </View>
      <View style={{flex: 1}}>
        <LinearCommonButton
          title={'Submit'}
          width={dgl * 0.28}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <TouchableOpacity
          style={styles.LinearBotton}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.TextWhiteS12}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowSubscriptionNext;
