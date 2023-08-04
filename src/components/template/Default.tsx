'use client';

import styled from 'styled-components';
import BaseContainer from '@/components/base/Container';
import BaseHeader from '@/components/base/Header';
import BaseFooter from '../base/Footer';

type Props = {
  children: React.ReactNode;
};

function DefaultTemplate({ children }: Props) {
  return (
    <StyledDefaultTemplate>
      <BaseHeader />
      <BaseContainer>{children}</BaseContainer>
      <BaseFooter />
    </StyledDefaultTemplate>
  );
}

const StyledDefaultTemplate = styled.div`
  position: relative;
  min-height: 100vh;
  padding-block: 60px;
  background-color: #f7f7f7;
`;

export default DefaultTemplate;
