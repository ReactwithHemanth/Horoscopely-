import {Text, View} from 'react-native';
import React from 'react';
import {ImageBackgroundView} from '../../Components/CustomComponents';
import {DearSvg, RectangleSvg, ShareSvg} from '../../Components/SvgComponent';
import styles, {_spacing} from '../../Styles/styles';
import {Color} from '../../Utils/Color';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
const dgl = screenDiagonal();

const FocusDay = () => {
  return (
    <ImageBackgroundView>
      <View style={{justifyContent: 'center'}}>
        <RectangleSvg />
        <View style={styles.focusView}>
          <DearSvg fill={Color.shadedWhite} />
          <Text
            style={[
              styles.titleText,
              {color: Color.shadedWhite, width: dgl * 0.2},
            ]}>
            Your Focus of the day
          </Text>
          <ShareSvg fill={Color.shadedWhite} />
        </View>
      </View>
      <View style={{flex: 1, padding: _spacing * 2}}>
        <Text style={styles.textMargin}>
          The way to universal love is self love! Be compassionate toward
          yourself and others. It's a single key, perpetually unlocking
          innumerable hearts. Forgiveness comes naturally to those who practice
          compassion. It's an artist's best color, the best music, the best
          poem! Forgiving others will enable you to deal with your situations
          and problems more gracefully.
        </Text>
        <Text style={styles.textMargin}>
          Expect unexpected, but simultaneously also be aware of deceptions.
          Sudden events out of the blue with a tinge of some unexpected news may
          surprise you! Good or bad, always make a sincere attempt at taking
          things in your stride. A tight rope walker knows no better way! Legal
          matters and computer foul ups might pull you down further, but again,
          only psychic balance shall help you sail through. Happiness does not
          need a concrete door! It's a fluid taking the shape of the vessel.
          Hence, be the vessel wherein, it would want to flow in naturally.
          Insights would make their way to you this day. They are the language
          of heart. Thus, listen to them, they might be singing the tune you
          like!
        </Text>
      </View>
    </ImageBackgroundView>
  );
};

export default FocusDay;
