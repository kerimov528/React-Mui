import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom'

const Header = () => {

    const menuList = ['Ana səhifə', 'Haqqımızda', 'Xidmətlər', 'Gəmilər', 'Karyera', 'Qalereya', 'Əlaqə']

    const languages = ['Az', 'Ru', 'En']

    return (
        <Container
            disableGutters
            maxWidth='1440px'
            sx={{ minHeight: '50vh', p: '35px 135px', position: 'relative' }}
            className='headerImage'
        >
            <Box className='headerBg' />

            {/* first common section (logo) */}
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

                    {
                        languages.map((language, keys) => {
                            return (
                                <Typography key={keys} variant='caption' mr='0.5rem'>
                                    <NavLink to={`/#${language.toLowerCase()}`} className={`languageLink ${({ isActive }) =>
                                        isActive ? "active" : ""
                                        }`}>
                                        {language}
                                    </NavLink>
                                </Typography>
                            )
                        })
                    }
                </Box>
            </Box>

            <Box className='headerMenuLine' mt='1rem' width='100%' height='5rem' position='relative'>
                <Box width='100%' display='flex' alignItems='center' justifyContent='center' position='absolute' bottom='0' >
                    {menuList.map((menuItem, keys) => {
                        return (
                            <Box key={keys} variant='text' textAlign='center' sx={{ width: '145px', height: '3rem', color: '#fff' }} className='menuListButton'>
                                <NavLink to={`/${menuItem.toLowerCase().split(' ').join('-')}`} className={`link ${({ isActive }) =>
                                    isActive ? "active" : ""
                                    }`} style={{ display: 'block', height: '100%', p: 'auto 1rem' }}>
                                    {menuItem}
                                </NavLink>
                            </Box>
                        )
                    })}
                </Box>
            </Box>

        </Container>
    )
}

export default Header