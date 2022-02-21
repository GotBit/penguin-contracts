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
  "0x60c060405260046006556002600755601460085562093a806009556127106014553480156200002d57600080fd5b50604051620031c5380380620031c5833981810160405281019062000053919062000329565b83838173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620000df620000d36200017b60201b60201c565b6200018360201b60201c565b85600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a8190555080600b81905550505050505050620003c5565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200027b826200024e565b9050919050565b6200028d816200026e565b81146200029957600080fd5b50565b600081519050620002ad8162000282565b92915050565b6000819050919050565b620002c881620002b3565b8114620002d457600080fd5b50565b600081519050620002e881620002bd565b92915050565b6000819050919050565b6200030381620002ee565b81146200030f57600080fd5b50565b6000815190506200032381620002f8565b92915050565b60008060008060008060c0878903121562000349576200034862000249565b5b60006200035989828a016200029c565b96505060206200036c89828a016200029c565b95505060406200037f89828a016200029c565b94505060606200039289828a016200029c565b9350506080620003a589828a01620002d7565b92505060a0620003b889828a0162000312565b9150509295509295509295565b60805160a051612dbe62000407600039600081816110420152611c15015260008181610d170152818161195401528181611ae90152611bd90152612dbe6000f3fe6080604052600436106101dc5760003560e01c8063805c378c11610102578063ba41b0c611610095578063f0b5336511610064578063f0b533651461069a578063f2fde38b146106c5578063f887ea40146106ee578063fa4ab1ee14610719576101e3565b8063ba41b0c6146105eb578063d35fbbfb14610607578063da7f02ab14610644578063e640cf7d1461066f576101e3565b80639a65ea26116100d15780639a65ea2614610555578063aa8c217c1461056c578063af00219214610597578063b594f086146105c2576101e3565b8063805c378c146104875780638da5cb5b146104c457806392f8eb94146104ef57806394985ddd1461052c576101e3565b806347ccca021161017a578063682258241161014957806368225824146103f3578063690a66321461041e578063715018a6146104475780637e6a0fbc1461045e576101e3565b806347ccca02146103375780634e71d92d14610362578063594a1e87146103795780635a9a49c7146103b6576101e3565b8063288cdc91116101b6578063288cdc911461027b578063386bfc98146102b85780633e3e0b12146102e357806342f5ddf3146102fa576101e3565b80630b97bc86146101e85780630fb5a6b4146102135780631e7269c51461023e576101e3565b366101e357005b600080fd5b3480156101f457600080fd5b506101fd610756565b60405161020a9190611dad565b60405180910390f35b34801561021f57600080fd5b5061022861075c565b6040516102359190611dad565b60405180910390f35b34801561024a57600080fd5b5061026560048036038101906102609190611e3a565b610762565b6040516102729190611dad565b60405180910390f35b34801561028757600080fd5b506102a2600480360381019061029d9190611e9d565b61077a565b6040516102af9190611ee5565b60405180910390f35b3480156102c457600080fd5b506102cd61079a565b6040516102da9190611f0f565b60405180910390f35b3480156102ef57600080fd5b506102f86107a0565b005b34801561030657600080fd5b50610321600480360381019061031c9190611e9d565b610826565b60405161032e9190611dad565b60405180910390f35b34801561034357600080fd5b5061034c61083e565b6040516103599190611f89565b60405180910390f35b34801561036e57600080fd5b50610377610864565b005b34801561038557600080fd5b506103a0600480360381019061039b9190611e3a565b610b1b565b6040516103ad9190611f0f565b60405180910390f35b3480156103c257600080fd5b506103dd60048036038101906103d891906120fd565b610b33565b6040516103ea9190611ee5565b60405180910390f35b3480156103ff57600080fd5b50610408610be7565b6040516104159190611dad565b60405180910390f35b34801561042a57600080fd5b5061044560048036038101906104409190611e9d565b610e4a565b005b34801561045357600080fd5b5061045c610ed0565b005b34801561046a57600080fd5b5061048560048036038101906104809190611e9d565b610f58565b005b34801561049357600080fd5b506104ae60048036038101906104a99190611e9d565b610fde565b6040516104bb9190611ee5565b60405180910390f35b3480156104d057600080fd5b506104d9610ffe565b6040516104e6919061217b565b60405180910390f35b3480156104fb57600080fd5b50610516600480360381019061051191906121c2565b611028565b6040516105239190611dad565b60405180910390f35b34801561053857600080fd5b50610553600480360381019061054e91906121ef565b611040565b005b34801561056157600080fd5b5061056a6110dc565b005b34801561057857600080fd5b50610581611161565b60405161058e9190611dad565b60405180910390f35b3480156105a357600080fd5b506105ac611167565b6040516105b99190611dad565b60405180910390f35b3480156105ce57600080fd5b506105e960048036038101906105e491906121c2565b61116d565b005b6106056004803603810190610600919061222f565b6111f3565b005b34801561061357600080fd5b5061062e6004803603810190610629919061228b565b611550565b60405161063b9190611dad565b60405180910390f35b34801561065057600080fd5b5061065961157d565b6040516106669190611dad565b60405180910390f35b34801561067b57600080fd5b50610684611583565b6040516106919190611dad565b60405180910390f35b3480156106a657600080fd5b506106af611589565b6040516106bc9190611f0f565b60405180910390f35b3480156106d157600080fd5b506106ec60048036038101906106e79190611e3a565b61158f565b005b3480156106fa57600080fd5b50610703611687565b60405161071091906122ff565b60405180910390f35b34801561072557600080fd5b50610740600480360381019061073b9190611e9d565b6116ad565b60405161074d9190611dad565b60405180910390f35b60035481565b60095481565b60126020528060005260406000206000915090505481565b60106020528060005260406000206000915054906101000a900460ff1681565b60045481565b6107a86116c5565b73ffffffffffffffffffffffffffffffffffffffff166107c6610ffe565b73ffffffffffffffffffffffffffffffffffffffff161461081c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081390612377565b60405180910390fd5b6000600381905550565b600d6020528060005260406000206000915090505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600e600082815260200190815260200160002060009054906101000a900460ff1680156108f257506010600082815260200190815260200160002060009054906101000a900460ff165b6108fb57600080fd5b6000600d60008381526020019081526020016000205490506000600f600084815260200190815260200160002054905060005b82811015610ae957600061097c838360405160200161094e9291906123b8565b6040516020818303038152906040528051906020012060001c6001806014546109779190612413565b611550565b9050600080601360008481526020019081526020016000205414156109a3578190506109ba565b601360008381526020019081526020016000205490505b600060136000601454815260200190815260200160002054905060008114156109fc576014546013600085815260200190815260200160002081905550610a2a565b6013600060145481526020019081526020016000205460136000858152602001908152602001600020819055505b600160146000828254610a3d9190612469565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933846040518363ffffffff1660e01b8152600401610aa192919061249d565b600060405180830381600087803b158015610abb57600080fd5b505af1158015610acf573d6000803e3d6000fd5b505050505050508080610ae1906124c6565b91505061092e565b506000600e600085815260200190815260200160002060006101000a81548160ff021916908315150217905550505050565b600c6020528060005260406000206000915090505481565b60008082905060005b8551811015610bd9576000868281518110610b5a57610b5961250f565b5b60200260200101519050808310610b99578083604051602001610b7e92919061255f565b60405160208183030381529060405280519060200120610bc3565b8281604051602001610bac92919061255f565b604051602081830303815290604052805190602001205b9250508080610bd1906124c6565b915050610b3c565b508381149150509392505050565b600080600267ffffffffffffffff811115610c0557610c04611fba565b5b604051908082528060200260200182016040528015610c335781602001602082028036833780820191505090505b509050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc791906125a0565b81600081518110610cdb57610cda61250f565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610d4a57610d4961250f565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631f00ca74600b54836040518363ffffffff1660e01b8152600401610de392919061268b565b600060405180830381865afa158015610e00573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e299190612793565b600081518110610e3c57610e3b61250f565b5b602002602001015191505090565b610e526116c5565b73ffffffffffffffffffffffffffffffffffffffff16610e70610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90612377565b60405180910390fd5b8060058190555050565b610ed86116c5565b73ffffffffffffffffffffffffffffffffffffffff16610ef6610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610f4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4390612377565b60405180910390fd5b610f5660006116cd565b565b610f606116c5565b73ffffffffffffffffffffffffffffffffffffffff16610f7e610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614610fd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcb90612377565b60405180910390fd5b8060048190555050565b600e6020528060005260406000206000915054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60136020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c590612828565b60405180910390fd5b6110d88282611793565b5050565b6110e46116c5565b73ffffffffffffffffffffffffffffffffffffffff16611102610ffe565b73ffffffffffffffffffffffffffffffffffffffff1614611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114f90612377565b60405180910390fd5b42600381905550565b60145481565b60075481565b6111756116c5565b73ffffffffffffffffffffffffffffffffffffffff16611193610ffe565b73ffffffffffffffffffffffffffffffffffffffff16146111e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e090612377565b60405180910390fd5b8060098190555050565b60006003541415801561121457506009546003546112119190612413565b42105b611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a90612894565b60405180910390fd5b600e6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060009054906101000a900460ff16156112bd57600080fd5b600062015180600354426112d19190612469565b10156113fe576000336040516020016112ea919061217b565b60405160208183030381529060405280519060200120905060006113118460055484610b33565b905060006113228560045485610b33565b9050818061132d5750805b61136c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136390612900565b60405180910390fd5b811561138c5760065486116113815785611385565b6006545b93506113a9565b80156113a85760075486116113a157856113a5565b6007545b93505b5b601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054846113f49190612469565b9350505050611414565b600854831161140d5782611411565b6008545b90505b6000811415611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144f9061296c565b60405180910390fd5b80601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114a79190612413565b925050819055506114b66117db565b60006114c0611ae2565b90506001600e600083815260200190815260200160002060006101000a81548160ff02191690831515021790555081600d60008381526020019081526020016000208190555080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b600082838361155f9190612469565b8561156a91906129bb565b6115749190612413565b90509392505050565b60065481565b60085481565b60055481565b6115976116c5565b73ffffffffffffffffffffffffffffffffffffffff166115b5610ffe565b73ffffffffffffffffffffffffffffffffffffffff161461160b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160290612377565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561167b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167290612a5e565b60405180910390fd5b611684816116cd565b50565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600f6020528060005260406000206000915090505481565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600f60008481526020019081526020016000208190555060016010600084815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6117e3610be7565b341015611825576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181c90612aca565b60405180910390fd5b6000600267ffffffffffffffff81111561184257611841611fba565b5b6040519080825280602002602001820160405280156118705781602001602082028036833780820191505090505b509050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190491906125a0565b816000815181106119185761191761250f565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106119875761198661250f565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fb3bdb4134600b548530426040518663ffffffff1660e01b8152600401611a279493929190612aea565b60006040518083038185885af1158015611a45573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f82011682018060405250810190611a6f9190612793565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc82600081518110611a9f57611a9e61250f565b5b602002602001015134611ab29190612469565b9081150290604051600060405180830381858888f19350505050158015611add573d6000803e3d6000fd5b505050565b6000600b547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611b40919061217b565b602060405180830381865afa158015611b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b819190612b36565b1015611bc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb990612baf565b60405180910390fd5b611bd0600a54600b54611bd5565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001611c49929190612bcf565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401611c7693929190612c80565b6020604051808303816000875af1158015611c95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb99190612cea565b506000611cdb8460003060008089815260200190815260200160002054611d25565b9050600160008086815260200190815260200160002054611cfc9190612413565b60008086815260200190815260200160002081905550611d1c8482611d61565b91505092915050565b600084848484604051602001611d3e9493929190612d17565b6040516020818303038152906040528051906020012060001c9050949350505050565b60008282604051602001611d76929190612d5c565b60405160208183030381529060405280519060200120905092915050565b6000819050919050565b611da781611d94565b82525050565b6000602082019050611dc26000830184611d9e565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e0782611ddc565b9050919050565b611e1781611dfc565b8114611e2257600080fd5b50565b600081359050611e3481611e0e565b92915050565b600060208284031215611e5057611e4f611dd2565b5b6000611e5e84828501611e25565b91505092915050565b6000819050919050565b611e7a81611e67565b8114611e8557600080fd5b50565b600081359050611e9781611e71565b92915050565b600060208284031215611eb357611eb2611dd2565b5b6000611ec184828501611e88565b91505092915050565b60008115159050919050565b611edf81611eca565b82525050565b6000602082019050611efa6000830184611ed6565b92915050565b611f0981611e67565b82525050565b6000602082019050611f246000830184611f00565b92915050565b6000819050919050565b6000611f4f611f4a611f4584611ddc565b611f2a565b611ddc565b9050919050565b6000611f6182611f34565b9050919050565b6000611f7382611f56565b9050919050565b611f8381611f68565b82525050565b6000602082019050611f9e6000830184611f7a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ff282611fa9565b810181811067ffffffffffffffff8211171561201157612010611fba565b5b80604052505050565b6000612024611dc8565b90506120308282611fe9565b919050565b600067ffffffffffffffff8211156120505761204f611fba565b5b602082029050602081019050919050565b600080fd5b600061207961207484612035565b61201a565b9050808382526020820190506020840283018581111561209c5761209b612061565b5b835b818110156120c557806120b18882611e88565b84526020840193505060208101905061209e565b5050509392505050565b600082601f8301126120e4576120e3611fa4565b5b81356120f4848260208601612066565b91505092915050565b60008060006060848603121561211657612115611dd2565b5b600084013567ffffffffffffffff81111561213457612133611dd7565b5b612140868287016120cf565b935050602061215186828701611e88565b925050604061216286828701611e88565b9150509250925092565b61217581611dfc565b82525050565b6000602082019050612190600083018461216c565b92915050565b61219f81611d94565b81146121aa57600080fd5b50565b6000813590506121bc81612196565b92915050565b6000602082840312156121d8576121d7611dd2565b5b60006121e6848285016121ad565b91505092915050565b6000806040838503121561220657612205611dd2565b5b600061221485828601611e88565b9250506020612225858286016121ad565b9150509250929050565b6000806040838503121561224657612245611dd2565b5b6000612254858286016121ad565b925050602083013567ffffffffffffffff81111561227557612274611dd7565b5b612281858286016120cf565b9150509250929050565b6000806000606084860312156122a4576122a3611dd2565b5b60006122b2868287016121ad565b93505060206122c3868287016121ad565b92505060406122d4868287016121ad565b9150509250925092565b60006122e982611f56565b9050919050565b6122f9816122de565b82525050565b600060208201905061231460008301846122f0565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061236160208361231a565b915061236c8261232b565b602082019050919050565b6000602082019050818103600083015261239081612354565b9050919050565b6000819050919050565b6123b26123ad82611d94565b612397565b82525050565b60006123c482856123a1565b6020820191506123d482846123a1565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061241e82611d94565b915061242983611d94565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561245e5761245d6123e4565b5b828201905092915050565b600061247482611d94565b915061247f83611d94565b925082821015612492576124916123e4565b5b828203905092915050565b60006040820190506124b2600083018561216c565b6124bf6020830184611d9e565b9392505050565b60006124d182611d94565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612504576125036123e4565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b61255961255482611e67565b61253e565b82525050565b600061256b8285612548565b60208201915061257b8284612548565b6020820191508190509392505050565b60008151905061259a81611e0e565b92915050565b6000602082840312156125b6576125b5611dd2565b5b60006125c48482850161258b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61260281611dfc565b82525050565b600061261483836125f9565b60208301905092915050565b6000602082019050919050565b6000612638826125cd565b61264281856125d8565b935061264d836125e9565b8060005b8381101561267e5781516126658882612608565b975061267083612620565b925050600181019050612651565b5085935050505092915050565b60006040820190506126a06000830185611d9e565b81810360208301526126b2818461262d565b90509392505050565b600067ffffffffffffffff8211156126d6576126d5611fba565b5b602082029050602081019050919050565b6000815190506126f681612196565b92915050565b600061270f61270a846126bb565b61201a565b9050808382526020820190506020840283018581111561273257612731612061565b5b835b8181101561275b578061274788826126e7565b845260208401935050602081019050612734565b5050509392505050565b600082601f83011261277a57612779611fa4565b5b815161278a8482602086016126fc565b91505092915050565b6000602082840312156127a9576127a8611dd2565b5b600082015167ffffffffffffffff8111156127c7576127c6611dd7565b5b6127d384828501612765565b91505092915050565b7f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00600082015250565b6000612812601f8361231a565b915061281d826127dc565b602082019050919050565b6000602082019050818103600083015261284181612805565b9050919050565b7f4d696e742068617665206e6f7420737461727465642079657400000000000000600082015250565b600061287e60198361231a565b915061288982612848565b602082019050919050565b600060208201905081810360008301526128ad81612871565b9050919050565b7f596f752063616e74206d696e7420746865206e6674207269676874206e6f7700600082015250565b60006128ea601f8361231a565b91506128f5826128b4565b602082019050919050565b60006020820190508181036000830152612919816128dd565b9050919050565b7f596f752063616e74206d696e74207a65726f0000000000000000000000000000600082015250565b600061295660128361231a565b915061296182612920565b602082019050919050565b6000602082019050818103600083015261298581612949565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006129c682611d94565b91506129d183611d94565b9250826129e1576129e061298c565b5b828206905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612a4860268361231a565b9150612a53826129ec565b604082019050919050565b60006020820190508181036000830152612a7781612a3b565b9050919050565b7f4e6f7420656e6f7567682057424e4220746f2070617920666565000000000000600082015250565b6000612ab4601a8361231a565b9150612abf82612a7e565b602082019050919050565b60006020820190508181036000830152612ae381612aa7565b9050919050565b6000608082019050612aff6000830187611d9e565b8181036020830152612b11818661262d565b9050612b20604083018561216c565b612b2d6060830184611d9e565b95945050505050565b600060208284031215612b4c57612b4b611dd2565b5b6000612b5a848285016126e7565b91505092915050565b7f4e6f7420656e6f756768204c494e4b0000000000000000000000000000000000600082015250565b6000612b99600f8361231a565b9150612ba482612b63565b602082019050919050565b60006020820190508181036000830152612bc881612b8c565b9050919050565b6000604082019050612be46000830185611f00565b612bf16020830184611d9e565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612c32578082015181840152602081019050612c17565b83811115612c41576000848401525b50505050565b6000612c5282612bf8565b612c5c8185612c03565b9350612c6c818560208601612c14565b612c7581611fa9565b840191505092915050565b6000606082019050612c95600083018661216c565b612ca26020830185611d9e565b8181036040830152612cb48184612c47565b9050949350505050565b612cc781611eca565b8114612cd257600080fd5b50565b600081519050612ce481612cbe565b92915050565b600060208284031215612d0057612cff611dd2565b5b6000612d0e84828501612cd5565b91505092915050565b6000608082019050612d2c6000830187611f00565b612d396020830186611d9e565b612d46604083018561216c565b612d536060830184611d9e565b95945050505050565b6000612d688285612548565b602082019150612d7882846123a1565b602082019150819050939250505056fea264697066735822122051c7fada27040d515c70c611e30ca2ab9a9ee190794dc4e8e6ff4d52189631fd64736f6c634300080b0033";

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
