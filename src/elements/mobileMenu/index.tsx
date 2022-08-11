import { SvgIcon, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { upPages } from 'constants/_data';
import * as React from 'react';
import { BurgerSvg } from 'svgIcons/BurgerSvg';

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
      <IconButton onClick={handleClick}>
        <SvgIcon sx={{ width: 48, color: 'primary.light' }} component={BurgerSvg} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'primary.light',
            width: '100%',
          },
          '& .MuiMenu-list': {
            color: 'primary.dark',
          },
        }}
      >
        {upPages.map((page) => {
          return (
            <MenuItem
              sx={{
                color: 'primary.dark',
                textAlign: 'center',
                padding: '10px',
                display: 'block',
                borderBottom: '2px solid',
                ':first-child': {
                  borderTop: '2px solid',
                },
              }}
              onClick={handleClose}
            >
              {page.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
