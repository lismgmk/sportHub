import { SvgIcon, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { upPages } from 'constants/_data';
import { nanoid } from 'nanoid';
import * as React from 'react';
import { BurgerSvg } from 'svgIcons/BurgerSvg';
import { sxSvgIcon, sxMenu, sxMenuItem } from './style';

export const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton sx={{ m: 0, p: 0 }} onClick={handleClick}>
        <SvgIcon sx={sxSvgIcon} component={BurgerSvg} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={sxMenu}>
        {upPages.map((page) => {
          return (
            <MenuItem key={nanoid()} sx={sxMenuItem} onClick={handleClose}>
              {page.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
