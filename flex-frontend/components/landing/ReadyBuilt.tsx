import React from "react"
import { Flex, Box, Text, Image, Stack } from "@chakra-ui/react"

const Jumbotron = () => {
  const cardData = [
    { img: "/build-card/credit.svg", text: "Credit Scoring" },
    { img: "/build-card/insurance.svg", text: "Insurance" },
    { img: "/build-card/governance.svg", text: "Governance" },
    { img: "/build-card/marketplace.svg", text: "Marketplace" },
    { img: "/build-card/analytic.svg", text: "Analytics" },
    { img: "/build-card/social.svg", text: "Social" },
  ]

  return (
    <Flex
      flexDirection="column"
      height="80vh"
      width="80%"
      gap="1"
      align="center"
    >
      <Text
        fontSize="5xl"
        lineHeight="1.2"
        fontWeight="bold"
        bgGradient="linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%);"
        bgClip="text"
      >
        Reday to built
      </Text>
      <Text fontWeight="400" fontSize="xl" mt="4">
        Developer can leverage on-chain data to your application.
      </Text>
      <Flex mt="5" w="100%" justify="space-between" wrap="wrap" gap="5">
        {cardData.map((data, index) => (
          <Box
            rounded="md"
            boxShadow="md"
            p="6"
            bgGradient="linear-gradient(89.99deg, rgba(151, 71, 255, 0.16) -0.5%, rgba(128, 255, 217, 0.174087) 51.27%, rgba(255, 198, 113, 0.188) 102.41%);"
            w="30%"
            h="208"
            display="flex"
            justifyContent="center"
            key={index}
          >
            <Stack justify="center" align="center">
              <Image alt={data.text} src={data.img} />
              <Text fontSize="xl" fontWeight="bold">
                {data.text}
              </Text>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Jumbotron
