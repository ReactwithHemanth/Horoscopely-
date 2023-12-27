import React, {forwardRef, useRef} from 'react';
import {Image, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Color} from '../Utils/Color';
const {screenDiagonal, height} = require('../Utils/helperFunctions');
const dgl = screenDiagonal();
const ActionSheetView = forwardRef((props, ref) => {
  // const actionSheetRef = useRef(null);
  const offset = 330;
  return (
    <ActionSheet
      gestureEnabled
      ref={ref}
      // useBottomSafeAreaPadding
      containerStyle={{
        backgroundColor: Color.whiteOpacity,
        // paddingBottom: insets.bottom + 90,
      }}>
      <View
        style={{
          height: height - offset,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/MoreMenu/logofinal.png')}
          resizeMode="contain"
          style={{
            width: dgl * 0.15,
            height: dgl * 0.9,
            alignSelf: 'center',
            top: 0,
            // backgroundColor: 'cyan',
          }}
        />
        {/* <LogoTitle /> */}
      </View>
    </ActionSheet>
  );
});

export {ActionSheetView};
