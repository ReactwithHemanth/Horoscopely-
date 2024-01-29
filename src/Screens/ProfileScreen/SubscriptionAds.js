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

const ShowSubscriptionAd = props => {
  const [EnablePush, setEnablePush] = useState(true);
  const [CloseAdd, setCloseAdd] = useState(true);

  return (
    <View style={styles.subscriptionAd}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.CloseSvgView}>
        <CloseSvg fill={Color.shadedWhite} />
      </TouchableOpacity>
      <View style={styles.subscriptionContainer}>
        <Text style={{fontWeight: '800', color: 'cyan'}}>
          Here is what you will get
        </Text>
      </View>
      <View style={styles.OrderedList}>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only
          </Text>
        </View>
        <View style={styles.DotView}>
          <View style={[styles.dotWhite, styles.dotText]} />
          <Text style={[styles.dotText, styles.customDot]}>
            Acces to limited content only height: '{' '}
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
      <View style={[styles.modelOpcityBox, styles.modelViewAlign]}>
        <Text style={styles.SemiBoldTextfw}>$49.99/yearly ($4.17/month)</Text>
        <Text style={styles.normalText1}>Cancel Anytime</Text>
      </View>
      <LinearGradient
        colors={['#2272FCFC', '#4BE1DCFC']}
        start={{x: 0, y: 1.5}}
        end={{x: 1, y: 1.5}}
        style={[styles.flex4Container, styles.modelViewAlign]}>
        <Text style={styles.SemiBoldText1}>$49.99/yearly</Text>
        <Text style={styles.normalText1}>Cancel Anytime</Text>
      </LinearGradient>
      <View style={styles.swtichView}>
        <Text style={styles.normalText1}>Not Sure yet? Enable free trail.</Text>
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
          title={'Continue'}
          width={dgl * 0.28}
          onPress={() => {
            props.navigation.navigate('ShowSubscriptionNext');
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

export default ShowSubscriptionAd;
