import { AvatarCards } from 'components/avatarCards';
import { NewsCards } from 'components/newsCards';
import { cards, cardsSlice2 } from 'constants/_data';
import React from 'react';
import { LinkPosts } from './style';

export const CardsContainer = () => {
  return (
    <div>
      <LinkPosts variant={'subtitle2'}>Последнее</LinkPosts>
      <NewsCards cards={cards} />
      <AvatarCards />
      <NewsCards cards={cardsSlice2} />
    </div>
  );
};
