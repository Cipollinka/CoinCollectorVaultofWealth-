import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Animated,
  Linking,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoadingCoinCollectorScreen = () => {
  const fontSFProTextRegular = 'SFProText-Regular';
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const navigation = useNavigation();
  const [percentage, setPercentage] = useState(0);

  const animatedOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedOpacity]);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../assets/images/loaderBg.png')}
        style={{
          position: 'absolute',
          width: dimensions.width,
          height: dimensions.height,
          alignSelf: 'center',
        }}
        resizeMode="stretch"
      />
      <Animated.Image
        source={require('../assets/images/coinCollectorIcon.png')}
        resizeMode="contain"
        style={{
          width: dimensions.width * 0.7,
          height: dimensions.width * 0.7,
          opacity: animatedOpacity,
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.replace('Home')}
        style={{
          width: dimensions.width * 0.8,
          marginBottom: dimensions.height * 0.016,
          marginTop: dimensions.height * 0.03,
          alignSelf: 'center',
          backgroundColor: '#FFEA1F',
          borderRadius: dimensions.width * 0.019,
          alignItems: 'center',
          justifyContent: 'center',
          height: dimensions.height * 0.05,
        }}>
        <Text
          style={{
            fontFamily: fontSFProTextRegular,
            color: 'black',
            fontSize: dimensions.width * 0.046,
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: 600,
          }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingCoinCollectorScreen;
