/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PublicMintingInterface extends ethers.utils.Interface {
  functions: {
    "addSalt(uint256,uint256)": FunctionFragment;
    "amount()": FunctionFragment;
    "duration()": FunctionFragment;
    "getRandomNumber()": FunctionFragment;
    "indexes(uint256)": FunctionFragment;
    "maxQuantity()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "minting()": FunctionFragment;
    "nft()": FunctionFragment;
    "owner()": FunctionFragment;
    "range(uint256,uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDuration(uint256)": FunctionFragment;
    "setMaxQuantity(uint256)": FunctionFragment;
    "start()": FunctionFragment;
    "startTimestamp()": FunctionFragment;
    "stop()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addSalt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "amount", values?: undefined): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "indexes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxQuantity",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "minting", values?: undefined): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "range",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxQuantity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addSalt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "indexes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "range", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Mint(uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetDuration(uint256,address,uint256)": EventFragment;
    "SetMaxQuantity(uint256,address,uint256)": EventFragment;
    "Start(uint256,address)": EventFragment;
    "Stop(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetDuration"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMaxQuantity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Start"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stop"): EventFragment;
}

export type MintEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    timestamp: BigNumber;
    user: string;
    tokenId: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SetDurationEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    timestamp: BigNumber;
    user: string;
    duration: BigNumber;
  }
>;

export type SetMaxQuantityEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    timestamp: BigNumber;
    user: string;
    maxQuantity: BigNumber;
  }
>;

export type StartEvent = TypedEvent<
  [BigNumber, string] & { timestamp: BigNumber; user: string }
>;

export type StopEvent = TypedEvent<
  [BigNumber, string] & { timestamp: BigNumber; user: string }
>;

export class PublicMinting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PublicMintingInterface;

  functions: {
    addSalt(
      value: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    amount(overrides?: CallOverrides): Promise<[BigNumber]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRandomNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    indexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxQuantity(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minting(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxQuantity(
      maxQuantity_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addSalt(
    value: BigNumberish,
    salt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  amount(overrides?: CallOverrides): Promise<BigNumber>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

  indexes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  maxQuantity(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minting(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  range(
    number: BigNumberish,
    from: BigNumberish,
    to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDuration(
    duration_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxQuantity(
    maxQuantity_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  start(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  stop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addSalt(
      value: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amount(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    indexes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    maxQuantity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    minting(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDuration(
      duration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxQuantity(
      maxQuantity_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    start(overrides?: CallOverrides): Promise<void>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    stop(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Mint(uint256,address,uint256)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      tokenId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; tokenId: BigNumber }
    >;

    Mint(
      timestamp?: BigNumberish | null,
      user?: string | null,
      tokenId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; tokenId: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SetDuration(uint256,address,uint256)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      duration?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; duration: BigNumber }
    >;

    SetDuration(
      timestamp?: BigNumberish | null,
      user?: string | null,
      duration?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; duration: BigNumber }
    >;

    "SetMaxQuantity(uint256,address,uint256)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      maxQuantity?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; maxQuantity: BigNumber }
    >;

    SetMaxQuantity(
      timestamp?: BigNumberish | null,
      user?: string | null,
      maxQuantity?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { timestamp: BigNumber; user: string; maxQuantity: BigNumber }
    >;

    "Start(uint256,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; user: string }
    >;

    Start(
      timestamp?: BigNumberish | null,
      user?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; user: string }
    >;

    "Stop(uint256,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; user: string }
    >;

    Stop(
      timestamp?: BigNumberish | null,
      user?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; user: string }
    >;
  };

  estimateGas: {
    addSalt(
      value: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amount(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    indexes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    maxQuantity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minting(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxQuantity(
      maxQuantity_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSalt(
      value: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRandomNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    indexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxQuantity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxQuantity(
      maxQuantity_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
