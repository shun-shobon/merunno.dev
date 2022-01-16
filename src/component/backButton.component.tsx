import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export function BackButton() {
  return (
    <main>
      <Link href='/'>
        <Button colorScheme='teal' variant='ghost'>
          <Link href='/'>
            戻る
          </Link>
        </Button>
      </Link>
    </main>
  )
}
