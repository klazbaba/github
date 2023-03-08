import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface Props {
  children: ReactNode;
}

export default function Screen(props: Props) {
  return (
    <Wrapper>
      <InnerWrap>{props.children}</InnerWrap>
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const InnerWrap = styled.View`
  padding: 16px;
  flex: 1;
`;
