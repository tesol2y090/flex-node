import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Text, Button, Flex } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Navbar = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <Flex pt="5" width="80%" height="20" align="center" justify="space-between">
      <Text fontSize="xl" fontWeight="bold">
        Flex Node
      </Text>
      {pathname === "/" ? (
        <Link href="/explor">
          <Button>Launch app</Button>
        </Link>
      ) : (
        <ConnectButton chainStatus="icon" accountStatus="avatar" />
      )}
    </Flex>
  )
}

export default Navbar
