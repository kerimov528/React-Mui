import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom'

const Header = ({ component }) => {

    const menuList = ['Ana səhifə', 'Haqqımızda', 'Xidmətlər', 'Gəmilər', 'Karyera', 'Qalereya', 'Əlaqə']

    const languages = ['Az', 'Ru', 'En']

    return (
        <Container
            disableGutters
            maxWidth='100%'
            sx={{
                background: "url('https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/c8d3927f004ca35f5abcb748be5bdca222fe2ad9?fuid=1067019850073163099') no-repeat",
                backgroundSize: 'cover', backgroundPosition: 'center 80%', zIndex: '0',
                p: '35px 135px', position: 'relative'
            }}
        >
            {/* background shadow  */}
            <Box width='100%' height='100%' position='absolute' top='0' left
                ='0' zIndex='-1' sx={{ background: 'linear-gradient(180deg, #28364B 0%, rgba(40, 54, 75, 0.77) 46.44%, rgba(40, 54, 75, 0) 100%)' }} />

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

            {/* menu list items section*/}
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

            {/* header title  */}
            {component}
        </Container >
    )
}

export default Header