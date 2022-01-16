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
            <Link href='/projects'>
              Projects
            </Link>
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            <Link href='/contacts'>
              Contacts
            </Link>
          </Button>
        </Circle>
      </div>
    </main>
  )
}
