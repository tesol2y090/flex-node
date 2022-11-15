import React from "react"
import Link from "next/link"
import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  Badge,
  TagLabel,
  Tag,
} from "@chakra-ui/react"
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
        borderColor="linear-gradient(89.99deg, rgba(151, 71, 255, 0.064) -0.5%, rgba(128, 255, 217, 0.0696347) 51.27%, rgba(255, 198, 113, 0.0752) 102.41%);"
        width="xl"
        padding="6"
        bgGradient="linear-gradient(89.99deg, rgba(151, 71, 255, 0.064) -0.5%, rgba(128, 255, 217, 0.0696347) 51.27%, rgba(255, 198, 113, 0.0752) 102.41%);"
      >
        <Flex justify="space-between" align="center" minWidth="100%">
          <Flex gap="2">
            <Image
              borderRadius="full"
              boxSize="64px"
              src={`/chain/${data.protocolChain}.png`}
              alt="ethereum"
            />
            <VStack align="left" justify="center">
              <Flex align="center">
                <Text lineHeight="1" fontWeight="bold">
                  {data?.queryName}
                </Text>

                <Badge
                  borderRadius="4"
                  ml="2"
                  variant="outline"
                  colorScheme="green"
                >
                  {data?.protocolName}
                </Badge>
              </Flex>
              <Text lineHeight="1">{data?.description}</Text>
              <Tag
                variant="outline"
                width="16"
                justifyContent="center"
                borderRadius="16"
              >
                <TagLabel>{data?.category}</TagLabel>
              </Tag>
            </VStack>
          </Flex>
          {/* <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Network</Text>
            <Text lineHeight="1">{data?.protocolChain}</Text>
          </VStack>
          <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Protocol</Text>
            <Text lineHeight="1">{data?.protocolName}</Text>
          </VStack>
          <VStack align="left" justify="center" width="23%">
            <Text fontWeight="bold">Category</Text>
            <Text lineHeight="1">{data?.category}</Text>
          </VStack>
          <ArrowForwardIcon w={8} h={8} /> */}
        </Flex>
      </Box>
    </Link>
  )
}

export default QueryCard
