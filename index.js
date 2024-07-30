const ChainId = {
  ETHEREUM: 1,
  MANTLE: 5000,
  MANTLE_TESTNET: 5003,
  TELOS: 40,
  TELOS_TESTNET: 41,
}

const SUBGRAPH_NAMES = {
  ANALYTICS: "cryptoalgebra/analytics",
  FARMS: "cryptoalgebra/farms", // farms2, on testnet farms, but this doesn't matter as the proper url is below anyway
  BLOCKS: "cryptoalgebra/blocks",
}

const SUBGRAPH_URLS = {
  [SUBGRAPH_NAMES.ANALYTICS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/analytics/2024-07-11/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/analytics-testnet/-/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/analytics",
    [ChainId.TELOS_TESTNET]: "https://testnet.telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/analytics",
  },
  [SUBGRAPH_NAMES.FARMS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/farms/-/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/farms-testnet/-/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/farms2",
    [ChainId.TELOS_TESTNET]: "https://testnet.telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/farms",
  },
  [SUBGRAPH_NAMES.BLOCKS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/blocks/-/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/blocks-testnet/-/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/blocks2",
    [ChainId.TELOS_TESTNET]: "https://testnet.telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/blocks",
  }
}

const getSubgraphUrl = (subgraphName, chainId) => {
  return SUBGRAPH_URLS[subgraphName][chainId]
}

module.exports = {
  ChainId,
  SUBGRAPH_NAMES,
  getSubgraphUrl,
}