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
          height={{ lg: 520, md: 520, sm: 205 }}
          tag={headerTitles.header.tag}
          title={headerTitles.header.title}
        >
          <UpMenuContainer />
        </GeneralHeaderWrapper>
      </ColorContainer>
      <ColorContainer color={PS_MAIN_RED}>
        <MenuContainer />
      </ColorContainer>
      <ColorContainer color={PS_MAIN_BACKGROUND}>
        <CardsContainer />
      </ColorContainer>
      <ColorContainer bgImage={headerTitles.middle.pathImg}>
        <GeneralHeaderWrapper
          // height={536}
          height={{ lg: 536, md: 276, sm: 276 }}
          // paddingTitle={31}
          paddingTitle={{ lg: 31, md: 12, sm: 9 }}
          tag={headerTitles.middle.tag}
          title={headerTitles.middle.title}
        />
      </ColorContainer>
      <ColorContainer color={PS_MAIN_BACKGROUND}>
        <ContactsContainer />
      </ColorContainer>
      <ColorContainer bgImage={headerTitles.footer.pathImg}>
        <GeneralHeaderWrapper
          height={{ lg: 536, md: 276, sm: 276 }}
          // height={536}
          // paddingTitle={31}
          paddingTitle={{ lg: 31, md: 12, sm: 9 }}
          article={headerTitles.footer.article}
          title={headerTitles.footer.title}
        />
      </ColorContainer>
      <ColorContainer color={PS_MAIN_RED}>
        <GeneralFooterWrapper />
      </ColorContainer>
    </div>
  );
};
