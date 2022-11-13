import Head from "next/head"
import {
  Box,
  Container,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react"

import Header from "../components/guide/header"

export default function Explor() {
  return (
    <div>
      <Head>
        <title>Flex Node - Explore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        minWidth="100vw"
        minHeight="80vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Header />
        <Divider width="80%" my="5" />
        <Stack width="80%">gang</Stack>
      </Container>
    </div>
  )
}
