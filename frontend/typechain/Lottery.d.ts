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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LotteryInterface extends ethers.utils.Interface {
  functions: {
    "claimReward()": FunctionFragment;
    "convert(uint256)": FunctionFragment;
    "games(bytes32)": FunctionFragment;
    "getResult(address)": FunctionFragment;
    "multipliersX100(uint256)": FunctionFragment;
    "multipliersX100Length()": FunctionFragment;
    "multipliersX100Max()": FunctionFragment;
    "nft()": FunctionFragment;
    "owner()": FunctionFragment;
    "range(uint256,uint256,uint256)": FunctionFragment;
    "rawFulfillRandomness(bytes32,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestIds(address)": FunctionFragment;
    "router()": FunctionFragment;
    "setMultipliersX100(uint256[],uint256)": FunctionFragment;
    "setNFT(address)": FunctionFragment;
    "setStable(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "setTokenConverter(address)": FunctionFragment;
    "spin(uint256[])": FunctionFragment;
    "spinFeeETH()": FunctionFragment;
    "stable()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenConverter()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "games", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getResult", values: [string]): string;
  encodeFunctionData(
    functionFragment: "multipliersX100",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multipliersX100Length",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multipliersX100Max",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "range",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "requestIds", values: [string]): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMultipliersX100",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setNFT", values: [string]): string;
  encodeFunctionData(functionFragment: "setStable", values: [string]): string;
  encodeFunctionData(functionFragment: "setToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTokenConverter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "spin",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "spinFeeETH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stable", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenConverter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getResult", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multipliersX100",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multipliersX100Length",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multipliersX100Max",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "range", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMultipliersX100",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spinFeeETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ChangedMultipliersX100(uint256,address,uint256[])": EventFragment;
    "ChangedNFT(uint256,address,address)": EventFragment;
    "ChangedStable(uint256,address,address)": EventFragment;
    "ChangedToken(uint256,address,address)": EventFragment;
    "ChangedTokenConverter(uint256,address,address)": EventFragment;
    "ClaimedReward(uint256,address,uint256,bytes32)": EventFragment;
    "Fulfilled(uint256,bytes32)": EventFragment;
    "LinkSwaped(uint256,address,uint256,uint256,address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Spined(uint256,address,uint256,uint256,bytes32)": EventFragment;
    "Withdrawed(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedMultipliersX100"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedStable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedTokenConverter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimedReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LinkSwaped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Spined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawed"): EventFragment;
}

export type ChangedMultipliersX100Event = TypedEvent<
  [BigNumber, string, BigNumber[]] & {
    timestamp: BigNumber;
    user: string;
    multipliersX100: BigNumber[];
  }
>;

export type ChangedNFTEvent = TypedEvent<
  [BigNumber, string, string] & {
    timestamp: BigNumber;
    user: string;
    nft: string;
  }
>;

export type ChangedStableEvent = TypedEvent<
  [BigNumber, string, string] & {
    timestamp: BigNumber;
    user: string;
    stable: string;
  }
>;

export type ChangedTokenEvent = TypedEvent<
  [BigNumber, string, string] & {
    timestamp: BigNumber;
    user: string;
    token: string;
  }
>;

export type ChangedTokenConverterEvent = TypedEvent<
  [BigNumber, string, string] & {
    timestamp: BigNumber;
    user: string;
    tokenConverter: string;
  }
>;

export type ClaimedRewardEvent = TypedEvent<
  [BigNumber, string, BigNumber, string] & {
    timestamp: BigNumber;
    user: string;
    reward: BigNumber;
    requestId: string;
  }
>;

export type FulfilledEvent = TypedEvent<
  [BigNumber, string] & { timestamp: BigNumber; requestId: string }
>;

export type LinkSwapedEvent = TypedEvent<
  [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    timestamp: BigNumber;
    user: string;
    amountProvided: BigNumber;
    spinCost: BigNumber;
    addressIn: string;
    addressOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SpinedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string] & {
    timestamp: BigNumber;
    user: string;
    bet: BigNumber;
    betInStable: BigNumber;
    requestId: string;
  }
