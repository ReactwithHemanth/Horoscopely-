import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../Utils/Color';
import {
  MoreSvg,
  OrbitSvg,
  SaturnSvg,
  SolidSvg,
} from '../../Components/SvgComponent';
import styles from '../../Styles/styles';
import {RnGet} from '../../hooks/RnstoreHook';
import auth from '@react-native-firebase/auth';

const Footer = props => {
  const {state, descriptors, navigation} = props;

  const [active, setActive] = useState(0);
  const [footerDisabled, setFooterDisabled] = useState(false);

  const item = [
    {id: 1, value: 'Home', label: 'HOME'},
    {id: 2, value: 'Compatibility', label: 'COMPATIBILITY'},
    {id: 3, value: 'Remedy', label: 'REMEDY'},
    {id: 4, value: 'More', label: 'MORE'},
  ];

  useEffect(() => {
    const isVisible = RnGet('footerDisabled');
    setFooterDisabled(isVisible);
  }, []);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  // console.log(footerDisabled, 'foot');
  const ItemRender = ({value}) => {
    const _navigate = value => {
      if (value == 'More') {
        handleSignOut();
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
        {_getIcon(value)}
        <Text style={styles.buttonText}>{value.label}</Text>
      </TouchableOpacity>
    );
  };

  const _getIcon = value => {
    const isActive =
      active == value?.value ? Color.regularViolet : Color.lightViolet;
    switch (value?.value) {
      case 'Home':
        return <SaturnSvg fill={isActive} />;
      case 'Compatibility':
        return <OrbitSvg fill={isActive} />;
      case 'Remedy':
        return <SolidSvg fill={isActive} />;
      case 'More':
        return <MoreSvg fill={isActive} />;
    }
  };

  return (
    <>
      {footerDisabled ? (
        <View style={styles.footer}>
          {item.map((item, idx) => {
            return <ItemRender key={idx} value={item} />;
          })}
        </View>
      ) : null}
    </>
  );
};

export default Footer;
