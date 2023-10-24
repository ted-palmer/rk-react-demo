import {
  BidModal,
  CollectModal,
  ListModal,
} from "@reservoir0x/reservoir-kit-ui";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function App() {
  return (
    <div className="App">
      <h1>ReservoirKit QuickStart Sandbox</h1>
      <ConnectButton />
      {/* <CollectModal
        trigger={<button>Collect</button>}
        collectionId="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
        mode="preferMint"
        onConnectWallet={() => {
          console.log("hey");
        }}
        onCollectComplete={(data) => {
          console.log("Collect Complete", data);
        }}
        onCollectError={(error, data) => {
          console.log("Collect Error", error, data);
        }}
        onClose={(data, currentStep) => {
          console.log("CollectModal Closed");
        }}
      /> */}
      <BidModal
        trigger={<button>Place Bid</button>}
        collectionId="0x02ba59d1a7ce03144ac5474042f93b88680e9968"
        tokenId="1"
        attribute={{
          key: "Fur",
          value: "Gold",
        }}
        onBidComplete={(data) => {
          console.log("Bid Complete", data);
        }}
        onBidError={(error, data) => {
          console.log("Bid Transaction Error", error, data);
        }}
        onClose={(data, stepData, currentStep) => {
          console.log("BidModal Closed");
        }}
      />

      <ListModal
        trigger={<button>List Item</button>}
        collectionId="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
        tokenId="1"
        currencies={[
          {
            contract: "0x0000000000000000000000000000000000000000",
            symbol: "ETH",
          },
          {
            contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            symbol: "USDC",
            decimals: 6,
          },
        ]}
        oracleEnabled={false}
        onGoToToken={() => console.log("Awesome!")}
        onListingComplete={(data) => {
          console.log("Listing Complete", data);
        }}
        onListingError={(error, data) => {
          console.log("Transaction Error", error, data);
        }}
        onClose={(data, stepData, currentStep) => {
          console.log("ListModal Closed");
        }}
      />
    </div>
  );
}
