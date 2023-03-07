import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import React, {LegacyRef, useRef, useState} from 'react';
import {Image, Pressable} from 'react-native';

import {RootStackParamList} from '../../navigation';
import {User} from '../../types/User';
import {request} from '../../utilities/backendCall';
import Loader from '../components/Loader';
import Screen from '../components/Screen';
import {
  SearchWrapper,
  Input,
  EmptyText,
  EmptyWrapper,
  ListItemWrapper,
  Avatar,
  UserName,
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen(props: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [searchFor, setSearchFor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const totalCount = useRef(0);
  const currentPage = useRef(1);
  const list = useRef<FlashList<User>>();

  const renderItem = ({item}: {item: User}) => (
    <ListItemWrapper
      onPress={() => props.navigation.navigate('DetailsScreen', item)}>
      <Avatar source={{uri: item.avatar_url}} />
      <UserName>{item.login}</UserName>
    </ListItemWrapper>
  );

  const searchUsers = async () => {
    try {
      totalCount.current = 0;
      currentPage.current = 1;
      setIsLoading(true);
      const res = await request(
        `search/users?q=${searchFor}&sort=updated&order=desc`,
      );
      setUsers(res.items);
      list.current?.scrollToOffset({animated: true, offset: 0});
      totalCount.current = res.total_count;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndReached = async () => {
    if (users.length === totalCount.current) return;
    currentPage.current += 1;
    const res = await request(
      `search/users?q=${searchFor}&page=${currentPage.current}&sort=updated&order=desc`,
    );
    setUsers([...users, ...res.items]);
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
        keyExtractor={(item, index) => String(item.id) + index}
        onEndReached={handleEndReached}
        onEndReachedThreshold={1}
        ref={list.current as unknown as LegacyRef<FlashList<User>>}
      />
    </Screen>
  );
}
