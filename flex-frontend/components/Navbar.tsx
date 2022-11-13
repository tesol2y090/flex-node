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
        <>
          <Flex>
            <Link href="/explor">
              <Button variant="ghost">Explore</Button>
            </Link>
            <Link href="/create">
              <Button variant="ghost">Create</Button>
            </Link>
            <Link href="/guide">
              <Button variant="ghost">Guide</Button>
            </Link>
          </Flex>
          <ConnectButton chainStatus="icon" accountStatus="avatar" />
        </>
      )}
    </Flex>
  )
}

export default Navbar
