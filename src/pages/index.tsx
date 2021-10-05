import { Box, Heading, Center } from '@chakra-ui/react'
import IndexCss from '../../styles/index.module.css'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Content_tab from '../component/_tab'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>merunno.dev</title>
        <meta charSet="utf-8" />
        <meta content="merunnoのポートフォリオです。" name="description" />
      </Head>
      <div className={IndexCss.Bodys}>
        <div className={IndexCss.BodyIcon}>
          <Image
            src="https://github.com/merunno.png"
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
