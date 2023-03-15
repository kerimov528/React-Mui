import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import DetailButton from '../../../components/blocks/DetailButton'

const SmallLogo = ({ src }) => {
    return (
        <Box width='20%' height='10rem' component='img' src={src} sx={{ objectFit: 'contain' }} />
    )
}

const VideoSection = () => {
    return (
        <Box sx={{ background: "url('https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/ca811c3c8dd49c63edd179184fa0c8132ae29c9b?fuid=1067019850073163099') no-repeat", p: '60px 135px 0' }}>
            <Box height='535px' p={'2rem 0 2rem 2rem'}>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <Stack spacing={3} width='50%' color='#fff'>
                        <Stack maxWidth='max-content' alignItems='center'>
                            <Typography component='h5' fontFamily='Montserrat' fontSize='24px' fontWeight='600'>Lorem Ipsum</Typography>
                            <Box width='4rem' mt='.3rem' component='img' src='/assest/vector.png' />
                        </Stack>
                        <Typography maxWidth='480px' component='body' fontFamily='Montserrat' fontSize='14px' fontWeight='400' lineHeight='28px'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <DetailButton width='170px' height='52px' />
                    </Stack>
                    <Box width='660px' height='420px' sx={{ background: "url('https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/5810fa3a1c64c85c7abb43b1ff2aa7ae9ec66fff?fuid=1067019850073163099') no-repeat", backgroundSize: '100%' }} />
                </Stack>
            </Box>
            <Stack width='100%' direction='row' spacing={2} height='180px' >
                <SmallLogo src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/3c54f3e0795a4f101609c9182906146300769019?fuid=1067019850073163099'} />
                <SmallLogo src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/57b90c7bc798847871191efc35b2a4d79b4f6fd6?fuid=1067019850073163099'} />
                <SmallLogo src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/5fda199023b2b6ed19f93e5cf21fac9ae7f3f232?fuid=1067019850073163099'} />
                <SmallLogo src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/868ebde07a6e970ae883f055a6b6f27b34c51247?fuid=1067019850073163099'} />
                <SmallLogo src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/ce20809f1994c3999fbaf2a99daab8f059e528ee?fuid=1067019850073163099'} />
            </Stack>
        </Box>
    )
}

export default VideoSection