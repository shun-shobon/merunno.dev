import React from "react"
import Image from "next/image"

import introductionCSS from '../styles/introduction.module.css'

export default function introduction() {
  return (
    <main className={introductionCSS.main}>
      <div className={introductionCSS.image}>
        <Image src={"https://github.com/merunno.png"} alt={"merunnoのアイコン"} width={100} height={100}/>
      </div>
    </main>
  )
}
