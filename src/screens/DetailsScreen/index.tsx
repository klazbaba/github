import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect} from 'react';
import {Linking} from 'react-native';
import {useQuery} from 'react-query';

import {UserContext, IUserContext} from '../../contexts';
import {RootStackParamList} from '../../navigation';
import {request} from '../../utilities/backendCall';
import Loader from '../components/Loader';
import Screen from '../components/Screen';
import Item from './components/Item';
import {Avatar} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

export default function DetailsScreen(props: Props) {
  const {avatar_url, url, id} = props.route.params;
  const {isLoading, data} = useQuery(['user', id], () => request(url));
  const {user, setUser} = useContext(UserContext) as IUserContext;

  useEffect(() => {
    setUser(data);
  }, [data, setUser]);

  return (
    <Screen>
      {isLoading && <Loader />}
      <Avatar source={{uri: avatar_url}} />

      {user?.name && <Item label="Name" value={user?.name as string} />}
      <Item label="Followers" value={user?.followers!} />
      <Item label="Following" value={user?.following!} />
      {user?.location && <Item label="Location" value={user?.location!} />}
      {user?.email && <Item label="url" value={user?.email!} />}
      <Item
        label="url"
        value={user?.html_url!}
        onPress={() => Linking.openURL(user?.html_url!)}
      />
    </Screen>
  );
}
