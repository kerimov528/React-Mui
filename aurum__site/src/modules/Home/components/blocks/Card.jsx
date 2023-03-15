import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DetailButton from '../../../../components/blocks/DetailButton'


const WhyUsImgCard = ({ img }) => {
    return (
        <Card sx={{ maxWidth: 360, height: '400px', p: '1rem' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img}
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" fontFamily='Montserrat' fontSize='16px' lineHeight='22px' fontWeight='600'>
                    LOREM İPSUM
                </Typography>
                <Typography variant="body2" fontFamily='Montserrat' fontSize='12px' lineHeight='22px' fontWeight='400'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Typography>
            </CardContent>
            <CardActions>
                <DetailButton width='150px' height='48px' m='0 auto' />
            </CardActions>
        </Card>
    );
}

export default WhyUsImgCard

export const CountUpCard = ({ number }) => {
    return (
        <Card sx={{ maxWidth: 300, height: '350px', p: '1rem', bgcolor: 'transparent', border: 'none', boxShadow: 'none' }}>
            <CardMedia
                component="h1"
                height="45"
                sx={{ textAlign: 'center', fontSize: '120px', color: '#CEBD88', fontWeight: '400', fontFamily: 'Cinzel' }}
            >
                {number}
            </CardMedia>
            <CardContent sx={{ textAlign: 'center', p: '0' }}>
                <Typography gutterBottom variant="h5" fontFamily='Montserrat' fontSize='20px' lineHeight='22px' fontWeight='600' mb='1rem'>
                    LOREM İPSUM
                </Typography>
                <Typography variant="body2" fontFamily='Montserrat' fontSize='12px' lineHeight='22px' fontWeight='400'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </Typography>
            </CardContent>
        </Card>
    )
}

export const BlogCards = ({ src }) => {
    return (
        <Card sx={{ maxWidth: 300, height: '350px', p: '1rem', bgcolor: 'transparent', border: 'none', boxShadow: 'none' }}>
            <CardMedia
                width='100%'
                component="img"
                height="235"
                src={src}
                sx={{ textAlign: 'center', fontSize: '120px', color: '#CEBD88', fontWeight: '400', fontFamily: 'Cinzel', border: '20px solid rgba(206, 189, 136, 0.33)', mb: '.2rem' }}
            >
                {/* {number} */}
            </CardMedia>
            <CardContent sx={{ textAlign: 'center', p: '0' }}>
                <Typography gutterBottom variant="h5" fontFamily='Montserrat' fontSize='20px' lineHeight='22px' fontWeight='600' mb='1rem'>
                    LOREM İPSUM
                </Typography>
                <Typography variant="body2" fontFamily='Montserrat' fontSize='12px' lineHeight='22px' fontWeight='400'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </Typography>
            </CardContent>
        </Card>
    )
}
