import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { getProducts } from 'store/account/actions';
import { Product } from 'types/entities';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts()).then(res => {
      if (res.meta.requestStatus === 'rejected') {
        console.log('error: ', res.payload)
      } else {
        console.log("data: ", res.payload)
      }
    })
  }, [])
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
