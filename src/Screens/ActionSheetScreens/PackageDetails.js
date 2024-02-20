import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {Pack} from '../../Utils/Dummy';
import {LinearCommonButton} from '../../Components/CustomComponents';
import {Color} from '../../Utils/Color';
const dgl = screenDiagonal();

const PackageDetails = ({navigation}) => {
  const [Myindex, setMyindex] = useState(3);
  const baseOptions = {
    vertical: false,
    width: width,
    height: width * 0.6,
  };

  const RenderItem = props => {
    const {id, daysFree, isActive, price} = props.item;
    const isActiveSlide = Myindex == id;
    return (
      <View
        style={[
          styles.packageDetailsView,
          {
            borderColor: isActiveSlide && Color.cyanBlue,
            borderWidth: isActiveSlide ? 5 : 0,
          },
        ]}>
        <View style={[styles.padded, {marginBottom: 20, alignItems: 'center'}]}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#682281'}}>
            Free {daysFree} Days
          </Text>
          <Text style={{fontSize: 16, color: '#682281'}}>Trial</Text>
        </View>
        <LinearGradient
          style={styles.packageDetailsView2}
          colors={
            Myindex == id ? ['#2272FC', '#4BE1DCFC'] : ['#B452D1', '#C19CE5']
          }
          start={{x: 0, y: 0.1}}
          end={{x: 0.5, y: 1}}>
          <View style={styles.packageDetailsView3} />
          <View style={[styles.padded, styles.packageDetailsView4]}>
            <Text style={styles.packageBoxView1}>After that</Text>
            <Text style={styles.packageBoxView2}>${price} Weekly</Text>
            {isActive && (
              <Text style={styles.currentPlanView}>Current plan</Text>
            )}
          </View>
        </LinearGradient>
      </View>
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <ImageBackground
        source={require('../../Assets/packagesScreen/packageScreen.png')}
        resizeMode="stretch"
        style={styles.PackageBG}>
        <Carousel
          {...baseOptions}
          // defaultIndex={Myindex}
          loop
          width={width - 20}
          height={dgl * 0.3}
          autoPlay={false}
          data={Pack}
          mode="parallax"
          scrollAnimationDuration={1000}
          onSnapToItem={index => setMyindex(index)}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </ImageBackground>
      <ScrollView>
        <View style={styles.SecondContainer}>
          <Text style={styles.packagedetailsText}>Features</Text>
          <View style={styles.packagedetailsText2}>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> Acces to limited content only</Text>
            </View>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> There will be ads</Text>
            </View>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> Acces to limited content only</Text>
            </View>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> There will be ads</Text>
            </View>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> Acces to limited content only</Text>
            </View>
            <View style={styles.DotView}>
              <View style={styles.dot} />
              <Text style={styles.dotText}> There will be ads</Text>
            </View>
          </View>
        </View>
        <LinearCommonButton
          title={'Get Pack'}
          width={dgl * 0.28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PackageDetails;
