/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PublicMinting, PublicMintingInterface } from "../PublicMinting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nft_",
        type: "address",
      },
      {
        internalType: "address",
        name: "minting_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "SetDuration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxQuantity",
        type: "uint256",
      },
    ],
    name: "SetMaxQuantity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Start",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Stop",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "addSalt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "indexes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxQuantity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minting",
    outputs: [
      {
        internalType: "contract Minting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IERC721Custom",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "range",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    name: "setDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxQuantity_",
        type: "uint256",
      },
    ],
    name: "setMaxQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405262093a8060045560146005553480156200001d57600080fd5b50604051620017b0380380620017b0833981810160405281019062000043919062000223565b6200006362000057620000ed60201b60201c565b620000f560201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200026a565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001eb82620001be565b9050919050565b620001fd81620001de565b81146200020957600080fd5b50565b6000815190506200021d81620001f2565b92915050565b600080604083850312156200023d576200023c620001b9565b5b60006200024d858286016200020c565b925050602062000260858286016200020c565b9150509250929050565b611536806200027a6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063a0712d68116100a2578063dbdff2c111610071578063dbdff2c114610297578063e640cf7d146102b5578063e6fd48bc146102d3578063f2fde38b146102f1578063f6be71d11461030d57610116565b8063a0712d6814610223578063aa8c217c1461023f578063be9a65551461025d578063d35fbbfb1461026757610116565b8063715018a6116100e9578063715018a61461017d5780637dc2268c146101875780638da5cb5b146101a557806392f8eb94146101c35780639c8be5e4146101f357610116565b806307da68f51461011b5780630fb5a6b41461012557806347ccca02146101435780634a65a57514610161575b600080fd5b610123610329565b005b61012d6103f3565b60405161013a9190610e45565b60405180910390f35b61014b6103f9565b6040516101589190610edf565b60405180910390f35b61017b60048036038101906101769190610f2b565b61041f565b005b6101856104f4565b005b61018f61057c565b60405161019c9190610f79565b60405180910390f35b6101ad6105a2565b6040516101ba9190610fb5565b60405180910390f35b6101dd60048036038101906101d89190610f2b565b6105cb565b6040516101ea9190610e45565b60405180910390f35b61020d60048036038101906102089190610fd0565b6105e3565b60405161021a9190610e45565b60405180910390f35b61023d60048036038101906102389190610f2b565b610619565b005b6102476107d3565b6040516102549190610e45565b60405180910390f35b6102656107d9565b005b610281600480360381019061027c9190611010565b610945565b60405161028e9190610e45565b60405180910390f35b61029f610972565b6040516102ac9190610e45565b60405180910390f35b6102bd6109a7565b6040516102ca9190610e45565b60405180910390f35b6102db6109ad565b6040516102e89190610e45565b60405180910390f35b61030b6004803603810190610306919061108f565b6109b3565b005b61032760048036038101906103229190610f2b565b610aab565b005b610331610b80565b73ffffffffffffffffffffffffffffffffffffffff1661034f6105a2565b73ffffffffffffffffffffffffffffffffffffffff16146103a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039c90611119565b60405180910390fd5b60006003819055503373ffffffffffffffffffffffffffffffffffffffff16427fe1cc44ad90ad02dd0a8c63a8800872fec54272a663d17ece8ee4b3c402643f8060405160405180910390a3565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610427610b80565b73ffffffffffffffffffffffffffffffffffffffff166104456105a2565b73ffffffffffffffffffffffffffffffffffffffff161461049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290611119565b60405180910390fd5b806005819055503373ffffffffffffffffffffffffffffffffffffffff16427f77102933fdbe779e1b9aab314e8cc979af213c5e956794643a7023c47ef600b7836040516104e99190610e45565b60405180910390a350565b6104fc610b80565b73ffffffffffffffffffffffffffffffffffffffff1661051a6105a2565b73ffffffffffffffffffffffffffffffffffffffff1614610570576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056790611119565b60405180910390fd5b61057a6000610b88565b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60066020528060005260406000206000915090505481565b600082826040516020016105f892919061115a565b6040516020818303038152906040528051906020012060001c905092915050565b60006003541161065e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610655906111d2565b60405180910390fd5b600554811161066d5780610671565b6005545b905060075481116106825780610686565b6007545b905060005b818110156107cf5760006106a66106a0610972565b836105e3565b905060006106c3826001806007546106be9190611221565b610945565b905060006106d082610c4c565b90506106db82610d23565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401610738929190611277565b600060405180830381600087803b15801561075257600080fd5b505af1158015610766573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff16427f4e3883c75cc9c752bb1db2e406a822e4a75067ae77ad9a0a4d179f2709b9e1f6836040516107b19190610e45565b60405180910390a350505080806107c7906112a0565b91505061068b565b5050565b60075481565b6107e1610b80565b73ffffffffffffffffffffffffffffffffffffffff166107ff6105a2565b73ffffffffffffffffffffffffffffffffffffffff1614610855576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084c90611119565b60405180910390fd5b42600381905550600060075414156108ff57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aa8c217c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f891906112fe565b6007819055505b3373ffffffffffffffffffffffffffffffffffffffff16427f734cd2a382f4a1f43ba991c09a5f645dc0929abd9f79b2c3b87ec4b9aa207cfd60405160405180910390a3565b6000828383610954919061132b565b8561095f919061138e565b6109699190611221565b90509392505050565b600044423360405160200161098993929190611407565b6040516020818303038152906040528051906020012060001c905090565b60055481565b60035481565b6109bb610b80565b73ffffffffffffffffffffffffffffffffffffffff166109d96105a2565b73ffffffffffffffffffffffffffffffffffffffff1614610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2690611119565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a96906114b6565b60405180910390fd5b610aa881610b88565b50565b610ab3610b80565b73ffffffffffffffffffffffffffffffffffffffff16610ad16105a2565b73ffffffffffffffffffffffffffffffffffffffff1614610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1e90611119565b60405180910390fd5b806004819055503373ffffffffffffffffffffffffffffffffffffffff16427fe95fd841db2cc2ea9dffae4f99b55cf2fc3cb2ef7d87aed6842d34ab30f585d883604051610b759190610e45565b60405180910390a350565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600660008481526020019081526020016000205490506000811415610d0d57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392f8eb94846040518263ffffffff1660e01b8152600401610cc99190610e45565b602060405180830381865afa158015610ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a91906112fe565b90505b6000811415610d1a578290505b80915050919050565b60006006600060075481526020019081526020016000205490506000811415610de757600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392f8eb946007546040518263ffffffff1660e01b8152600401610da39190610e45565b602060405180830381865afa158015610dc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de491906112fe565b90505b6000811415610df65760075490505b600754600660008481526020019081526020016000208190555060076000815480929190610e23906114d6565b91905055505050565b6000819050919050565b610e3f81610e2c565b82525050565b6000602082019050610e5a6000830184610e36565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ea5610ea0610e9b84610e60565b610e80565b610e60565b9050919050565b6000610eb782610e8a565b9050919050565b6000610ec982610eac565b9050919050565b610ed981610ebe565b82525050565b6000602082019050610ef46000830184610ed0565b92915050565b600080fd5b610f0881610e2c565b8114610f1357600080fd5b50565b600081359050610f2581610eff565b92915050565b600060208284031215610f4157610f40610efa565b5b6000610f4f84828501610f16565b91505092915050565b6000610f6382610eac565b9050919050565b610f7381610f58565b82525050565b6000602082019050610f8e6000830184610f6a565b92915050565b6000610f9f82610e60565b9050919050565b610faf81610f94565b82525050565b6000602082019050610fca6000830184610fa6565b92915050565b60008060408385031215610fe757610fe6610efa565b5b6000610ff585828601610f16565b925050602061100685828601610f16565b9150509250929050565b60008060006060848603121561102957611028610efa565b5b600061103786828701610f16565b935050602061104886828701610f16565b925050604061105986828701610f16565b9150509250925092565b61106c81610f94565b811461107757600080fd5b50565b60008135905061108981611063565b92915050565b6000602082840312156110a5576110a4610efa565b5b60006110b38482850161107a565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006111036020836110bc565b915061110e826110cd565b602082019050919050565b60006020820190508181036000830152611132816110f6565b9050919050565b6000819050919050565b61115461114f82610e2c565b611139565b82525050565b60006111668285611143565b6020820191506111768284611143565b6020820191508190509392505050565b7f4d696e74696e6720686173206e6f742073746172746564000000000000000000600082015250565b60006111bc6017836110bc565b91506111c782611186565b602082019050919050565b600060208201905081810360008301526111eb816111af565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061122c82610e2c565b915061123783610e2c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561126c5761126b6111f2565b5b828201905092915050565b600060408201905061128c6000830185610fa6565b6112996020830184610e36565b9392505050565b60006112ab82610e2c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156112de576112dd6111f2565b5b600182019050919050565b6000815190506112f881610eff565b92915050565b60006020828403121561131457611313610efa565b5b6000611322848285016112e9565b91505092915050565b600061133682610e2c565b915061134183610e2c565b925082821015611354576113536111f2565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061139982610e2c565b91506113a483610e2c565b9250826113b4576113b361135f565b5b828206905092915050565b60008160601b9050919050565b60006113d7826113bf565b9050919050565b60006113e9826113cc565b9050919050565b6114016113fc82610f94565b6113de565b82525050565b60006114138286611143565b6020820191506114238285611143565b60208201915061143382846113f0565b601482019150819050949350505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006114a06026836110bc565b91506114ab82611444565b604082019050919050565b600060208201905081810360008301526114cf81611493565b9050919050565b60006114e182610e2c565b915060008214156114f5576114f46111f2565b5b60018203905091905056fea2646970667358221220ba154fc1549604bb514c61273708910ff1cc09e2f9a91504f01d9e2bf0669dd364736f6c634300080b0033";

export class PublicMinting__factory extends ContractFactory {
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
    nft_: string,
    minting_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PublicMinting> {
    return super.deploy(
      nft_,
      minting_,
      overrides || {}
    ) as Promise<PublicMinting>;
  }
  getDeployTransaction(
    nft_: string,
    minting_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(nft_, minting_, overrides || {});
  }
  attach(address: string): PublicMinting {
    return super.attach(address) as PublicMinting;
  }
  connect(signer: Signer): PublicMinting__factory {
    return super.connect(signer) as PublicMinting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublicMintingInterface {
    return new utils.Interface(_abi) as PublicMintingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PublicMinting {
    return new Contract(address, _abi, signerOrProvider) as PublicMinting;
  }
}
