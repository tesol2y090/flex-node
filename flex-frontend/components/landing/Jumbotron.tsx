import React from "react"
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react"
import Link from "next/link"

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
        <Text
          fontSize="5xl"
          lineHeight="1.2"
          fontWeight="bold"
          bgGradient="linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%);"
          bgClip="text"
        >
          Query on-chain data <br /> into your smart contract
        </Text>
        <Text fontWeight="400" fontSize="xl" mt="4">
          Flex node allows user query on-chain data from other chain into <br />
          your smart contract by chainlink node and store it on ipfs.
        </Text>
        <Link href="/explor">
          <Button
            bgGradient="linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%);"
            _hover={{ opacity: "83%" }}
            color="#fff"
            width="30%"
            mt="8"
          >
            Launch app
          </Button>
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
        height="100%"
        justifyContent="center"
      >
        <Image alt="data" src="/explore.png" borderRadius="12" boxShadow="md" />
      </Box>
    </Flex>
  )
}

export default Jumbotron
