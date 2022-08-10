import { ContactForm } from 'components/contactForm';
import { SocialIconBox } from 'components/socialIconBox';
import { WrapperContact } from 'components/wrapperContact';
import { contactsSubtitle } from 'constants/_data';
import { PS_MAIN_RED, PS_OPTIONAL_BLACK } from 'mainStyles/GlobalTheme';
import React from 'react';
import { ContainerCardsMain } from './style';

export const ContactsContainer = () => {
  return (
    <ContainerCardsMain container justifyContent={'space-between'}>
      <WrapperContact subtitle={contactsSubtitle[0].name} bg={PS_MAIN_RED}>
        <SocialIconBox />
      </WrapperContact>
      <WrapperContact subtitle={contactsSubtitle[1].name} bg={PS_OPTIONAL_BLACK}>
        <ContactForm />
      </WrapperContact>
    </ContainerCardsMain>
  );
};
