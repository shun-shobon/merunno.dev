import React from 'react'
import { Box, Center, Circle, Text } from '@chakra-ui/react'

import AboutMeCSS from '../styles/about_me.module.css'
import introductionCSS from '../styles/introduction.module.css'
import { BackButton } from '../component/backButton.component'
import Head from 'next/head'

export default function About() {
  return (
    <Box>
      <Head>
        <title>merunno.dev / 自己紹介</title>
        <meta charSet='utf-8' />
        <meta content='merunnoのポートフォリオ * 自己紹介' name='description' />

        {/* OGPタグ */}
        <meta property={'og:url'} content={'https://www.merunno.dev/'} />
        <meta property={'og:title'} content={'merunno のポートフォリオ'} />
        <meta property={'og:description'} content={'merunnoが作ったポートフォリオです。'} />
      </Head>

      <div className={'title'}>
        <Circle w='100%' h='100px'>
          <Text
            bgGradient='linear(to-l, #FF7479, #B3FFFF)'
            bgClip='text'
            fontSize='3xl'
            fontWeight='extrabold'
          >
            自己紹介
          </Text>
        </Circle>
      </div>

      {/* TODO: もっといい方法で書き直す。: https://github.com/merunno/merunno.dev/issues/84 */}
      <div className={introductionCSS.main}>
        <div className={AboutMeCSS.Title}>
          <div className={AboutMeCSS.content}>名前</div>
          <p>merunno</p>
        </div>
        <div className={AboutMeCSS.Title}>
          <div className={AboutMeCSS.content}>年齢</div>
          <p>16</p>
        </div>
        <div className={AboutMeCSS.Title}>
          <div className={AboutMeCSS.content}>誕生日</div>
          <p>2005/09/02</p>
        </div>
        <div className={AboutMeCSS.Title}>
          <div className={AboutMeCSS.content}>勉強中の言語</div>
          <p>TypeScript / Java</p>
        </div>
        <div className={AboutMeCSS.Title}>
          <div className={AboutMeCSS.content}>その他</div>
          <p>JetBrains IDE. GitHub, Git, Markdownなど</p>
        </div>
      </div>

      <Center h={'200px'}>
        <BackButton />
      </Center>
    </Box>
  )
}
