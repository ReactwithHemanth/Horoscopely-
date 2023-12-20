import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles, {_spacing} from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import {ImageBackgroundView} from '../../Components/CustomComponents';
import {Color} from '../../Utils/Color';
const dgl = screenDiagonal();

const Notification = () => {
  return (
    <ImageBackgroundView>
      <View style={styles.MainBox}>
        <View style={styles.notificationsContainer} />
        <View style={styles.ColoumBox}>
          <>
            <View style={styles.rowBox}>
              <Text style={styles.titleText2}>Horoscope</Text>
              <Text style={styles.SubTitileText}>3 mintute ago</Text>
            </View>
            <View>
              <Text style={styles.SubTitileText}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed
                malesuada ullamcorper
              </Text>
            </View>
          </>
        </View>
      </View>
    </ImageBackgroundView>
  );
};

export default Notification;
