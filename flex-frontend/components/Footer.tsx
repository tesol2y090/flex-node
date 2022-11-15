import React from "react"
import Image from "next/image"
import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex pb="5" mt="5" flexDirection="column" align="center">
      <Flex gap="5" mb="2">
        <Image
          src="/icon/github-icon.svg"
          width="20"
          height="20"
          alt="github"
        />
        <Image
          src="/icon/twitter-icon.svg"
          width="20"
          height="20"
          alt="github"
        />
      </Flex>
      <Text fontSize="xs" fontWeight="bold">
        © 2022 flexnode, Inc. All rights reserved.
      </Text>
    </Flex>
  )
}

export default Footer
