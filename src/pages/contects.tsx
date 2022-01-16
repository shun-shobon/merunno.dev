import { Button, Circle, HStack, Text } from '@chakra-ui/react'
import React from 'react'

import introductionCSS from '../styles/introduction.module.css'
import AboutMeCSS from '../styles/about_me.module.css'
import { BackButton } from '../component/backButton.component'

export default function Contects() {
  return (
    <main>
      <div>
        <div className={'title'}>
          <Circle w='100%' h='100px'>
            <Text
              bgGradient='linear(to-l, #FF7479, #B3FFFF)'
              bgClip='text'
              fontSize='3xl'
              fontWeight='extrabold'
            >
              連絡(リンク)
            </Text>
          </Circle>
        </div>

        <div className={'SNS'}>
          <Circle w='100%' h='50px'>
            <HStack>
              <a
                href="https://github.com/merunno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme='teal' variant='solid' >
                  GitHub
                </Button>
              </a>
              <a
                href="https://twitter.com/2I92me_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme='teal' variant='solid' >
                  Twitter
                </Button>
              </a>
              <a
                href="https://keybase.io/merunno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme='teal' variant='solid' >
                  KeyBase
                </Button>
              </a>
            </HStack>
          </Circle>
        </div>

        <div className={'mail'}>
          <Circle w={'100%'} h={'150px'}>
            <div className={introductionCSS.main}>
              <div className={AboutMeCSS.Title}>
                <div className={AboutMeCSS.content}>メール</div>
                <p>me@merunno.dev</p>
              </div>
            </div>
          </Circle>
        </div>

        <div className={'back'}>
          <Circle w={'100%'} h={'200px'}>
            <BackButton />
          </Circle>
        </div>
      </div>
    </main>
  )
}
