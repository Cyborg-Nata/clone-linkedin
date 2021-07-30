import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://cdn.mensagenscomamor.com/content/images/m000479446.jpg?v=1" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
