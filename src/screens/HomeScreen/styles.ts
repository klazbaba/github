import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Screen = styled.View`
  padding: 16px;
`;

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
  marginright: 8;
`;

export {Screen, SearchWrapper, Input};
