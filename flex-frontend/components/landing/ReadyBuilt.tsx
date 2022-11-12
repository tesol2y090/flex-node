import React from "react"
import { Flex, Box, Text, Button } from "@chakra-ui/react"

const Jumbotron = () => {
  const cardData = [
    { img: "", text: "Credit Scoring" },
    { img: "", text: "Insurance" },
    { img: "", text: "Governance" },
    { img: "", text: "Marketplace" },
    { img: "", text: "Analytics" },
    { img: "", text: "Social" },
  ]

  return (
    <Flex
      flexDirection="column"
      height="80vh"
      width="80%"
      gap="1"
      align="center"
    >
      <Text fontSize="5xl" lineHeight="1.2" fontWeight="bold">
        Reday to built
      </Text>
      <Text fontSize="xl" mt="4">
        Developer can leverage on-chain data to your application.
      </Text>
      <Flex mt="5" w="100%" justify="space-between" wrap="wrap" gap="5">
        {cardData.map((data, index) => (
          <Box
            rounded="md"
            boxShadow="md"
            p="6"
            bg="gray.200"
            w="30%"
            h="208"
            display="flex"
            justifyContent="center"
            key={index}
          >
            <Text fontSize="xl" fontWeight="bold">
              {data.text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Jumbotron
