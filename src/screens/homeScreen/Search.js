import {Pressable, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar';
import DefaultText from '../../components/DefaultText';
import {getCategoryById, getSearchData} from '../../store/actions/homeAction';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {WIDTH, Colors, HEIGHT} from '../../constants/styles';

export default function Search() {
  const dispatch = useDispatch();
  const allData = useSelector(state => state.homeReducer.getSearchData);
  const [searchQuery, setSearchQuery] = useState('');

  // const allCategories = allData.allCategories;
  // const topCategories = allData.topCategories;

  const [data, setData] = useState({
    allCategories: [],
    topCategories: [],
  });

  const searchQueryHandler = value => {
    const term = value.toLowerCase();
    const allCategoriesToDisplay = _.filter(allData.allCategories, del =>
      del.name.toLowerCase().includes(term),
    );
    const topCategoriesToDisplay = _.filter(allData.allCategories, del =>
      del.name.toLowerCase().includes(term),
    );
    const d = {
      allCategories: allCategoriesToDisplay,
      topCategories: topCategoriesToDisplay,
    };
    if (value === '') {
      setSearchQuery(value);
      setData(allData);
    } else {
      setSearchQuery(value), setData(d);
    }
  };
  //console.log(data.allCategories);
  const getData = async () => {
    const res = await dispatch(getSearchData());
    setData(res);
    // console.log('res', category.allCategories);
  };

  useEffect(() => {
    getData();
  }, []);

  const clearSearch = () => {
    setData(allData);
    setSearchQuery('');
  };

  const renderBody = () => {
    return (
      <View style={styles.body}>
        <View>
          <DefaultText style={styles.title}>Popular tags</DefaultText>
          <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={data.topCategories}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={styles.tagsContainer}
            renderItem={({item, index}) => {
              return (
                <View style={styles.tagBar}>
                  <Text>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <DefaultText style={styles.title}>Categories</DefaultText>

          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={data.allCategories}
            keyExtractor={(item, index) => item.id}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <View style={styles.categoryBar}>
                  <Text>{item.name}</Text>
                  {item.imageUrl !== '' && (
                    <Image
                      source={{uri: item.imageUrl}}
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  )}
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        placeholder="Search dish, restaurant or cuisine"
        onChangeText={searchQueryHandler}
        searchtext={searchQuery}
        onCancelSearch={clearSearch}
      />
      {renderBody()}
      {/* <FlatList
          data={category}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <Pressable>
              <Text>{item.name}</Text>
            </Pressable>
          )}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  body: {
    flex: 1,
  },
  categoryBar: {
    height: 50,
    width: WIDTH * 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.grayBackground,
    borderRadius: 10,
  },
  tagsContainer: {
    width: WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',

    // height: HEIGHT * 0.25,
  },
  tagBar: {
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 15,
    margin: 5,
    backgroundColor: Colors.grayBackground,
    borderRadius: 10,
  },
  title: {
    paddingVertical: 25,
    paddingLeft: 15,
  },
});
