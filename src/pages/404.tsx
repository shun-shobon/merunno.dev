import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import { BackButton } from '../component/backButton.component';

export default function NotFound() {
  return (
    <main>
      <div>
        <Center h={'100px'}>
          <Text
            bgGradient="linear(to-l, #FF1312, #FF2F6B)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            404 : Not found
          </Text>
        </Center>

        <Center h={'200px'}>
          <BackButton />
        </Center>
      </div>
    </main>
  );
}
