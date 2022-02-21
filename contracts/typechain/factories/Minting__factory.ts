/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Minting, MintingInterface } from "../Minting";

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
        name: "router_",
        type: "address",
      },
      {
        internalType: "address",
        name: "vrfCoordinator_",
        type: "address",
      },
      {
        internalType: "address",
        name: "link_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
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
    inputs: [],
    name: "OGRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "changeDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "mintAmount",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minted",
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
    name: "ogQuantity",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "randomNumbers",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "requestIds",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IRouter",
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
        internalType: "bytes32",
        name: "_OGRoot",
        type: "bytes32",
      },
    ],
    name: "saveRootOg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_whitelistRoot",
        type: "bytes32",
      },
    ],
    name: "saveRootWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spinFeeETH",
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
    name: "startDate",
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
    name: "startMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopMinting",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "unclaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [],
    name: "whitelistRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitlistQuantity",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405260046006556002600755601460085562093a806009556127106014553480156200002d57600080fd5b5060405162002df738038062002df7833981810160405281019062000053919062000329565b83838173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620000df620000d36200017b60201b60201c565b6200018360201b60201c565b85600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a8190555080600b81905550505050505050620003c5565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200027b826200024e565b9050919050565b6200028d816200026e565b81146200029957600080fd5b50565b600081519050620002ad8162000282565b92915050565b6000819050919050565b620002c881620002b3565b8114620002d457600080fd5b50565b600081519050620002e881620002bd565b92915050565b6000819050919050565b6200030381620002ee565b81146200030f57600080fd5b50565b6000815190506200032381620002f8565b92915050565b60008060008060008060c0878903121562000349576200034862000249565b5b60006200035989828a016200029c565b96505060206200036c89828a016200029c565b95505060406200037f89828a016200029c565b94505060606200039289828a016200029c565b9350506080620003a589828a01620002d7565b92505060a0620003b889828a0162000312565b9150509295509295509295565b60805160a0516129f762000400600039600081816110420152611906015260008181610d17015281816117da01526118ca01526129f76000f3fe6080604052600436106101dc5760003560e01c8063805c378c11610102578063ba41b0c611610095578063f0b5336511610064578063f0b533651461069a578063f2fde38b146106c5578063f887ea40146106ee578063fa4ab1ee14610719576101e3565b8063ba41b0c6146105eb578063d35fbbfb14610607578063da7f02ab14610644578063e640cf7d1461066f576101e3565b80639a65ea26116100d15780639a65ea2614610555578063aa8c217c1461056c578063af00219214610597578063b594f086146105c2576101e3565b8063805c378c146104875780638da5cb5b146104c457806392f8eb94146104ef57806394985ddd1461052c576101e3565b806347ccca021161017a578063682258241161014957806368225824146103f3578063690a66321461041e578063715018a6146104475780637e6a0fbc1461045e576101e3565b806347ccca02146103375780634e71d92d14610362578063594a1e87146103795780635a9a49c7146103b6576101e3565b8063288cdc91116101b6578063288cdc911461027b578063386bfc98146102b85780633e3e0b12146102e357806342f5ddf3146102fa576101e3565b80630b97bc86146101e85780630fb5a6b4146102135780631e7269c51461023e576101e3565b366101e357005b600080fd5b3480156101f457600080fd5b506101fd610756565b60405161020a9190611a9e565b60405180910390f35b34801561021f57600080fd5b5061022861075c565b6040516102359190611a9e565b60405180910390f35b34801561024a57600080fd5b5061026560048036038101906102609190611b2b565b610762565b6040516102729190611a9e565b60405180910390f35b34801561028757600080fd5b506102a2600480360381019061029d9190611b8e565b61077a565b6040516102af9190611bd6565b60405180910390f35b3480156102c457600080fd5b506102cd61079a565b6040516102da9190611c00565b60405180910390f35b3480156102ef57600080fd5b506102f86107a0565b005b34801561030657600080fd5b50610321600480360381019061031c9190611b8e565b610826565b60405161032e9190611a9e565b60405180910390f35b34801561034357600080fd5b5061034c61083e565b6040516103599190611c7a565b60405180910390f35b34801561036e57600080fd5b50610377610864565b005b34801561038557600080fd5b506103a0600480360381019061039b9190611b2b565b610b1b565b6040516103ad9190611c00565b60405180910390f35b3480156103c257600080fd5b506103dd60048036038101906103d89190611dee565b610b33565b6040516103ea9190611bd6565b60405180910390f35b3480156103ff57600080fd5b50610408610be7565b6040516104159190611a9e565b60405180910390f35b34801561042a57600080fd5b5061044560048036038101906104409190611b8e565b610e4a565b005b34801561045357600080fd5b5061045c610ed0565b005b34801561046a57600080fd5b5061048560048036038101906104809190611b8e565b610f58565b005b34801561049357600080fd5b506104ae60048036038101906104a99190611b8e565b610fde565b6040516104bb9190611bd6565b60405180910390f35b3480156104d057600080fd5b506104d9610ffe565b6040516104e69190611e6c565b60405180910390f35b3480156104fb57600080fd5b5061051660048036038101906105119190611eb3565b611028565b6040516105239190611a9e565b60405180910390f35b34801561053857600080fd5b50610553600480360381019061054e9190611ee0565b611040565b005b34801561056157600080fd5b5061056a6110dc565b005b34801561057857600080fd5b50610581611161565b60405161058e9190611a9e565b60405180910390f35b3480156105a357600080fd5b506105ac611167565b6040516105b99190611a9e565b60405180910390f35b3480156105ce57600080fd5b506105e960048036038101906105e49190611eb3565b61116d565b005b61060560048036038101906106009190611f20565b6111f3565b005b34801561061357600080fd5b5061062e60048036038101906106299190611f7c565b611548565b60405161063b9190611a9e565b60405180910390f35b34801561065057600080fd5b50610659611575565b6040516106669190611a9e565b60405180910390f35b34801561067b57600080fd5b5061068461157b565b6040516106919190611a9e565b60405180910390f35b3480156106a657600080fd5b506106af611581565b6040516106bc9190611c00565b60405180910390f35b3480156106d157600080fd5b506106ec60048036038101906106e79190611b2b565b611587565b005b3480156106fa57600080fd5b5061070361167f565b6040516107109190611ff0565b60405180910390f35b34801561072557600080fd5b50610740600480360381019061073b9190611b8e565b6116a5565b60405161074d9190611a9e565b60405180910390f35b60035481565b60095481565b60126020528060005260406000206000915090505481565b60106020528060005260406000206000915054906101000a900460ff1681565b60045481565b6107a86116bd565b73ffffffffffffffffffffffffffffffffffffffff166107c6610ffe565b73ffffffffffffffffffffffffffffffffffffffff161461081c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081390612068565b60405180910390fd5b6000600381905550565b600d6020528060005260406000206000915090505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600e600082815260200190815260200160002060009054906101000a900460ff1680156108f257506010600082815260200190815260200160002060009054906101000a900460ff165b6108fb57600080fd5b6000600d60008381526020019081526020016000205490506000600f600084815260200190815260200160002054905060005b82811015610ae957600061097c838360405160200161094e9291906120a9565b6040516020818303038152906040528051906020012060001c6001806014546109779190612104565b611548565b9050600080601360008481526020019081526020016000205414156109a3578190506109ba565b601360008381526020019081526020016000205490505b600060136000601454815260200190815260200160002054905060008114156109fc576014546013600085815260200190815260200160002081905550610a2a565b6013600060145481526020019081526020016000205460136000858152602001908152602001600020819055505b600160146000828254610a3d919061215a565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933846040518363ffffffff1660e01b8152600401610aa192919061218e565b600060405180830381600087803b158015610abb57600080fd5b505af1158015610acf573d6000803e3d6000fd5b505050505050508080610ae1906121b7565b91505061092e565b506000600e600085815260200190815260200160002060006101000a81548160ff021916908315150217905550505050565b600c6020528060005260406000206000915090505481565b60008082905060005b8551811015610bd9576000868281518110610b5a57610b59612200565b5b60200260200101519050808310610b99578083604051602001610b7e929190612250565b60405160208183030381529060405280519060200120610bc3565b8281604051602001610bac929190612250565b604051602081830303815290604052805190602001205b9250508080610bd1906121b7565b915050610b3c565b508381149150509392505050565b600080600267ffffffffffffffff811115610c0557610c04611cab565b5b604051908082528060200260200182016040528015610c335781602001602082028036833780820191505090505b509050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc79190612291565b81600081518110610cdb57610cda612200565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610d4a57610d49612200565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631f00ca74600b54836040518363ffffffff1660e01b8152600401610de392919061237c565b600060405180830381865afa158015610e00573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e299190612484565b600081518110610e3c57610e3b612200565b5b602002602001015191505090565b610e526116bd565b73ffffffffffffffffffffffffffffffffffffffff16610e70610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90612068565b60405180910390fd5b8060058190555050565b610ed86116bd565b73ffffffffffffffffffffffffffffffffffffffff16610ef6610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610f4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4390612068565b60405180910390fd5b610f5660006116c5565b565b610f606116bd565b73ffffffffffffffffffffffffffffffffffffffff16610f7e610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610fd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcb90612068565b60405180910390fd5b8060048190555050565b600e6020528060005260406000206000915054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60136020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c590612519565b60405180910390fd5b6110d8828261178b565b5050565b6110e46116bd565b73ffffffffffffffffffffffffffffffffffffffff16611102610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114f90612068565b60405180910390fd5b42600381905550565b60145481565b60075481565b6111756116bd565b73ffffffffffffffffffffffffffffffffffffffff16611193610ffe565b73ffffffffffffffffffffffffffffffffffffffff16146111e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e090612068565b60405180910390fd5b8060098190555050565b60006003541415801561121457506009546003546112119190612104565b42105b611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a90612585565b60405180910390fd5b600e6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060009054906101000a900460ff16156112bd57600080fd5b600062015180600354426112d1919061215a565b10156113fe576000336040516020016112ea9190611e6c565b60405160208183030381529060405280519060200120905060006113118460055484610b33565b905060006113228560045485610b33565b9050818061132d5750805b61136c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611363906125f1565b60405180910390fd5b811561138c5760065486116113815785611385565b6006545b93506113a9565b80156113a85760075486116113a157856113a5565b6007545b93505b5b601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054846113f4919061215a565b9350505050611414565b600854831161140d5782611411565b6008545b90505b6000811415611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144f9061265d565b60405180910390fd5b80601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114a79190612104565b9250508190555060006114b86117d3565b90506001600e600083815260200190815260200160002060006101000a81548160ff02191690831515021790555081600d60008381526020019081526020016000208190555080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b6000828383611557919061215a565b8561156291906126ac565b61156c9190612104565b90509392505050565b60065481565b60085481565b60055481565b61158f6116bd565b73ffffffffffffffffffffffffffffffffffffffff166115ad610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614611603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fa90612068565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166a9061274f565b60405180910390fd5b61167c816116c5565b50565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600f6020528060005260406000206000915090505481565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600f60008481526020019081526020016000208190555060016010600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600b547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016118319190611e6c565b602060405180830381865afa15801561184e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611872919061276f565b10156118b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118aa906127e8565b60405180910390fd5b6118c1600a54600b546118c6565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f00000000000000000000000000000000000000000000000000000000000000008486600060405160200161193a929190612808565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401611967939291906128b9565b6020604051808303816000875af1158015611986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119aa9190612923565b5060006119cc8460003060008089815260200190815260200160002054611a16565b90506001600080868152602001908152602001600020546119ed9190612104565b60008086815260200190815260200160002081905550611a0d8482611a52565b91505092915050565b600084848484604051602001611a2f9493929190612950565b6040516020818303038152906040528051906020012060001c9050949350505050565b60008282604051602001611a67929190612995565b60405160208183030381529060405280519060200120905092915050565b6000819050919050565b611a9881611a85565b82525050565b6000602082019050611ab36000830184611a8f565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611af882611acd565b9050919050565b611b0881611aed565b8114611b1357600080fd5b50565b600081359050611b2581611aff565b92915050565b600060208284031215611b4157611b40611ac3565b5b6000611b4f84828501611b16565b91505092915050565b6000819050919050565b611b6b81611b58565b8114611b7657600080fd5b50565b600081359050611b8881611b62565b92915050565b600060208284031215611ba457611ba3611ac3565b5b6000611bb284828501611b79565b91505092915050565b60008115159050919050565b611bd081611bbb565b82525050565b6000602082019050611beb6000830184611bc7565b92915050565b611bfa81611b58565b82525050565b6000602082019050611c156000830184611bf1565b92915050565b6000819050919050565b6000611c40611c3b611c3684611acd565b611c1b565b611acd565b9050919050565b6000611c5282611c25565b9050919050565b6000611c6482611c47565b9050919050565b611c7481611c59565b82525050565b6000602082019050611c8f6000830184611c6b565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ce382611c9a565b810181811067ffffffffffffffff82111715611d0257611d01611cab565b5b80604052505050565b6000611d15611ab9565b9050611d218282611cda565b919050565b600067ffffffffffffffff821115611d4157611d40611cab565b5b602082029050602081019050919050565b600080fd5b6000611d6a611d6584611d26565b611d0b565b90508083825260208201905060208402830185811115611d8d57611d8c611d52565b5b835b81811015611db65780611da28882611b79565b845260208401935050602081019050611d8f565b5050509392505050565b600082601f830112611dd557611dd4611c95565b5b8135611de5848260208601611d57565b91505092915050565b600080600060608486031215611e0757611e06611ac3565b5b600084013567ffffffffffffffff811115611e2557611e24611ac8565b5b611e3186828701611dc0565b9350506020611e4286828701611b79565b9250506040611e5386828701611b79565b9150509250925092565b611e6681611aed565b82525050565b6000602082019050611e816000830184611e5d565b92915050565b611e9081611a85565b8114611e9b57600080fd5b50565b600081359050611ead81611e87565b92915050565b600060208284031215611ec957611ec8611ac3565b5b6000611ed784828501611e9e565b91505092915050565b60008060408385031215611ef757611ef6611ac3565b5b6000611f0585828601611b79565b9250506020611f1685828601611e9e565b9150509250929050565b60008060408385031215611f3757611f36611ac3565b5b6000611f4585828601611e9e565b925050602083013567ffffffffffffffff811115611f6657611f65611ac8565b5b611f7285828601611dc0565b9150509250929050565b600080600060608486031215611f9557611f94611ac3565b5b6000611fa386828701611e9e565b9350506020611fb486828701611e9e565b9250506040611fc586828701611e9e565b9150509250925092565b6000611fda82611c47565b9050919050565b611fea81611fcf565b82525050565b60006020820190506120056000830184611fe1565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061205260208361200b565b915061205d8261201c565b602082019050919050565b6000602082019050818103600083015261208181612045565b9050919050565b6000819050919050565b6120a361209e82611a85565b612088565b82525050565b60006120b58285612092565b6020820191506120c58284612092565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061210f82611a85565b915061211a83611a85565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561214f5761214e6120d5565b5b828201905092915050565b600061216582611a85565b915061217083611a85565b925082821015612183576121826120d5565b5b828203905092915050565b60006040820190506121a36000830185611e5d565b6121b06020830184611a8f565b9392505050565b60006121c282611a85565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121f5576121f46120d5565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b61224a61224582611b58565b61222f565b82525050565b600061225c8285612239565b60208201915061226c8284612239565b6020820191508190509392505050565b60008151905061228b81611aff565b92915050565b6000602082840312156122a7576122a6611ac3565b5b60006122b58482850161227c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6122f381611aed565b82525050565b600061230583836122ea565b60208301905092915050565b6000602082019050919050565b6000612329826122be565b61233381856122c9565b935061233e836122da565b8060005b8381101561236f57815161235688826122f9565b975061236183612311565b925050600181019050612342565b5085935050505092915050565b60006040820190506123916000830185611a8f565b81810360208301526123a3818461231e565b90509392505050565b600067ffffffffffffffff8211156123c7576123c6611cab565b5b602082029050602081019050919050565b6000815190506123e781611e87565b92915050565b60006124006123fb846123ac565b611d0b565b9050808382526020820190506020840283018581111561242357612422611d52565b5b835b8181101561244c578061243888826123d8565b845260208401935050602081019050612425565b5050509392505050565b600082601f83011261246b5761246a611c95565b5b815161247b8482602086016123ed565b91505092915050565b60006020828403121561249a57612499611ac3565b5b600082015167ffffffffffffffff8111156124b8576124b7611ac8565b5b6124c484828501612456565b91505092915050565b7f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00600082015250565b6000612503601f8361200b565b915061250e826124cd565b602082019050919050565b60006020820190508181036000830152612532816124f6565b9050919050565b7f4d696e742068617665206e6f7420737461727465642079657400000000000000600082015250565b600061256f60198361200b565b915061257a82612539565b602082019050919050565b6000602082019050818103600083015261259e81612562565b9050919050565b7f596f752063616e74206d696e7420746865206e6674207269676874206e6f7700600082015250565b60006125db601f8361200b565b91506125e6826125a5565b602082019050919050565b6000602082019050818103600083015261260a816125ce565b9050919050565b7f596f752063616e74206d696e74207a65726f0000000000000000000000000000600082015250565b600061264760128361200b565b915061265282612611565b602082019050919050565b600060208201905081810360008301526126768161263a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006126b782611a85565b91506126c283611a85565b9250826126d2576126d161267d565b5b828206905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061273960268361200b565b9150612744826126dd565b604082019050919050565b600060208201905081810360008301526127688161272c565b9050919050565b60006020828403121561278557612784611ac3565b5b6000612793848285016123d8565b91505092915050565b7f4e6f7420656e6f756768204c494e4b0000000000000000000000000000000000600082015250565b60006127d2600f8361200b565b91506127dd8261279c565b602082019050919050565b60006020820190508181036000830152612801816127c5565b9050919050565b600060408201905061281d6000830185611bf1565b61282a6020830184611a8f565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561286b578082015181840152602081019050612850565b8381111561287a576000848401525b50505050565b600061288b82612831565b612895818561283c565b93506128a581856020860161284d565b6128ae81611c9a565b840191505092915050565b60006060820190506128ce6000830186611e5d565b6128db6020830185611a8f565b81810360408301526128ed8184612880565b9050949350505050565b61290081611bbb565b811461290b57600080fd5b50565b60008151905061291d816128f7565b92915050565b60006020828403121561293957612938611ac3565b5b60006129478482850161290e565b91505092915050565b60006080820190506129656000830187611bf1565b6129726020830186611a8f565b61297f6040830185611e5d565b61298c6060830184611a8f565b95945050505050565b60006129a18285612239565b6020820191506129b18284612092565b602082019150819050939250505056fea26469706673582212209cc1f04e27989fc5cbebb1262c774f24642d4d04df4444de0964076d76cfd47a64736f6c634300080b0033";

export class Minting__factory extends ContractFactory {
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
    router_: string,
    vrfCoordinator_: string,
    link_: string,
    keyHash_: BytesLike,
    fee_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Minting> {
    return super.deploy(
      nft_,
      router_,
      vrfCoordinator_,
      link_,
      keyHash_,
      fee_,
      overrides || {}
    ) as Promise<Minting>;
  }
  getDeployTransaction(
    nft_: string,
    router_: string,
    vrfCoordinator_: string,
    link_: string,
    keyHash_: BytesLike,
    fee_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      nft_,
      router_,
      vrfCoordinator_,
      link_,
      keyHash_,
      fee_,
      overrides || {}
    );
  }
  attach(address: string): Minting {
    return super.attach(address) as Minting;
  }
  connect(signer: Signer): Minting__factory {
    return super.connect(signer) as Minting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintingInterface {
    return new utils.Interface(_abi) as MintingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Minting {
    return new Contract(address, _abi, signerOrProvider) as Minting;
  }
}
