import React from "react"
import Image from "next/image"
import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
  return (
    <Flex pb="5" mt="10" flexDirection="column" align="center">
      <Flex gap="5" mb="2">
        <Link href="https://github.com/tesol2y090/flex-node" target="_blank">
          <Image
            src="/icon/github-icon.svg"
            width="20"
            height="20"
            alt="github"
          />
        </Link>
        <Link href="https://www.twitter.com/" target="_blank">
          <Image
            src="/icon/twitter-icon.svg"
            width="20"
            height="20"
            alt="github"
          />
        </Link>
      </Flex>
      <Text fontSize="xs" fontWeight="bold">
        © 2022 flexnode, Inc. All rights reserved.
      </Text>
    </Flex>
  )
}

export default Footer
