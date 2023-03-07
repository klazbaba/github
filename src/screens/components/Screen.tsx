import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface Props {
  children: ReactNode;
}

export default function Screen(props: Props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
`;
