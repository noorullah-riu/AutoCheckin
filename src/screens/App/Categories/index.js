import React from 'react';
import {StyleSheet} from 'react-native';

import back from '../../../assets/_Header/back-button.png';

import search from '../../../assets/_Header/search.png';
import AppHeader from '../../../ui/AppHeader';
import CategoryCard from './CategoryCard';
import {useDispatch, useSelector} from 'react-redux';
import {getcategories} from '../../../redux/actions/index';
import rfSpacing from '../../../theme/rfSpacing';

export const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);
  const getCategory = () => dispatch(getcategories());

  const dummyData = [
    {
      name: 'Baby Feeder Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder2 Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder3 Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder2 Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder3 Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder2 Solution',
      number: 'C500',
    },
    {
      name: 'Baby Feeder3 Solution',
      number: 'C500',
    },
  ];
  const getCategoryDetail = name => {
    navigation.navigate('Products');
  };
  return (
    <>
      <AppHeader
        menuImg={back}
        addImg={search}
        title={'Categories List'}
        menuPress={() => navigation.goBack()}
        addPress={() => alert('comming soon')}
      />
      <CategoryCard
        catData={dummyData}
        onPressSelectCategory={getCategoryDetail}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    marginBottom: rfSpacing['4xl'],
  },
});
