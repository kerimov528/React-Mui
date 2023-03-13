import React from 'react'
import { Typography, Box } from '@mui/material'


const HeaderTitle = ({ title }) => {
    return (
        <Box height='250px' mt='2rem' display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='h1' fontSize='2rem' color='#fff' fontFamily='Montserrat' fontWeight='600' textTransform='uppercase'>
                {title}
            </Typography>
        </Box>
    )
}

export default HeaderTitle