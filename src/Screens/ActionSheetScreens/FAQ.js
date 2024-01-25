import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {CloseSvg, MinusSvg} from '../../Components/SvgComponent';
import styles from '../../Styles/styles';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {Color} from '../../Utils/Color';

const data = [
  {
    id: 0,
    name: 'Question heading will be here',
    desc: 'Answer here lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.alsjf kajhdgkhzsnk asf a oasfoja ajsfa ahfksjfa aslfaj afjl al fjalsf alsjf kajhdgkhzsnk asf a oasfoja ajsfa ahfksjfa aslfaj afjl al fjalsf alsjf kajhdgkhzsnk asf a oasfoja ajsfa ahfksjfa aslfaj afjl al fjalsf alsjf  ',
  },
  {
    id: 1,
    name: 'Question heading will be here',
    desc: 'Answer here lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. ajsfa ahfksjfa aslfaj afjl al fjalsf alsjf',
  },
  {
    id: 2,
    name: 'Question heading will be here',
    desc: 'Answer here lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.ksjfa aslfaj afjl al fjalsf alsjf',
  },
];
const FAQ = () => {
  const height = useSharedValue(90);
  const [selectedItem, setselectedItem] = useState([]);

  const selectItems = item => {
    if (selectedItem.includes(item.id)) {
      const newList = selectedItem.filter(listItem => listItem !== item.id);
      return setselectedItem([...newList]);
    }
    setselectedItem([...selectedItem, item.id]);
  };

  const ToggleHeight = sectionId => {
    const isExpanded = selectedItem.includes(sectionId);
    isExpanded
      ? (height.value = withSpring(90))
      : (height.value = withSpring(140));
  };

  const DropDownItem = props => {
    const {id, name, desc} = props.data;
    const isExpanded = selectedItem.includes(id);

    return (
      <Animated.View
        style={[
          styles.FaqContainerStyle,
          {
            height: isExpanded ? height : 90,
            backgroundColor: isExpanded ? Color.white : Color.shadedWhite,
          },
        ]}>
        <View key={id} style={styles.dropdownStyle}>
          <Text>{name}</Text>
          <TouchableOpacity
            style={{transform: [{rotate: !isExpanded ? '45deg' : '0deg'}]}}
            onPress={() => {
              selectItems(props.data);
              ToggleHeight(id);
            }}>
            {!isExpanded ? (
              <CloseSvg fill={Color.primaryBlue} />
            ) : (
              <MinusSvg width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.dropdownStyle}>
          {isExpanded && <Text style={styles.subtextV2}>{desc}</Text>}
        </View>
      </Animated.View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <DropDownItem data={item} active={index} />
        )}
      />
    </View>
  );
};

export default FAQ;
