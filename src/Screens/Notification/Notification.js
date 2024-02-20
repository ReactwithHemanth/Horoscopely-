import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../../Styles/styles';
import {ImageBackgroundView} from '../../Components/CustomComponents';

const Notification = props => {
  const ArrayList = [
    {
      id: 0,
      Title: 'Horoscope',
      updated: '3 minutes ago',
      desc: `Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Se malesuada ullamcorper`,
    },
    {
      id: 1,
      Title: 'Horoscope',
      updated: '4 minutes ago',
      desc: `Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Sed malesuada ullamcorper`,
    },
    {
      id: 1,
      Title: 'Horoscope',
      updated: '4 minutes ago',
      desc: `Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Sed malesuada ullamcorper`,
    },
  ];
  const ListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={styles.MainBoxNotifications}
        onPress={() => {
          props.navigation.navigate('NotificationDetails', {
            params: item,
          });
        }}>
        <View style={styles.notificationsIndication} />
        <View style={styles.ColoumBoxNotification}>
          <View style={styles.rowBox1}>
            <Text style={styles.titleText2}>{item.Title}</Text>
            <Text style={styles.SubTitileTextNotifications}>
              {item.updated}
            </Text>
          </View>
          <View style={styles.padded}>
            <Text style={styles.SubTitileTextNotifications}>{item.desc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackgroundView>
      {ArrayList.map((item, idx) => (
        <>
          <ListItem item={item} index={idx} />
        </>
      ))}
    </ImageBackgroundView>
  );
};

export default Notification;
