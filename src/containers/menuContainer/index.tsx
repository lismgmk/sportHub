import { lowPages } from 'constants/_data';
import { nanoid } from 'nanoid';
import React from 'react';
import { ContainerLowMenu, LowerMenuButton } from './style';

export const MenuContainer = () => {
  return (
    <ContainerLowMenu>
      {lowPages.map((page) => (
        <LowerMenuButton key={nanoid()} onClick={() => {}}>
          {page.name}
        </LowerMenuButton>
      ))}
    </ContainerLowMenu>
  );
};
