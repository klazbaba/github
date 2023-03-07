import React, {useEffect} from 'react';
import {Image, Pressable} from 'react-native';

import axios from '../../utilities/backendService';
import {Screen, SearchWrapper, Input} from './styles';

export default function HomeScreen() {
  useEffect(() => {
    axios.get('');
  }, []);

  return (
    <Screen>
      <SearchWrapper>
        <Input placeholder="Enter username..." />
        <Pressable onPress={() => console.log('clebo!')}>
          <Image source={require('./icons/search.png')} />
        </Pressable>
      </SearchWrapper>
    </Screen>
  );
}
