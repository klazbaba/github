import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text} from 'react-native';

import axios from '../../utilities/backendService';
import {
  SearchWrapper,
  Input,
  EmptyText,
  EmptyWrapper,
  Screen,
  ListItemWrapper,
  Avatar,
} from './styles';

interface User {
  id: number;
  avatar_url: string;
  login: string;
}

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const [searchFor, setSearchFor] = useState('klaz');

  const renderItem = ({item}: {item: User}) => (
    <ListItemWrapper>
      <Avatar source={{uri: item.avatar_url}} />
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
        {item.login}
      </Text>
    </ListItemWrapper>
  );

  useEffect(() => {
    axios
      .get(`search/users?q=${searchFor}`)
      .then(res => setUsers(res.data.items));
  }, []);

  return (
    <Screen>
      <SearchWrapper>
        <Input
          placeholder="Enter username..."
          value={searchFor}
          onChangeText={text => setSearchFor(text)}
        />
        <Pressable onPress={() => console.log('clebo!')}>
          <Image source={require('./icons/search.png')} />
        </Pressable>
      </SearchWrapper>

      <FlashList
        data={users}
        renderItem={renderItem}
        estimatedItemSize={100}
        ListEmptyComponent={
          <EmptyWrapper>
            <EmptyText>No user found</EmptyText>
          </EmptyWrapper>
        }
        keyExtractor={item => String(item.id)}
      />
    </Screen>
  );
}
