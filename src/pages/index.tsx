import { Box, Heading, Center } from '@chakra-ui/react'
import IndexCss from '../../styles/index.module.css'
import React from 'react'
import Image from 'next/image'

import Content_tab from '../component/_tab'

export default function Home() {
  return (
    <Box>
      <div className={IndexCss.Bodys}>
        <div className={IndexCss.BodyIcon}>
          <Image
            src="https://pbs.twimg.com/profile_images/1443618769952149505/c5usFwMx_400x400.jpg"
            alt={'merunno 冬のアイコン'}
            width={100}
            height={100}
          />
        </div>
        <Heading>Hello!</Heading>
        <div className={IndexCss.contentBodys}>
          <Center h="100%">
            <Content_tab />
          </Center>
        </div>
      </div>
    </Box>
  )
}
