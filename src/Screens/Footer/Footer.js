import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Utils/Color';
import {
  MoreSvg,
  OrbitSvg,
  SaturnSvg,
  SolidSvg,
} from '../../Components/SvgComponent';
import styles from '../../Styles/styles';

const Footer = ({navigation}) => {
  const [active, setActive] = useState(0);
  const item = [
    {id: 1, value: 'Home', label: 'HOME'},
    {id: 2, value: 'Compatibility', label: 'COMPATIBILITY'},
    {id: 3, value: 'Remedy', label: 'REMEDY'},
    {id: 4, value: 'More', label: 'MORE'},
  ];
  const ItemRender = ({value}) => {
    const _navigate = value => {
      if (value == 'More') {
        return;
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
    <View style={styles.footer}>
      {item.map((item, idx) => {
        return <ItemRender value={item} />;
      })}
    </View>
  );
};

export default Footer;
