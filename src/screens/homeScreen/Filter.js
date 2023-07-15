import {Modal, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Colors, HEIGHT, WIDTH} from '../../constants/styles';
import ButtonRow from '../../components/ButtonRow';
import CheckBox from '../../components/CheckBox';
import {RenderHeader, RenderBody} from './filter';
import {useSelector} from 'react-redux';

export default function Filter({isVisible, onPressClose}) {
  const cuisinesFilter = useSelector(state => state.homeReducer.cuisinesFilter);
  const [sortByClicked, setSortByClicked] = useState(false);
  const [cuisinesClicked, setCuisinesClicked] = useState(false);
  const [offersClicked, setOffersClicked] = useState(false);
  const [dietaryClicked, setDietaryClicked] = useState(false);
  const [leftSideData, setleftSideData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const sortByList = [
    {id: 1, label: 'Rating: High to Low'},
    {id: 2, label: 'Delivery Time'},
    {id: 3, label: 'Cost: High to Low'},
    {id: 4, label: 'Cost: Low to High'},
  ];

  // const list = [{id: 1, label: 'Rating: High to Low'}];

  const isSelected = id => {
    if (selectedItems.includes(id)) {
      return true;
    }
    return false;
  };

  const checkBoxPress = id => {
    const selData = [...new Set(selectedItems)];
    if (selData.includes(id)) {
      const index = selData.indexOf(id);
      selData.splice(index, 1);
      setSelectedItems(selData);
    } else {
      selData.push(id);
      setSelectedItems(selData);
    }
  };

  const filterHeight = HEIGHT * 0.75;

  const sortByClickHandler = () => {
    //setleftSideData([]);
    setleftSideData(sortByList);
    setCuisinesClicked(false);
    setOffersClicked(false);
    setDietaryClicked(false);
    setSortByClicked(true);
  };

  const cuisinesClickedHandler = () => {
    setleftSideData(cuisinesFilter);
    setSortByClicked(false);
    setOffersClicked(false);
    setDietaryClicked(false);
    setCuisinesClicked(true);
  };
  const offersClickedHandler = () => {
    setleftSideData([]);
    setSortByClicked(false);
    setCuisinesClicked(false);
    setDietaryClicked(false);
    setOffersClicked(true);
  };

  const dietaryClickedHandler = () => {
    setleftSideData([]);
    setSortByClicked(false);
    setCuisinesClicked(false);
    setOffersClicked(false);
    setDietaryClicked(true);
  };

  const closeHandler = () => {
    onPressClose();
    setSortByClicked(true);
    setCuisinesClicked(false);
    setOffersClicked(false);
    setDietaryClicked(false);
  };

  useEffect(() => {
    setleftSideData(sortByList);
    setSortByClicked(true);
    // setCuisinesClicked(false);
    // setOffersClicked(false);
    // setDietaryClicked(false);
  }, []);

  const renderItem = ({item, index}) => (
    <CheckBox
      style={{padding: 15}}
      label={item.label}
      selected={isSelected(index)}
      onPress={() => checkBoxPress(index)}
    />
  );

  const renderButtonRow = () => {
    return (
      <View>
        <ButtonRow
          style={styles.buttonRow}
          titleOne={'Clear All'}
          titleTwo={'Apply'}
          buttonStyleOne={styles.buttonStyle}
          buttonStyleTwo={[
            styles.buttonStyle,
            {
              backgroundColor: Colors.primaryOrange,
            },
          ]}
          textStyleOne={styles.buttonTextOne}
          textStyleTwo={styles.buttonTextTwo}
        />
      </View>
    );
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      statusBarTranslucent>
      <Pressable onPress={closeHandler}>
        <View
          style={[
            styles.overlay,
            {height: HEIGHT + StatusBar.currentHeight - filterHeight},
          ]}
        />
      </Pressable>
      <View
        style={[
          styles.filterContainer,
          {
            height: filterHeight,
            // backgroundColor: sortByClicked
            //   ? Colors.grayBackground
            //   : 'rgba(44,44,44,0.6 )',
          },
        ]}>
        <RenderHeader
          style={{
            backgroundColor: !sortByClicked ? 'rgba(44,44,44,0.6 )' : null,
          }}
          onPress={closeHandler}
        />
        <RenderBody
          containerStyle={{
            flex: 1,
            backgroundColor: !sortByClicked ? 'rgba(44,44,44,0.6 )' : null,
          }}
          renderItem={renderItem}
          // selected={isSelected}
          //  checkBoxPress={checkBoxPress}
          sortByClickHandler={sortByClickHandler}
          cuisinesClickedHandler={cuisinesClickedHandler}
          offersClickedHandler={offersClickedHandler}
          dietaryClickedHandler={dietaryClickedHandler}
          sortByClickedStyle={sortByClicked && styles.pressed}
          cuisinesClickedStyle={
            cuisinesClicked && [styles.pressed, {backgroundColor: 'white'}]
          }
          offersClickedStyle={
            offersClicked && [styles.pressed, {backgroundColor: 'white'}]
          }
          dietaryClickedStyle={
            dietaryClicked && [styles.pressed, {backgroundColor: 'white'}]
          }
          data={leftSideData}
        />
        {renderButtonRow()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  overlay: {
    backgroundColor: 'rgba(44,44,44,0.6 )',
    width: WIDTH,
  },
  filterContainer: {
    backgroundColor: Colors.grayBackground,
    width: WIDTH,
    // marginTop: 'auto',
  },

  buttonRow: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonStyle: {
    borderRadius: 0,
    borderWidth: 0,
    width: WIDTH * 0.4,
  },
  buttonTextOne: {color: Colors.primaryOrange},
  buttonTextTwo: {color: 'white'},

  pressed: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.primaryOrange,
  },
});
