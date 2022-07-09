import {
  Box,
  Text,
  Heading,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
const HomeepagePage = () => {
  return (
    <>
      <MetaTags title="Homeepage" description="Homeepage page" />

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        ALLWORKREMOTE.COM
      </Text>
      <p>
        Find me in <code>./web/src/pages/HomeepagePage/HomeepagePage.tsx</code>
      </p>
      <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
      <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <p>
        My default route is named <code>homeepage</code>, link to me with `
        <Link to={routes.homeepage()}>Homeepage</Link>`
        <Link to={routes.kursy()}>Kursy</Link>`
      </p>
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
      >
        Click here
      </Box>
      <Box sx={{ '--my-color': '#53c8c4' }}>
        <Heading color="var(--my-color)" size="lg">
          This uses CSS Custom Properties!
        </Heading>
      </Box>
      <Box borderWidth={2} borderColor="purple.500" p={5} className="my-box">
        <Heading size="lg">
          Hover the box...
          <Box
            as="span"
            color="red.500"
            sx={{
              '.my-box:hover &': {
                color: 'green.500',
              },
            }}
          >
            And I will turn green!
          </Box>
        </Heading>
      </Box>
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <ArticlesCell />
    </>
  )
}

export default HomeepagePage
