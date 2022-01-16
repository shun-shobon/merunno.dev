import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import { ColorModeScript } from '@chakra-ui/react'

import Introduction from '../component/introduction.component'
import SelfDescription from '../component/self_description.component'
import PageButton from '../component/button.component'
import RepositoryButton from '../component/github_link.component'
import theme from '../config/theme'

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
        <Introduction/> {/* アイコン */}
        <SelfDescription /> {/* タイトル */}
        <PageButton /> {/* ボタン */}

      <Center h={'200px'}>
        {/* TODO: ダークテーマの本格実装: https://github.com/merunno/merunno.dev/issues/86 */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RepositoryButton />
      </Center>
    </Box>
  )
}
