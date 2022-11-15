import React from "react"
import Link from "next/link"
import { Heading, Flex, Button, Image } from "@chakra-ui/react"

const Header = ({ name, chain }: { name?: string; chain?: string }) => {
  return (
    <Flex pt="5" width="80%" align="center" justify="space-between">
      <Flex align="center" gap="5">
        <Image
          borderRadius="full"
          boxSize="64px"
          src={`/chain/${chain?.toLowerCase()}.png`}
          alt="ethereum"
        />
        <Heading as="h1" size="xl" noOfLines={1}>
          {name}
        </Heading>
      </Flex>
      <Link href="/explor">
        <Button variant="ghost">Back</Button>
      </Link>
    </Flex>
  )
}

export default Header
