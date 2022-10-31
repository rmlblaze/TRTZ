const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const Alch_key = process.env.NEXT_PUBLIC_ALCH_KEY

const config = {
  title: 'The Rainbow Tribez',
  description: 'TRTZ Mint DAPP',
  contractAddress: '0x81C02bA68F257a7735eb6f3d85600edB6B545C8c',
  maxMintAmount: 5,
  WlMaxMintAmount: 1,
  firstCost :0 ,
  wlcost: 0,
  publicSalePrice:0.001,
  maxPerTxWL : 1
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 5, // Goerli
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      {
    walletName: "walletConnect",
    infuraKey: Alch_key
  }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }