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
        <Text fontSize="5xl" lineHeight="1.2" fontWeight="bold">
          Query data from every <br /> into your smart contract
        </Text>
        <Text fontSize="xl" mt="4">
          Flex node allows user query on-chain data from the graph into <br />
          your smart contract by chainlink node and store it on ipfs.
        </Text>
        <Button width="30%" mt="8">
          Launch app
        </Button>
      </Box>
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
          src="/jumboton.jpg"
        />
      </Box>
    </Flex>
  )
}

export default Jumbotron
