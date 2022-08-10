import { UpMenuContainer } from 'components/upMenuContainer';
import { headerTitles } from 'constants/_data';
import { CardsContainer } from 'containers/cardsContainer';
import { ColorContainer } from 'containers/colorContainer';
import { ContactsContainer } from 'containers/contactsContainer';
import { GeneralFooterWrapper } from 'containers/generelfooterWrapper';
import { GeneralHeaderWrapper } from 'containers/generelheaderWrapper';
import { MenuContainer } from 'containers/menuContainer';
import { PS_MAIN_RED, PS_MAIN_BACKGROUND } from 'mainStyles/GlobalTheme';
import React from 'react';

export const AppPage = () => {
  return (
    <div>
      <ColorContainer width={1500} bgImage={headerTitles.header.pathImg}>
        <GeneralHeaderWrapper height={520} tag={headerTitles.header.tag} title={headerTitles.header.title}>
          <UpMenuContainer />
        </GeneralHeaderWrapper>
      </ColorContainer>
      <ColorContainer width={1500} color={PS_MAIN_RED}>
        <MenuContainer />
      </ColorContainer>
      <ColorContainer width={1500} color={PS_MAIN_BACKGROUND}>
        <CardsContainer />
      </ColorContainer>
      <ColorContainer width={1500} bgImage={headerTitles.middle.pathImg}>
        <GeneralHeaderWrapper
          height={536}
          paddingTitle={31}
          tag={headerTitles.middle.tag}
          title={headerTitles.middle.title}
        />
      </ColorContainer>
      <ColorContainer width={1500} color={PS_MAIN_BACKGROUND}>
        <ContactsContainer />
      </ColorContainer>
      <ColorContainer width={1500} bgImage={headerTitles.footer.pathImg}>
        <GeneralHeaderWrapper
          height={536}
          paddingTitle={31}
          article={headerTitles.footer.article}
          title={headerTitles.footer.title}
        />
      </ColorContainer>
      <ColorContainer width={1500} color={PS_MAIN_RED}>
        <GeneralFooterWrapper />
      </ColorContainer>
    </div>
  );
};
