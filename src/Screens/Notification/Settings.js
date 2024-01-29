import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles, {SPACING} from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {ArrowLeft} from '../../Components/SvgComponent';
const dgl = screenDiagonal();

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [NotificationEnabled, setNotificationEnabled] = useState(false);
  const [PaymentNotify, setPaymentNotify] = useState(false);
  const [EmailNotify, setEmailNotify] = useState(false);
  const [smsNotify, setSmsNotify] = useState(false);

  const ItemList = props => {
    const {title, sub, onValueChanged, value} = props;
    const toggleSwitch = () => onValueChanged(previousState => !previousState);
    return (
      <View style={styles.ItemListView}>
        <View style={{width: width / 1.9}}>
          <Text style={{fontWeight: '600'}}>{title}</Text>
          <Text>{sub}</Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#767577', true: Color.regularViolet}}
            thumbColor={isEnabled ?? Color.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={value}
          />
        </View>
      </View>
    );
  };

  const SetTimeWidget = props => {
    const {title, sub, navigate, enabled} = props;
    return (
      <TouchableOpacity style={styles.ItemListView} onPress={navigate}>
        <View style={{width: width / 1.9}}>
          <Text style={{fontWeight: '600'}}>{title}</Text>
          <Text>{sub}</Text>
        </View>
        <View style={{transform: [{rotate: '270deg'}]}}>
          <ArrowLeft
            height={dgl * 0.025}
            width={dgl * 0.015}
            fill={Color.grey}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: ''}}>
      <View style={{backgroundColor: Color.shadedWhite, padding: SPACING}}>
        <Text style={{fontWeight: '300'}}>NOTIFICATIONS</Text>
      </View>
      <ScrollView>
        <ItemList
          title={'Horoscope'}
          sub={'Get notified of the horoscope'}
          onValueChanged={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
        <ItemList
          title={'push Notification'}
          sub={'Receive notifications of Horoscope and Payment Details'}
          onValueChanged={setNotificationEnabled}
          value={NotificationEnabled}
        />
        <ItemList
          onValueChanged={setPaymentNotify}
          value={PaymentNotify}
          title={'Payment Details'}
          sub={'Get notified at the end of the subscription plan'}
        />
        <SetTimeWidget
          title={'Set Time'}
          sub={'Set time for daily horoscope'}
          navigate={() => navigation.navigate('DateTimeScreen')}
        />
        <ItemList
          onValueChanged={setEmailNotify}
          value={EmailNotify}
          title={'Emails'}
          sub={
            'Receive Promotions / Campaigns Get promotions & campaigns through email'
          }
        />
        <ItemList
          onValueChanged={setSmsNotify}
          value={smsNotify}
          title={'SMS'}
          sub={
            'Receive Promotions / Campaigns Get promotions & campaigns through SMS'
          }
        />
      </ScrollView>
    </View>
  );
};

export default Settings;
