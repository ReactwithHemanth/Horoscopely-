import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Styles/styles';
import {ImageBackgroundView} from '../../Components/CustomComponents';

const Notification = () => {
  const ArrayList = [1, 2, 3, 4, 5];
  const ListItem = () => {
    return (
      <View style={styles.MainBoxNotifications}>
        <View style={styles.notificationsIndication} />
        <View style={styles.ColoumBoxNotification}>
          <View style={styles.rowBox1}>
            <Text style={styles.titleText2}>Horoscope</Text>
            <Text style={styles.SubTitileTextNotifications}>3 mintute ago</Text>
          </View>
          <View style={styles.padded}>
            <Text style={styles.SubTitileTextNotifications}>
              Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Sed
              malesuada ullamcorper
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ImageBackgroundView>
      {ArrayList.map(() => (
        <>
          <ListItem />
        </>
      ))}
    </ImageBackgroundView>
  );
};

export default Notification;
