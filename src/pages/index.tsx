import { Box } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'

import Introduction from '../component/introduction.component'

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
        <Introduction/>
    </Box>
  )
}
