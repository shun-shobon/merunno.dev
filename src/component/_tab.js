import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import About from './pages/about'
import Link from './pages/link-other'

export default function _tab() {
  return (
    <main>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>自己紹介</Tab>
          <Tab>リンク・その他</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Link />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}
