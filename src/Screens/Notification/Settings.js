import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles, {_spacing} from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {ArrowLeft} from '../../Components/SvgComponent';
const dgl = screenDiagonal();

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const ItemList = props => {
    const {title, sub, onValueChanged, enabled} = props;
    return (
      <View style={styles.ItemListView}>
        <View style={{width: width / 1.9}}>
          <Text style={{fontWeight: '600'}}>{title}</Text>
          <Text>{sub}</Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#767577', true: Color.regularViolet}}
            thumbColor={enabled ? Color.white : '#f4f3f4'}
            ios_backgroundColor="#EDF0F1"
            onValueChange={() => onValueChanged}
            enabled={enabled}
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
      <View style={{backgroundColor: Color.shadedWhite, padding: _spacing}}>
        <Text style={{fontWeight: '300'}}>NOTIFICATIONS</Text>
      </View>
      <ScrollView>
        <ItemList
          title={'Horoscope'}
          sub={'Get notified of the horoscope'}
          onValueChanged={toggleSwitch}
          value={isEnabled}
        />
        <ItemList
          title={'push Notification'}
          sub={'Receive notifications of Horoscope and Payment Details'}
        />
        <ItemList
          title={'Payment Details'}
          sub={'Get notified at the end of the subscription plan'}
        />
        <SetTimeWidget
          title={'Set Time'}
          sub={'Set time for daily horoscope'}
          navigate={() => navigation.navigate('DateTimeScreen')}
        />
        <ItemList
          title={'Emails'}
          sub={
            'Receive Promotions / Campaigns Get promotions & campaigns through email'
          }
        />
        <ItemList
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
