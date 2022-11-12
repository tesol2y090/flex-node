import React from "react"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex pb="5" mt="5" flexDirection="column" align="center">
      <Flex gap="5" mb="2">
        <Image
          src="/icon/github-icon.svg"
          width="24"
          height="24"
          alt="github"
        />
        <Image
          src="/icon/twitter-icon.svg"
          width="24"
          height="24"
          alt="github"
        />
      </Flex>
      © 2022 flexnode, Inc. All rights reserved.
    </Flex>
  )
}

export default Footer
