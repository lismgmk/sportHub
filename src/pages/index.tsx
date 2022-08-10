import { CardsContainer } from 'containers/cardsContainer';
import { ColorContainer } from 'containers/colorContainer';
import { HeaderContainer } from 'containers/headerContainer';
import { MenuContainer } from 'containers/menuContainer';
import { PS_MAIN_RED, PS_MAIN_BACKGROUND } from 'mainStyles/GlobalTheme';
import React from 'react';

export const AppPage = () => {
  return (
    <div>
      <ColorContainer width={1340} bgImage={'/header_bg.png'}>
        <HeaderContainer />
      </ColorContainer>
      <ColorContainer width={1340} color={PS_MAIN_RED}>
        <MenuContainer />
      </ColorContainer>
      <ColorContainer width={1340} color={PS_MAIN_BACKGROUND}>
        <CardsContainer />
      </ColorContainer>
    </div>
  );
};
