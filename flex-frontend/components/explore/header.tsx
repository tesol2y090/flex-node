import React from "react"
import Link from "next/link"
import { Heading, Button, Flex } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex pt="5" width="80%" align="center" justify="space-between">
      <Heading as="h1" size="xl" noOfLines={1}>
        Explore
      </Heading>
      <Link href="/create">
        <Button bg="#3894A3" color="#fff" _hover={{ opacity: "83%" }}>
          Create
        </Button>
      </Link>
    </Flex>
  )
}

export default Header
