/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Merkle, MerkleInterface } from "../Merkle";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610490806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635a9a49c714610030575b600080fd5b61004a600480360381019061004591906102b7565b610060565b6040516100579190610341565b60405180910390f35b60008082905060005b85518110156101065760008682815181106100875761008661035c565b5b602002602001015190508083106100c65780836040516020016100ab9291906103ac565b604051602081830303815290604052805190602001206100f0565b82816040516020016100d99291906103ac565b604051602081830303815290604052805190602001205b92505080806100fe90610411565b915050610069565b508381149150509392505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101768261012d565b810181811067ffffffffffffffff821117156101955761019461013e565b5b80604052505050565b60006101a8610114565b90506101b4828261016d565b919050565b600067ffffffffffffffff8211156101d4576101d361013e565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6101fd816101ea565b811461020857600080fd5b50565b60008135905061021a816101f4565b92915050565b600061023361022e846101b9565b61019e565b90508083825260208201905060208402830185811115610256576102556101e5565b5b835b8181101561027f578061026b888261020b565b845260208401935050602081019050610258565b5050509392505050565b600082601f83011261029e5761029d610128565b5b81356102ae848260208601610220565b91505092915050565b6000806000606084860312156102d0576102cf61011e565b5b600084013567ffffffffffffffff8111156102ee576102ed610123565b5b6102fa86828701610289565b935050602061030b8682870161020b565b925050604061031c8682870161020b565b9150509250925092565b60008115159050919050565b61033b81610326565b82525050565b60006020820190506103566000830184610332565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b6103a66103a1826101ea565b61038b565b82525050565b60006103b88285610395565b6020820191506103c88284610395565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061041c82610407565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561044f5761044e6103d8565b5b60018201905091905056fea264697066735822122031a1ae0c7ecfc563078b6ae85f120bd1701996d6dff00423d809d4ebe437d3d664736f6c634300080b0033";

export class Merkle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Merkle> {
    return super.deploy(overrides || {}) as Promise<Merkle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Merkle {
    return super.attach(address) as Merkle;
  }
  connect(signer: Signer): Merkle__factory {
    return super.connect(signer) as Merkle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleInterface {
    return new utils.Interface(_abi) as MerkleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Merkle {
    return new Contract(address, _abi, signerOrProvider) as Merkle;
  }
}
