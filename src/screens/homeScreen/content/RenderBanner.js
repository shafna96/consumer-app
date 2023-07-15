import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBanners} from '../../../store/actions/homeAction';
import {WIDTH, Colors} from '../../../constants/styles';

export default function RenderBanner() {
  // const dispatch = useDispatch();
  const imageData = useSelector(state => state.homeReducer.slideImageUrl);
  // const [data, setData] = useState([]);
  const [imageActive, setImageActive] = useState(0);

  //   const getData = async () => {
  //     const res = await dispatch(getBanners());
  //     setData(res);
  //   };

  const slideImage = imageData.map(item => item.imageUrl);

  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.floor(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <View style={styles.slideImage}>
      <ScrollView
        onScroll={({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.slideImage}>
        {slideImage.map((image, index) => (
          <Image
            key={image}
            resizeMode="stretch"
            style={styles.slideImage}
            source={{uri: image}}
          />
        ))}
      </ScrollView>
      <View style={styles.slideImageDot}>
        {slideImage.map((image, index) => (
          <Text
            key={image}
            style={imageActive == index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideImage: {
    width: WIDTH,
    height: WIDTH * 0.5,
  },
  slideImageDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: Colors.PrimaryBrandColor,
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
