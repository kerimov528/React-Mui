import React from 'react'
import { Box, Stack } from '@mui/material'
import Title from '../components/blocks/Title'
import { BlogCards } from './blocks/Card'

const Blogs = () => {
    return (
        <Box bgcolor='rgba(206, 189, 136, 0.2)' height='705px' p='70px 135px'>
            <Title title='Bloglar' />

            <Stack direction={'row'} justifyContent='space-between' mt='1rem'>
                <BlogCards src={'https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/de93df0be6c15ef5a1d62d16de3cc340c938514e?fuid=1067019850073163099'} />
            </Stack>
        </Box>
    )
}

export default Blogs