>;

export type WithdrawedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber] & {
    timestamp: BigNumber;
    user: string;
    token: string;
    amount: BigNumber;
  }
>;

export class Lottery extends BaseContract {
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

  interface: LotteryInterface;

  functions: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convert(
      inStable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber, BigNumber, boolean] & {
        randomness: BigNumber;
        claimed: boolean;
        bet: BigNumber;
        betInStable: BigNumber;
        fulfilled: boolean;
      }
    >;

    getResult(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        claimed: boolean;
        multiplierX100: BigNumber;
        reward: BigNumber;
        rewardInStable: BigNumber;
      }
    >;

    multipliersX100(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multipliersX100Length(overrides?: CallOverrides): Promise<[BigNumber]>;

    multipliersX100Max(overrides?: CallOverrides): Promise<[BigNumber]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestIds(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setMultipliersX100(
      multipliersX100_: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNFT(
      nft_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStable(
      stable_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spin(
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spinFeeETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    stable(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenConverter(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convert(
    inStable: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  games(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, BigNumber, BigNumber, boolean] & {
      randomness: BigNumber;
      claimed: boolean;
      bet: BigNumber;
      betInStable: BigNumber;
      fulfilled: boolean;
    }
  >;

  getResult(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      claimed: boolean;
      multiplierX100: BigNumber;
      reward: BigNumber;
      rewardInStable: BigNumber;
    }
  >;

  multipliersX100(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multipliersX100Length(overrides?: CallOverrides): Promise<BigNumber>;

  multipliersX100Max(overrides?: CallOverrides): Promise<BigNumber>;

  nft(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  range(
    number: BigNumberish,
    from: BigNumberish,
    to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rawFulfillRandomness(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestIds(arg0: string, overrides?: CallOverrides): Promise<string>;

  router(overrides?: CallOverrides): Promise<string>;

  setMultipliersX100(
    multipliersX100_: BigNumberish[],
    max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNFT(
    nft_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStable(
    stable_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setToken(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenConverter(
    tokenConverter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spin(
    tokenIds: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spinFeeETH(overrides?: CallOverrides): Promise<BigNumber>;

  stable(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenConverter(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token_: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(overrides?: CallOverrides): Promise<void>;

    convert(
      inStable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber, BigNumber, boolean] & {
        randomness: BigNumber;
        claimed: boolean;
        bet: BigNumber;
        betInStable: BigNumber;
        fulfilled: boolean;
      }
    >;

    getResult(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        claimed: boolean;
        multiplierX100: BigNumber;
        reward: BigNumber;
        rewardInStable: BigNumber;
      }
    >;

    multipliersX100(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multipliersX100Length(overrides?: CallOverrides): Promise<BigNumber>;

    multipliersX100Max(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestIds(arg0: string, overrides?: CallOverrides): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    setMultipliersX100(
      multipliersX100_: BigNumberish[],
      max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setNFT(nft_: string, overrides?: CallOverrides): Promise<void>;

    setStable(stable_: string, overrides?: CallOverrides): Promise<void>;

    setToken(token_: string, overrides?: CallOverrides): Promise<void>;

    setTokenConverter(
      tokenConverter_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    spin(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    spinFeeETH(overrides?: CallOverrides): Promise<BigNumber>;

    stable(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenConverter(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangedMultipliersX100(uint256,address,uint256[])"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      multipliersX100?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber[]],
      { timestamp: BigNumber; user: string; multipliersX100: BigNumber[] }
    >;

    ChangedMultipliersX100(
      timestamp?: BigNumberish | null,
      user?: string | null,
      multipliersX100?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber[]],
      { timestamp: BigNumber; user: string; multipliersX100: BigNumber[] }
    >;

    "ChangedNFT(uint256,address,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      nft?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; nft: string }
    >;

    ChangedNFT(
      timestamp?: BigNumberish | null,
      user?: string | null,
      nft?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; nft: string }
    >;

    "ChangedStable(uint256,address,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      stable?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; stable: string }
    >;

    ChangedStable(
      timestamp?: BigNumberish | null,
      user?: string | null,
      stable?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; stable: string }
    >;

    "ChangedToken(uint256,address,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; token: string }
    >;

    ChangedToken(
      timestamp?: BigNumberish | null,
      user?: string | null,
      token?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; token: string }
    >;

    "ChangedTokenConverter(uint256,address,address)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      tokenConverter?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; tokenConverter: string }
    >;

    ChangedTokenConverter(
      timestamp?: BigNumberish | null,
      user?: string | null,
      tokenConverter?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { timestamp: BigNumber; user: string; tokenConverter: string }
    >;

    "ClaimedReward(uint256,address,uint256,bytes32)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      reward?: null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      {
        timestamp: BigNumber;
        user: string;
        reward: BigNumber;
        requestId: string;
      }
    >;

    ClaimedReward(
      timestamp?: BigNumberish | null,
      user?: string | null,
      reward?: null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      {
        timestamp: BigNumber;
        user: string;
        reward: BigNumber;
        requestId: string;
      }
    >;

    "Fulfilled(uint256,bytes32)"(
      timestamp?: BigNumberish | null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; requestId: string }
    >;

    Fulfilled(
      timestamp?: BigNumberish | null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { timestamp: BigNumber; requestId: string }
    >;

    "LinkSwaped(uint256,address,uint256,uint256,address,address,uint256,uint256)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      amountProvided?: null,
      spinCost?: null,
      addressIn?: null,
      addressOut?: null,
      amountIn?: null,
      amountOut?: null
    ): TypedEventFilter<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber
      ],
      {
        timestamp: BigNumber;
        user: string;
        amountProvided: BigNumber;
        spinCost: BigNumber;
        addressIn: string;
        addressOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;

    LinkSwaped(
      timestamp?: BigNumberish | null,
      user?: string | null,
      amountProvided?: null,
      spinCost?: null,
      addressIn?: null,
      addressOut?: null,
      amountIn?: null,
      amountOut?: null
    ): TypedEventFilter<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber
      ],
      {
        timestamp: BigNumber;
        user: string;
        amountProvided: BigNumber;
        spinCost: BigNumber;
        addressIn: string;
        addressOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
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

    "Spined(uint256,address,uint256,uint256,bytes32)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      bet?: null,
      betInStable?: null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        timestamp: BigNumber;
        user: string;
        bet: BigNumber;
        betInStable: BigNumber;
        requestId: string;
      }
    >;

    Spined(
      timestamp?: BigNumberish | null,
      user?: string | null,
      bet?: null,
      betInStable?: null,
      requestId?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, string],
      {
        timestamp: BigNumber;
        user: string;
        bet: BigNumber;
        betInStable: BigNumber;
        requestId: string;
      }
    >;

    "Withdrawed(uint256,address,address,uint256)"(
      timestamp?: BigNumberish | null,
      user?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      { timestamp: BigNumber; user: string; token: string; amount: BigNumber }
    >;

    Withdrawed(
      timestamp?: BigNumberish | null,
      user?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber],
      { timestamp: BigNumber; user: string; token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convert(
      inStable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    games(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getResult(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    multipliersX100(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multipliersX100Length(overrides?: CallOverrides): Promise<BigNumber>;

    multipliersX100Max(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setMultipliersX100(
      multipliersX100_: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNFT(
      nft_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStable(
      stable_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spin(
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spinFeeETH(overrides?: CallOverrides): Promise<BigNumber>;

    stable(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenConverter(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convert(
      inStable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getResult(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multipliersX100(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multipliersX100Length(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multipliersX100Max(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    range(
      number: BigNumberish,
      from: BigNumberish,
      to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMultipliersX100(
      multipliersX100_: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNFT(
      nft_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStable(
      stable_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setToken(
      token_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spin(
      tokenIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spinFeeETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenConverter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
