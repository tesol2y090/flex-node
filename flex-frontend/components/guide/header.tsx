import React from "react"
import Link from "next/link"
import { Heading, Button, Flex } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex pt="5" width="80%" align="center" justify="space-between">
      <Heading as="h1" size="xl" noOfLines={1}>
        Guide
      </Heading>
      {/* <Link href="/create">
        <Button>Create</Button>
      </Link> */}
    </Flex>
  )
}

export default Header
