const hre = require('hardhat')

const _initBaseURI='ipfs://QmYFKKHBvfTWSu5ydZqf3h7PHQZLCv6fpCoNWMigxw8UvY/'

async function main() {

  // Deploy the contract
  const theRainbowTribez = await hre.ethers.getContractFactory('TheRainbowTribez')
  const TheRainbowTribez = await theRainbowTribez.deploy(
    _initBaseURI)
  await TheRainbowTribez.deployed()

  console.log('TheRainbowTribez deployed to:', TheRainbowTribez.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
