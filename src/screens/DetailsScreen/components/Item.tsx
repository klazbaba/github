import React from 'react';
import styled from 'styled-components/native';

interface Props {
  label: string;
  value: string | number;
  onPress?: () => void;
}

export default function Item(props: Props) {
  return (
    <Wrapper>
      <Label>{props.label}:</Label>
      <Value onPress={props.onPress}>{props.value}</Value>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 8px;
`;

const Label = styled.Text`
  font-weight: 500;
`;

const Value = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  text-decoration-line: ${props => (props.onPress ? 'underline' : 'none')};
  color: ${props => (props.onPress ? 'blue' : 'grey')};
  max-width: 90%;
`;
