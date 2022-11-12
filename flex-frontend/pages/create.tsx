import Head from "next/head"
import {
  Container,
  Divider,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAccount } from "wagmi"
import { encode } from "js-base64"
import { Web3Storage, File } from "web3.storage"
import { v4 as uuidv4 } from "uuid"

import Header from "../components/create/header"
import { QueryData } from "../types"
import { addQueryData } from "../firebase/queryData"

export default function Create() {
  const toast = useToast()
  const { address } = useAccount()
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [chain, setChain] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [endpoint, setEndpoint] = useState<string>("")
  const [query, setQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async () => {
    setIsLoading(true)
    const storage = new Web3Storage({
      token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY || "",
    })

    try {
      const id = uuidv4()

      const queryPayload = {
        id,
        name,
        endpoint,
        query,
        creator: address,
      }

      const buffer = Buffer.from(JSON.stringify(queryPayload))
      const dataFile = [new File([buffer], `${id}.json`)]
      const cid = await storage.put(dataFile)

      const payload: QueryData = {
        id,
        name,
        description,
        chain,
        category,
        endpoint,
        query: encode(query),
        cid,
        creator: address,
      }

      await addQueryData(payload)

      setName("")
      setDescription("")
      setChain("")
      setCategory("")
      setEndpoint("")
      setQuery("")
      toast({
        title: `Create Query Sucessfull`,
        status: "success",
        isClosable: true,
        position: "top-right",
      })
    } catch (error) {
      console.log(error)
      toast({
        title: `Can not create query`,
        status: "error",
        isClosable: true,
        position: "top-right",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>Flex Node - Explore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        minWidth="100vw"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Header />
        <Divider width="80%" my="5" />
        <Stack width="80%" gap="2">
          <FormControl>
            <FormLabel fontWeight="bold">Query Name</FormLabel>
            <Input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl fontWeight="bold">
            <FormLabel>Description</FormLabel>
            <Input
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl fontWeight="bold">
            <FormLabel>Chain</FormLabel>
            <Select
              value={chain}
              onChange={(e) => setChain(e.target.value)}
              placeholder="Select Chain"
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="optimism">Optimism</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Category</FormLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select Category"
            >
              <option value="defi">Defi</option>
              <option value="nft">NFT</option>
              <option value="social">Social</option>
              <option value="insurance">Insurance</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Endpoint</FormLabel>
            <Input
              value={endpoint}
              type="text"
              onChange={(e) => setEndpoint(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Query Command</FormLabel>
            <Textarea
              value={query}
              rows={12}
              onChange={(e) => setQuery(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Creator</FormLabel>
            <Input readOnly value={address} type="text" />
          </FormControl>
          <Button isLoading={isLoading} type="submit" onClick={onSubmit}>
            Create
          </Button>
        </Stack>
      </Container>
    </div>
  )
}
