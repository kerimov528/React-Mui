import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ img }) {
    return (
        <Card sx={{ maxWidth: 345, p: '1rem' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    LOREM İPSUM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ mx: 'auto' }}>Share</Button>
            </CardActions>
        </Card>
    );
}