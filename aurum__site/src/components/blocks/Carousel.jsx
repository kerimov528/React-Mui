import React from 'react'
import { Typography, Stack } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import DetailButton from '../blocks/DetailButton'

const Carousel = () => {
    return (
        <>
            <Swiper
                height='100%'
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ background: '', padding: '3rem 2rem' }}
            >
                <SwiperSlide>
                    <Stack direction='column' justifyContent='center' textAlign='center'>
                        <Typography variant='h4' color='#fff'>
                            The standard Lorem Ipsum passage
                        </Typography>
                        <Typography variant='body1' fontSize='18px' lineHeight='30px' color='#fff' p='2rem' maxWidth='880px' m='0 auto' fontFamily='Montserrat'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <DetailButton width='220px' height='60px' m='1rem auto 2rem' />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack direction='column' justifyContent='center' textAlign='center'>
                        <Typography variant='h4' color='#fff'>
                            The standard Lorem Ipsum passage
                        </Typography>
                        <Typography variant='body1' fontSize='18px' lineHeight='30px' color='#fff' p='2rem' maxWidth='880px' m='0 auto' fontFamily='Montserrat'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <DetailButton width='220px' height='60px' m='1rem auto 2rem' />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack direction='column' justifyContent='center' textAlign='center'>
                        <Typography variant='h4' color='#fff'>
                            The standard Lorem Ipsum passage
                        </Typography>
                        <Typography variant='body1' fontSize='18px' lineHeight='30px' color='#fff' p='2rem' maxWidth='880px' m='0 auto' fontFamily='Montserrat'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <DetailButton width='220px' height='60px' m='1rem auto 2rem' />
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel