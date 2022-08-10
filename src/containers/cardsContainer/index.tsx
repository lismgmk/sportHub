import { NewsCards } from 'components/newsCards';
import React from 'react';
import { ContainerCardsMain } from './style';

export const CardsContainer = () => {
  return (
    <ContainerCardsMain>
      <NewsCards />
    </ContainerCardsMain>
  );
};
