import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { cards } from 'constants/_data';
import { DateContainer, CardContainer, BoxDateContainer, CardFullContainer } from './style';

export const NewsCards = () => {
  return (
    <Grid container justifyContent="space-between">
      {cards.map((card) => {
        return (
          <Grid item sx={{ mb: 7.5 }}>
            {card.fullImg ? (
              <CardFullContainer img={card.pathImg}>
                <CardContent sx={{ mt: 45, p: 2.5, fontSize: 11 }}>
                  <BoxDateContainer sx={{ pt: 0 }}>
                    <DateContainer variant={'h4'}>{card.data}</DateContainer>
                    <Typography sx={{ ml: 0.5, color: 'primary.light' }} variant={'h5'}>
                      {card.tag}
                    </Typography>
                  </BoxDateContainer>
                  <Typography sx={{ mb: 1.2, color: 'primary.light' }} variant={'h3'}>
                    {card.title}
                  </Typography>
                  <Typography variant={'body1'}>{card.article}</Typography>
                </CardContent>
              </CardFullContainer>
            ) : (
              <CardContainer>
                <CardMedia
                  sx={{ display: 'block', width: 640, borderRadius: '2px' }}
                  height={'360'}
                  component="img"
                  image={card.pathImg}
                  alt="post_1"
                />
                <CardContent sx={{ m: 0, p: 0, fontSize: 11 }}>
                  <BoxDateContainer>
                    <DateContainer variant={'h4'}>{card.data}</DateContainer>
                    <Typography sx={{ ml: 0.5 }} variant={'h5'}>
                      {card.tag}
                    </Typography>
                  </BoxDateContainer>
                  <Typography sx={{ mb: 1.2 }} variant={'h3'}>
                    {card.title}
                  </Typography>
                  <Typography variant={'body1'}>{card.article}</Typography>
                </CardContent>
              </CardContainer>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};
