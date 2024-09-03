const ChainId = {
  ETHEREUM: 1,
  MANTLE: 5000,
  MANTLE_TESTNET: 5003,
  TELOS: 40,
  TELOS_TESTNET: 41,
  TAIKO: 167000,
  TAIKO_TESTNET: 167009,
}

const SUBGRAPH_NAMES = {
  ANALYTICS: "cryptoalgebra/analytics",
  FARMS: "cryptoalgebra/farms", // Note: old "farms" were migrated, thus we have (currently used) "farms2"
  BLOCKS: "cryptoalgebra/blocks",
  ICE_TOKEN: "swapsicle/ice-token",
}

const SUBGRAPH_URLS = {
  [SUBGRAPH_NAMES.ANALYTICS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/analytics/2024-07-11/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/analytics-testnet/2024-08-27/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/analytics",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/analytics-testnet/2024-08-29/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko/1.0.0/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko-hekla/1.0.0/gn",
  },
  [SUBGRAPH_NAMES.FARMS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/farms/-/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/farms-testnet/2024-08-27/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/farms2",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/farms-testnet/2024-08-29/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko/1.0.0/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko-hekla/1.0.0/gn",
  },
  [SUBGRAPH_NAMES.BLOCKS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/blocks/-/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/blocks-testnet/2024-08-27/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/blocks2",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/blocks-testnet/2024-08-29/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko/1.0.0/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko-hekla/1.0.0/gn",
  },
  [SUBGRAPH_NAMES.ICE_TOKEN]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/subgraphs/name/swapsicle/icetoken",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/subgraphs/name/swapsicle/icetoken-testnet",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/swapsicle/ice-token",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/ice-token-testnet/2024-08-29/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko/1.0.0/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko-hekla/1.0.0/gn",
  },
}

const getSubgraphUrl = (subgraphName, chainId) => {
  return SUBGRAPH_URLS[subgraphName][chainId]
}

module.exports = {
  ChainId,
  SUBGRAPH_NAMES,
  getSubgraphUrl,
}