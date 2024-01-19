import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/styles';
import {screenDiagonal, width} from '../../Utils/helperFunctions';
import Carousel from 'react-native-reanimated-carousel';
import {Color} from '../../Utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import {Pack} from '../../Utils/Dummy';
const dgl = screenDiagonal();

const PackageDetails = () => {
  const [Myindex, setMyindex] = useState(3);
  const baseOptions = {
    vertical: false,
    width: width,
    height: width * 0.6,
  };
  // const cardWidth = dgl * 0.3;s

  const RenderItem = props => {
    const {id, daysFree, isActive, price} = props.item;
    return (
      <View style={styles.packageDetailsView}>
        <View style={[styles.padded, {marginBottom: 20, alignItems: 'center'}]}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#682281'}}>
            Free {daysFree} Days
          </Text>
          <Text style={{fontSize: 16, color: '#682281'}}>Trial</Text>
        </View>
        <LinearGradient
          style={styles.packageDetailsView2}
          colors={['#2272FC', '#4BE1DCFC']}
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
          defaultIndex={1}
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
      <View style={styles.SecondContainer}></View>
    </View>
  );
};

export default PackageDetails;
