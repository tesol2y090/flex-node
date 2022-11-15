import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Text,
  Button,
  Flex,
  Container,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"

const Navbar = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <Container
      display="flex"
      justifyContent="center"
      padding="0"
      minWidth="100%"
      bgGradient="linear-gradient(89.99deg, rgba(151, 71, 255, 0.16) -0.5%, rgba(128, 255, 217, 0.174087) 51.27%, rgba(255, 198, 113, 0.188) 102.41%);"
      shadow="0px 2px 2px #ebebeb;"
    >
      <Flex width="80%" height="20" align="center" justify="space-between">
        <Image
          src="/flex-node-logo.png"
          width={136}
          height={38}
          alt="flex node logo"
        />
        {pathname === "/" ? (
          <Link href="/explor">
            <Button
              bgGradient="linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%);"
              _hover={{ opacity: "83%" }}
              color="#fff"
            >
              Launch app
            </Button>
          </Link>
        ) : (
          <>
            <Tabs variant="unstyled">
              <TabList>
                <Link href="/explor">
                  <Tab
                    _selected={{
                      color:
                        "linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%)",
                      fontWeight: "bold",
                      borderBottom: "4px solid #d3b3fc",
                    }}
                    color="#3894A3"
                  >
                    Explore
                  </Tab>
                </Link>
                <Link href="/create">
                  <Tab
                    _selected={{
                      color:
                        "linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%)",
                      fontWeight: "bold",
                      borderBottom: "4px solid #d3b3fc",
                    }}
                    color="#3894A3"
                  >
                    Create
                  </Tab>
                </Link>
                <Link href="/guide">
                  <Tab
                    _selected={{
                      color:
                        "linear-gradient(90deg, #3894A3 -19.81%, #A661FF 105.58%)",
                      fontWeight: "bold",
                      borderBottom: "4px solid #d3b3fc",
                    }}
                    color="#3894A3"
                  >
                    Guide
                  </Tab>
                </Link>
              </TabList>
            </Tabs>
            {/* <Flex>
              <Link href="/explor">
                <Button variant="ghost">Explore</Button>
              </Link>
              <Link href="/create">
                <Button variant="ghost">Create</Button>
              </Link>
              <Link href="/guide">
                <Button variant="ghost">Guide</Button>
              </Link>
            </Flex> */}
            <ConnectButton chainStatus="icon" accountStatus="avatar" />
          </>
        )}
      </Flex>
    </Container>
  )
}

export default Navbar
