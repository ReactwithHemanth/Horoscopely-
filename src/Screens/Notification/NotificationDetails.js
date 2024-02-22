import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/styles';
import {ImageBackgroundView} from '../../Components/CustomComponents';

const NotificationDetails = ({navigation, route}) => {
  const [DetailedView, setDetailedView] = useState();
  useEffect(() => {
    const data = route?.params;
    setDetailedView(data?.params);
  }, []);
  return (
    <ImageBackgroundView>
      <TouchableOpacity style={styles.MainBoxNotifications}>
        <View style={styles.notificationsIndication} />
        <View style={styles.ColoumBoxNotification}>
          <View style={styles.rowBox1}>
            <Text style={styles.titleText2}>{DetailedView?.Title}</Text>
            <Text style={styles.SubTitileTextNotifications}>
              {DetailedView?.updated}
            </Text>
          </View>
          <View style={styles.padded}>
            <Text style={styles.SubTitileTextNotifications}>
              {DetailedView?.desc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackgroundView>
  );
};

export default NotificationDetails;
