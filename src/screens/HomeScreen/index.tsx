import {FlashList} from '@shopify/flash-list';
import React, {LegacyRef, useRef, useState} from 'react';
import {Image, Pressable} from 'react-native';

import axios from '../../utilities/backendService';
import Loader from '../components/Loader';
import {
  SearchWrapper,
  Input,
  EmptyText,
  EmptyWrapper,
  Screen,
  ListItemWrapper,
  Avatar,
  UserName,
} from './styles';

interface User {
  id: number;
  avatar_url: string;
  login: string;
}

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchFor, setSearchFor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const totalCount = useRef(0);
  const currentPage = useRef(1);
  const list = useRef<FlashList<User>>();

  const renderItem = ({item}: {item: User}) => (
    <ListItemWrapper>
      <Avatar source={{uri: item.avatar_url}} />
      <UserName>{item.login}</UserName>
    </ListItemWrapper>
  );

  const searchUsers = async () => {
    try {
      totalCount.current = 0;
      currentPage.current = 1;
      setIsLoading(true);
      const res = await axios.get(
        `search/users?q=${searchFor}&sort=updated&order=desc`,
      );
      setUsers(res.data.items);
      list.current?.scrollToOffset({animated: true, offset: 0});
      totalCount.current = res.data.total_count;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndReached = async () => {
    if (users.length === totalCount.current) return;
    currentPage.current += 1;
    const res = await axios.get(
      `search/users?q=${searchFor}&page=${currentPage.current}`,
    );
    setUsers([...users, ...res.data.items]);
  };

  return (
    <Screen>
      {isLoading && <Loader />}
      <SearchWrapper>
        <Input
          placeholder="Enter username..."
          value={searchFor}
          onChangeText={text => setSearchFor(text)}
        />
        <Pressable onPress={searchUsers}>
          <Image source={require('./icons/search.png')} />
        </Pressable>
      </SearchWrapper>

      <FlashList
        data={users}
        renderItem={renderItem}
        estimatedItemSize={100}
        ListEmptyComponent={
          <EmptyWrapper>
            <EmptyText>No user</EmptyText>
          </EmptyWrapper>
        }
        keyExtractor={item => String(item.id)}
        onEndReached={handleEndReached}
        onEndReachedThreshold={1}
        ref={list.current as unknown as LegacyRef<FlashList<User>>}
      />
    </Screen>
  );
}
