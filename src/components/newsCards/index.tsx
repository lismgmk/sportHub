import { Grid, Typography } from '@mui/material';
import { cardsType } from 'constants/_data';
import { nanoid } from 'nanoid';
import {
  DateContainer,
  BoxDateContainer,
  CardFullContainer,
  CardCustomMedia,
  CardFullContent,
  CardImgContent,
  sxNewsCards,
} from './style';

export const NewsCards = (props: { cards: cardsType[] }) => {
  return (
    <Grid container spacing={2} justifyContent="space-between" sx={sxNewsCards}>
      {props.cards.map((card) => {
        return (
          <Grid key={nanoid()} item>
            {card.fullImg ? (
              <CardFullContainer sx={{ justifyContent: 'end' }} img={card.pathImg}>
                <CardFullContent>
                  <BoxDateContainer>
                    <DateContainer variant={'h4'}>{card.data}</DateContainer>
                    <Typography sx={{ ml: 0.5, color: 'primary.light' }} variant={'h5'}>
                      {card.tag}
                    </Typography>
                  </BoxDateContainer>
                  <Typography sx={{ mb: 1.2, color: 'primary.light' }} variant={'h3'}>
                    {card.title}
                  </Typography>
                  <Typography variant={'body1'}>{card.article}</Typography>
                </CardFullContent>
              </CardFullContainer>
            ) : (
              <CardFullContainer sx={{ justifyContent: 'space-between' }}>
                <CardCustomMedia image={card.pathImg} />
                <CardImgContent>
                  <BoxDateContainer>
                    <DateContainer variant={'h4'}>{card.data}</DateContainer>
                    <Typography sx={{ ml: 0.5 }} variant={'h5'}>
                      {card.tag}
                    </Typography>
                  </BoxDateContainer>
                  <Typography sx={{ mb: 1.2, pr: 1 }} variant={'h3'}>
                    {card.title}
                  </Typography>
                  <Typography variant={'body1'}>{card.article}</Typography>
                </CardImgContent>
              </CardFullContainer>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};
