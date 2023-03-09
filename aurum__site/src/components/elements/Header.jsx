import React from 'react'
import { Container, Typography, Box, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { height } from '@mui/system';

const Header = () => {
    return (
        <Container
            disableGutters
            maxWidth='1440px'
            sx={{ minHeight: '100vh', p: '35px 135px', position: 'relative' }}
            className='headerImage'
        >
            <Box className='headerBg' />

            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' style={{ color: '#CEBD88', fontSize: '16px' }} >
                    <FacebookIcon style={{ fontSize: '18px', marginRight: '0.5rem' }} />
                    <LinkedInIcon style={{ fontSize: '18px', marginRight: '0.5rem' }} />
                    <TwitterIcon style={{ fontSize: '18px', marginRight: '0.5rem' }} />
                    <InstagramIcon style={{ fontSize: '18px', marginRight: '0.5rem' }} />
                    <YouTubeIcon />
                </Box>
                <Box component='img' src='https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/f965bf25b5ce80b47d9f322820c9a3367d2a7994?fuid=1067019850073163099'></Box>
                <Box display='flex' alignItems='center' color='#fff'>
                    <Typography variant='caption' mr='0.5rem'>Az</Typography>
                    <Typography variant='caption' mr='0.5rem'>En</Typography>
                    <Typography variant='caption'>Ru</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Header