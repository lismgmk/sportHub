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
      <ColorContainer bgImage={headerTitles.header.pathImg}>
        <GeneralHeaderWrapper
          height={{ xl: 520, md: 520, sm: 520, xs: 205 }}
          paddingTitle={{ xl: 25, md: 25, sm: 25, xs: 5.2 }}
          tag={headerTitles.header.tag}
          title={headerTitles.header.title}
          variant={'h1'}
        >
          <UpMenuContainer />
        </GeneralHeaderWrapper>
      </ColorContainer>
      <MenuContainer />
      <ColorContainer color={PS_MAIN_BACKGROUND}>
        <CardsContainer />
      </ColorContainer>
      <ColorContainer bgImage={headerTitles.middle.pathImg}>
        <GeneralHeaderWrapper
          height={{ xl: 536, md: 536, sm: 276, xs: 276 }}
          paddingTitle={{ xl: 31, lg: 31, md: 31, sm: 15, xs: 11 }}
          tag={headerTitles.middle.tag}
          title={headerTitles.middle.title}
          variant={'h2'}
        />
      </ColorContainer>
      <ContactsContainer />
      <ColorContainer bgImage={headerTitles.footer.pathImg}>
        <GeneralHeaderWrapper
          height={{ xl: 536, md: 536, sm: 276, xs: 276 }}
          paddingTitle={{ xl: 31, lg: 31, md: 31, sm: 12, xs: 10 }}
          article={headerTitles.footer.article}
          title={headerTitles.footer.title}
          variant={'h2'}
        />
      </ColorContainer>
      <ColorContainer color={PS_MAIN_RED}>
        <GeneralFooterWrapper />
      </ColorContainer>
    </div>
  );
};
