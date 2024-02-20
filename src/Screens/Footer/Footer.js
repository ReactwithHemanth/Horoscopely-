import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from '../../Styles/styles';
import {screenDiagonal} from '../../Utils/helperFunctions';
import {Image} from 'react-native-svg';
import {ActionSheetView} from '../../Components/ActionSheet';
import {MainContext} from '../../Confg/Context';
import {getIcon} from '../../Components/GetIcon';
import {FooterItem} from '../../Utils/Dummy';

const dgl = screenDiagonal();

const Footer = props => {
  const {state, descriptors, navigation} = props;
  const actionSheetRef = useRef(null);
  const [active, setActive] = useState(0);

  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  const handleShowActionSheet = async () => {
    try {
      actionSheetRef.current?.show();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const handleActionDown = async () => {
    try {
      actionSheetRef.current?.hide();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const ItemRender = ({value}) => {
    const _navigate = value => {
      if (value == 'More') {
        handleShowActionSheet();
      } else {
        setActive(value);
        navigation.navigate(value);
      }
    };

    return (
      <TouchableOpacity
        key={value.id}
        style={styles.footerButton}
        onPress={() => _navigate(value.value)}>
        {getIcon(value, active)}
        <Text style={styles.buttonText}>{value.label}</Text>
      </TouchableOpacity>
    );
  };

  const LogoTitle = () => {
    return (
      <Image
        source={require('../../Assets/MoreMenu/logofinal.png')}
        resizeMode="contain"
        style={{
          width: dgl * 0.3,
          height: dgl * 0.9,
          alignSelf: 'center',
        }}
      />
    );
  };
  if (FooterVisibility) {
    return (
      <>
        <ActionSheetView
          ref={actionSheetRef}
          navigation={navigation}
          onPress={() => handleActionDown()}
        />

        <View style={[styles.footer]}>
          {FooterItem.map((item, idx) => {
            return <ItemRender key={idx} value={item} />;
          })}
        </View>
      </>
    );
  }
  return;
};

export default Footer;
