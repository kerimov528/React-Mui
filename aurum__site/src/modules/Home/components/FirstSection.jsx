import React from 'react'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import ImgMediaCard from './Card'

const FirstSection = () => {
    return (
        <Box width='100%'
            sx={{ background: "url('https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/9bab736bceacfa839f2a44117800ff56316394b1?fuid=1067019850073163099') no-repeat", backgroundSize: '100%', p: '70px 135px' }}>

            <Box ></Box>
            <Stack direction='row' spacing={2} alignItems='center' mb='60px' justifyContent='space-between'>
                <Box width='50%'>
                    <Stack maxWidth='10rem' alignItems='center'>
                        <Typography variant='h5' fontSize='20px' fontFamily='Dancing Script' fontWeight='700' lineHeight='24px' color='#CEBD88' >Niyə biz?</Typography>
                        <Typography variant='h6' fontFamily='Montserrat' fontSize='28px' fontWeight='600' color='#28364B' lineHeight='34px' m='0.2rem' alignSelf='start'>Niyə biz?</Typography>
                        <Box component='img' src='/assest/vector.png' />
                    </Stack>

                    <Typography variant='body1' width='560px' mt='1rem' fontFamily='Montserrat' fontWeight='400' fontSize='14px' lineHeight='26px'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Box>
                <Box width='520px' height='344px'
                    sx={{
                        border: '20px solid rgba(206, 189, 136, 0.33)'
                    }}>
                    <Box component='img' width='100%' height='100%' src='https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/2f1c64289f403c02c5e28ecdebab7f5557d11428?fuid=1067019850073163099' sx={{ objectFit: 'cover' }} />
                </Box>
            </Stack >

            <Stack maxWidth='10rem' alignItems='center'>
                <Typography variant='h5' fontSize='20px' fontFamily='Dancing Script' fontWeight='700' lineHeight='24px' color='#CEBD88' >Xidmətlər</Typography>
                <Typography variant='h6' fontFamily='Montserrat' fontSize='28px' fontWeight='600' color='#28364B' lineHeight='34px' m='0.2rem' alignSelf='start'>Xidmətlər</Typography>
                <Box component='img' src='/assest/vector.png' />
            </Stack>

            <Stack direction={'row'} mt='2rem' justifyContent='space-between'>
                <ImgMediaCard img={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/ea035d4eb4468c13b8e204e6e830c97ae74da7bc?fuid=1067019850073163099'} />
                <ImgMediaCard img={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/fa36ed0b9645d5963ef5d3537095caf35d24ca0f?fuid=1067019850073163099'} />
                <ImgMediaCard img={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/de93df0be6c15ef5a1d62d16de3cc340c938514e?fuid=1067019850073163099'} />
            </Stack>
        </Box >
    )
}

export default FirstSection