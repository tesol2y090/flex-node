import React from "react"
import { Heading, Flex } from "@chakra-ui/react"

const Header = ({ name }: { name?: string }) => {
  return (
    <Flex pt="5" width="80%" align="center" justify="space-between">
      <Heading as="h1" size="xl" noOfLines={1}>
        {name || "Create Query"}
      </Heading>
    </Flex>
  )
}

export default Header
