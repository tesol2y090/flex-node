import React from "react"
import Link from "next/link"
import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { QueryData } from "../../types"

const QueryCard = ({ data }: { data: QueryData }) => {
  return (
    <Link href={`/query/${data.id}`}>
      <Box
        _hover={{
          background: "gray.50",
          boxShadow: "m",
        }}
        borderWidth="1px"
        borderRadius="lg"
        width="100%"
        padding="6"
      >
        <Flex justify="space-between" align="center">
          <Flex gap="2" width="30%">
            <Image
              borderRadius="full"
              boxSize="64px"
              src={`/chain/${data.chain}.png`}
              alt="ethereum"
            />
            <VStack align="left" justify="center">
              <Text fontWeight="bold">Query Name</Text>
              <Text lineHeight="1">{data?.name}</Text>
            </VStack>
          </Flex>
          <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Network</Text>
            <Text lineHeight="1">{data?.chain}</Text>
          </VStack>
          <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Protocol</Text>
            <Text lineHeight="1">{data?.protocol}</Text>
          </VStack>
          <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Category</Text>
            <Text lineHeight="1">{data?.category}</Text>
          </VStack>
          <ArrowForwardIcon w={8} h={8} />
        </Flex>
      </Box>
    </Link>
  )
}

export default QueryCard
