import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
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
  const [users, setUsers] = useState([]);
  const [searchFor, setSearchFor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({item}: {item: User}) => (
    <ListItemWrapper>
      <Avatar source={{uri: item.avatar_url}} />
      <UserName>{item.login}</UserName>
    </ListItemWrapper>
  );

  const searchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`search/users?q=${searchFor}&page=${3}`);
      setUsers(res.data.items);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
      />
    </Screen>
  );
}
