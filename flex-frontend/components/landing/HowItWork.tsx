import React from "react"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"

const Jumbotron = () => {
  return (
    <Flex height="70vh" width="80%" gap="5">
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
        height="100%"
        justifyContent="center"
      >
        <Image
          alt="data"
          width="774"
          height="626"
          layout="relative"
          src="/explore.png"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="5xl"
          lineHeight="1.2"
          fontWeight="bold"
          align="center"
          bgGradient="linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%);"
          bgClip="text"
        >
          The better way <br />
          to query data on-chain.
        </Text>
      </Box>
    </Flex>
  )
}

export default Jumbotron
