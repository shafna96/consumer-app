import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategoryData} from '../../../store/actions/homeAction';
import {Colors, WIDTH} from '../../../constants/styles';

export default function RenderCategories() {
  //const dispatch = useDispatch();
  const categories = useSelector(state => state.homeReducer.categories);
  // console.log('cat', categories);
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const res = await dispatch(getCategoryData());
  //   setData(res);
  //   //console.log(res);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    // <View>
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.category}
      renderItem={({item, index}) => (
        <Pressable
          //  key={item.id}
          style={{
            marginLeft: 9,
          }}
          onPress={() => {}}>
          <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
          <Text style={styles.categoryName}>{item.name}</Text>
        </Pressable>
      )}
    />
    //  </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginBottom: 13,
  },
  imageStyle: {
    width: WIDTH * 0.186, //70,
    height: WIDTH * 0.146, //55,
    borderRadius: 4,
    marginTop: 13,
  },
  categoryName: {
    fontFamily: 'Proxima Nova Bold',
    color: Colors.grayText50,
    textAlign: 'center',
    fontSize: 16,
  },
});
