import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export function BackButton() {
  return (
    <main>
      <Button colorScheme='ghost'>
        <Link href='/'>
          戻る
        </Link>
      </Button>
    </main>
  )
}
