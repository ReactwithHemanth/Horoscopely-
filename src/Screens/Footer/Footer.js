import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Color} from '../../Utils/Color';
import {
  MoreSvg,
  OrbitSvg,
  SaturnSvg,
  SolidSvg,
} from '../../Components/SvgComponent';
import styles from '../../Styles/styles';
import {screenDiagonal} from '../../Utils/helperFunctions';
import {Image} from 'react-native-svg';
import {ActionSheetView} from '../../Components/ActionSheet';
import {MainContext} from '../../Confg/Context';

const dgl = screenDiagonal();

const Footer = props => {
  const {state, descriptors, navigation} = props;
  const actionSheetRef = useRef(null);
  const [active, setActive] = useState(0);

  const {FirstLaunched, FooterVisibility, setFirstLaunched, setFooterVisible} =
    useContext(MainContext);

  const item = [
    {id: 1, value: 'Home', label: 'HOME'},
    {id: 2, value: 'Compatibility', label: 'COMPATIBILITY'},
    {id: 3, value: 'Remedy', label: 'REMEDY'},
    {id: 4, value: 'More', label: 'MORE'},
  ];

  const handleSignOut = async () => {
    try {
      // await auth().signOut();
      actionSheetRef.current?.show();
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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

  const LogoTitle = () => {
    return (
      <Image
        source={require('../../Assets/MoreMenu/logofinal.png')}
        resizeMode="contain"
        style={{
          width: dgl * 0.3,
          height: dgl * 0.9,
          alignSelf: 'center',
          backgroundColor: 'cyan',
        }}
      />
    );
  };

  return (
    <>
      <ActionSheetView ref={actionSheetRef} />
      <View
        style={[styles.footer, {display: FooterVisibility ? 'flex' : 'none'}]}>
        {item.map((item, idx) => {
          return <ItemRender key={idx} value={item} />;
        })}
      </View>
    </>
  );
};

export default Footer;
