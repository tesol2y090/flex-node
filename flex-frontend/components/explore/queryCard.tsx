import React from "react"
import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const QueryCard = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" width="100%" padding="6">
      <Flex justify="space-between" align="center">
        <Flex gap="2" width="30%">
          <Image
            borderRadius="full"
            boxSize="64px"
            src="/chain/ethereum.png"
            alt="ethereum"
          />
          <VStack align="left" justify="center">
            <Text fontWeight="bold">Query Name</Text>
            <Text lineHeight="1">Commound borrows data</Text>
          </VStack>
        </Flex>
        <VStack align="left" justify="center" width="23%">
          <Text fontWeight="bold">Network</Text>
          <Text lineHeight="1">Ethereum</Text>
        </VStack>
        <VStack align="left" justify="center" width="23%">
          <Text fontWeight="bold">Protocol</Text>
          <Text lineHeight="1">Compound</Text>
        </VStack>
        <VStack align="left" justify="center" width="23%">
          <Text fontWeight="bold">Category</Text>
          <Text lineHeight="1">Defi</Text>
        </VStack>
        <ArrowForwardIcon w={8} h={8} />
      </Flex>
    </Box>
  )
}

export default QueryCard
