import React from 'react'
import { Box, Button } from '@mui/material'

const DetailButton = ({ width, height, m }) => {
    return (
        <Box width={width} height={height} border='1px solid #CEBD88' bgcolor='transparent' m={m} display='flex' justifyContent='center' alignItems='center' p='.3rem'>
            <Button variant='contained' sx={{
                width: '100%', height: '100%',
                bgcolor: '#CEBD88', color: '#fff', borderRadius: '0', '&:hover': {
                    bgcolor: '#CEBD88',
                }
            }}>
                Ətraflı
            </Button>
        </Box>
    )
}

export default DetailButton