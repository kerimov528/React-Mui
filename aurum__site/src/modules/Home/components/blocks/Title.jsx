import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Title = ({title}) => {
    return (
        <Stack maxWidth='10rem' alignItems='center'>
            <Typography variant='h5' fontSize='20px' fontFamily='Dancing Script' fontWeight='700' lineHeight='24px' color='#CEBD88' >{title}</Typography>
            <Typography variant='h6' fontFamily='Montserrat' fontSize='28px' fontWeight='600' color='#28364B' lineHeight='34px' m='0.2rem' alignSelf='start'>{title}</Typography>
            <Box component='img' src='/assest/vector.png' />
        </Stack>
    )
}

export default Title