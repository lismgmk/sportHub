import { Typography } from '@mui/material';
import { AvatarCards } from 'components/avatarCards';
import { NewsCards } from 'components/newsCards';
import { cards, cardsSlice2 } from 'constants/_data';
import React from 'react';
import { ContainerCardsMain } from './style';

export const CardsContainer = () => {
  return (
    <ContainerCardsMain>
      <Typography variant={'subtitle2'}>Последнее</Typography>
      <NewsCards cards={cards} />
      <AvatarCards />
      <NewsCards cards={cardsSlice2} />
    </ContainerCardsMain>
  );
};
