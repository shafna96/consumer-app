import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../../components/Header';
import RenderList from '../../../components/RenderList';

export default function RenderRestaurants() {
  const restaurantsData = useSelector(state => state.homeReducer.restaurants);

  const data = restaurantsData.map(item => item);
  const featuredResData = data[0];
  const newOnEatMeData = data[1];
  const allRestaurantData = data[2];

  const renderFeaturesRestaurants = () => {
    return (
      <>
        <Header title={featuredResData.title} />
        <RenderList horizontal data={featuredResData.data} />
      </>
    );
  };

  const renderNewOnEatMe = () => {
    return (
      <>
        <Header title={newOnEatMeData.title} />
        <RenderList horizontal data={newOnEatMeData.data} />
      </>
    );
  };

  const renderAllRestaurant = () => {
    return (
      <>
        <Header title={allRestaurantData.title} />
        <RenderList horizontal={false} data={allRestaurantData.data} />
      </>
    );
  };

  return (
    <>
      {/* FeaturedRestaurant */}
      {renderFeaturesRestaurants()}
      {/* New on EatMe */}
      {renderNewOnEatMe()}
      {/* All Restaurant */}
      {renderAllRestaurant()}
    </>
  );
}
