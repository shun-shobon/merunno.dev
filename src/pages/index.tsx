import { Box, Heading } from '@chakra-ui/react'
import IndexCss from '../../styles/index.module.css'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>merunno.dev</title>
        <meta charSet="utf-8" />
        <meta content="merunnoのポートフォリオです。" name="description" />

        {/* OGPタグ */}
        <meta property={"og:url"} content={"https://www.merunno.dev/"} />
        <meta property={"og:title"} content={"merunno のポートフォリオ"}/>
        <meta property={"og:description"} content={"merunnoが作ったポートフォリオです。"}/>
      </Head>
      <div className={IndexCss.Bodys}>
        <div className={IndexCss.BodyIcon}>
          <Image
            src="https://github.com/merunno.png"
            alt={'merunno'}
            width={100}
            height={100}
          />
        </div>
        <Heading>Hello!</Heading>
        <p>© merunno 2021</p>
      </div>

      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>名前</div>
        <p>merunno</p>
      </div>
      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>年齢</div>
        <p>16 * 2005/09/02</p>
      </div>
      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>勉強中の言語</div>
        <p>TypeScript / Java</p>
      </div>
      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>その他</div>
        <p>JetBrains IDE. GitHub, Git, Markdownなど</p>
      </div>
      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>プロジェクト・参加事</div>
        <div>
          <p>◆ Battlefield Japan Community</p>
          <p>→ 運営・開発者</p>
        </div>
        <div>
          <p>◆ Azisaba Network</p>
          <p>→ 運営・開発協力者(Afnw)</p>
        </div>
      </div>

      <div className={IndexCss.Title}>
        <div className={IndexCss.content}>連絡</div>
        <div className={IndexCss.link}>
          <p>連絡はこちらまでよろしくお願いします。</p>
          <p>(Discord DMなどはフレンド以外切ってます。)</p>
          <u>me@merunno.dev</u>
        </div>
        <div className={IndexCss.content}>ソースコード等</div>
        <div className={IndexCss.link}>
          <a
            href="https://github.com/merunno/merunno.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>リポジトリ(merunno/merunno.dev)</u>
          </a>
        </div>
        <div className={IndexCss.content}>リンク集</div>
        <div className={IndexCss.link}>
          <a
            href="https://github.com/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>GitHub</u>
          </a>
          ・
          <a
            href="https://twitter.com/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Twitter</u>
          </a>
          ・
          <a
            href="https://twitter.com/_meru92_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Twitter(鍵)</u>
          </a>
          ・
          <a
            href="https://keybase.io/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>KeyBase</u>
          </a>
        </div>
      </div>
    </Box>
  )
}
