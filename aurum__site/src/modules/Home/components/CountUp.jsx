import React from 'react'
import { Stack } from '@mui/material'
import { CountUpCard } from './blocks/Card'

const Statiscs = () => {
    return (
        <Stack direction={'row'} justifyContent='space-evenly' height='408px'
            sx={{ background: "url('https://www.figma.com/file/aRn8pcY2WlbhNDwxbCH6mt/image/7628f372160d0fbaa8530a349d14dfb8097582f7?fuid=1067019850073163099') no-repeat", backgroundSize: '100%', p: '45px 135px' }} position='relative' zIndex='0'>
            <CountUpCard number={'90'} />
            <CountUpCard number={'142'} />
            <CountUpCard number={'59'} />
        </Stack>
    )
}

export default Statiscs