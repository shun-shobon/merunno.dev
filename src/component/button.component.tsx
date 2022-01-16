import { Button, Circle } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function ButtonC() {
  return (
    <main>
      <div>
        <Circle w='100%' h='50px'>
          <Button colorScheme='teal' variant='ghost'>
            <Link href='/about_me'>
              About me
            </Link>
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            <Link href='/contects'>
              Contacts
            </Link>
          </Button>
          {/* TODO: いつかポートフォリオ内に移植する : https://github.com/merunno/merunno.dev/issues/85 */}
          <a
            href="https://m92n.notion.site/80be3825bc264434a2799a5bb5586caf?v=2ae5b85320e549a2bae7c4496d53a48b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button colorScheme='teal' variant='ghost' >
              Projects
            </Button>
          </a>
        </Circle>
      </div>
    </main>
  )
}
