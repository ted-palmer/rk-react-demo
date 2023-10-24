import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { mainnet, goerli, sepolia, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { ReservoirKitProvider } from "@reservoir0x/reservoir-kit-ui";
import { reservoirChains } from "@reservoir0x/reservoir-sdk";

const { chains, publicClient } = configureChains(
  [mainnet, goerli, sepolia, polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "ReservoirKit Sandbox",
  projectId: "Your wallet connect projectId",
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <ReservoirKitProvider
        options={{
          apiKey: "",
          chains: [
            {
              ...reservoirChains.mainnet,
              active: true
            }
          ]
        }}
      >
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </ReservoirKitProvider>
    </WagmiConfig>
  </StrictMode>
);