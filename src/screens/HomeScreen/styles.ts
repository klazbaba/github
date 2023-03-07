import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  padding-horizontal: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin-right: 8px;
`;

const EmptyText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 80%;
`;

const EmptyWrapper = styled.View`
  flex: 1;
`;

const ListItemWrapper = styled.Pressable`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
  margin-bottom: 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  padding-bottom: 8px;
  border-bottom-color: lightgrey;
`;

const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

const UserName = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 16px;
  max-width: 80%;
`;

export {
  SearchWrapper,
  Input,
  EmptyText,
  EmptyWrapper,
  ListItemWrapper,
  Avatar,
  UserName,
};
