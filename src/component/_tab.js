import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import About from './pages/about'

export default function _tab() {
  return (
    <main>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>自己紹介</Tab>
          <Tab>プロジェクト</Tab>
          <Tab>リンク・その他</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}
