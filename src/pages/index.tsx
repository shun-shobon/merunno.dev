import { Box, Heading } from '@chakra-ui/react'
import IndexCss from '../styles/index.module.css'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>merunno.dev</title>
        <meta charSet='utf-8' />
        <meta content='merunnoのポートフォリオです。' name='description' />

        {/* OGPタグ */}
        <meta property={'og:url'} content={'https://www.merunno.dev/'} />
        <meta property={'og:title'} content={'merunno のポートフォリオ'} />
        <meta property={'og:description'} content={'merunnoが作ったポートフォリオです。'} />
      </Head>

    </Box>
  )
}
