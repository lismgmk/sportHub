import { Grid, Container } from '@mui/material';
import { ContactForm } from 'components/contactForm';
import { SocialIconBox } from 'components/socialIconBox';
import { WrapperContact } from 'components/wrapperContact';
import { sxResponsiveContainerWeightContent } from 'components/wrapperContact/style';
import { contactsSubtitle } from 'constants/_data';
import { LinkPosts } from 'containers/cardsContainer/style';
import { CustomWrapperBox, sxContents } from 'containers/colorContainer/style';
import { PS_MAIN_RED, PS_OPTIONAL_BLACK, PS_MAIN_BACKGROUND } from 'mainStyles/GlobalTheme';
import React from 'react';

export const ContactsContainer = () => {
  return (
    <CustomWrapperBox bgColor={PS_MAIN_BACKGROUND}>
      <Container maxWidth={'xl'} disableGutters sx={sxResponsiveContainerWeightContent}>
        <Grid container spacing={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 0 }} sx={sxContents}>
          <Grid item xl={6} lg={6} md={8} sm={12} xs={12}>
            <LinkPosts variant={'subtitle2'}>{contactsSubtitle[0].name}</LinkPosts>
            <WrapperContact bg={PS_MAIN_RED}>
              <SocialIconBox />
            </WrapperContact>
          </Grid>
          <Grid item xl={6} lg={6} md={4} sm={12} xs={12}>
            <LinkPosts variant={'subtitle2'}>{contactsSubtitle[1].name}</LinkPosts>
            <WrapperContact bg={PS_OPTIONAL_BLACK}>
              <ContactForm />
            </WrapperContact>
          </Grid>
        </Grid>
      </Container>
    </CustomWrapperBox>
  );
};
