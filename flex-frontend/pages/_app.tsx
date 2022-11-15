import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"
import { Container } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit"
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    // alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    publicProvider(),
  ]
)

const { wallets } = getDefaultWallets({
  appName: "Flex Node",
  chains,
})

const demoAppInfo = {
  appName: "Flex Node",
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
          <Container
            minWidth="100vw"
            minHeight="100vh"
            display="flex"
            alignItems="center"
            flexDirection="column"
            position="relative"
            padding="0"
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
