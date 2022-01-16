import React from 'react';
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react';

export default function Github_linkComponent() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>このPortfolioについて</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>© merunno 2021-2022</PopoverHeader>
        <PopoverBody>
          <a
            href="https://github.com/merunno/merunno.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button colorScheme="teal" variant="ghost">
              <u>リポジトリ</u>
            </Button>
          </a>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
