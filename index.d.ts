declare module 'swapsicle-subgraph-urls' {
  export const ChainId: {
    ETHEREUM: number;
    MANTLE: number;
    MANTLE_TESTNET: number;
    TELOS: number;
    TELOS_TESTNET: number;
    TAIKO: number;
    TAIKO_TESTNET: number;
  };

  export const SUBGRAPH_NAMES: {
    ANALYTICS: string;
    FARMS: string;
    BLOCKS: string;
    ICE_TOKEN: string;
  };

  export const SUBGRAPH_URLS: {
    [key: string]: {
      [key: number]: string
    }
  };

  export function getSubgraphUrl(subgraphName: string, chainId: number): string;
}