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
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/analytics/prod/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/analytics-testnet/prod/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/analytics",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/analytics-testnet/prod/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko/prod/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko-hekla/prod/gn",
  },
  [SUBGRAPH_NAMES.FARMS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/farms/prod/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/farms-testnet/prod/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/farms2",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/farms-testnet/prod/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko/prod/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko-hekla/prod/gn",
  },
  [SUBGRAPH_NAMES.BLOCKS]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/blocks/prod/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/blocks-testnet/prod/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/blocks2",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/blocks-testnet/prod/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko/prod/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko-hekla/prod/gn",
  },
  [SUBGRAPH_NAMES.ICE_TOKEN]: {
    [ChainId.MANTLE]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/icetoken/prod/gn",
    [ChainId.MANTLE_TESTNET]: "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/icetoken-testnet/prod/gn",
    [ChainId.TELOS]: "https://telos.subgraph.swapsicle.io/subgraphs/name/swapsicle/ice-token",
    [ChainId.TELOS_TESTNET]: "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/icetoken-testnet/prod/gn",
    [ChainId.TAIKO]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko/prod/gn",
    [ChainId.TAIKO_TESTNET]: "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko-hekla/prod/gn",
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