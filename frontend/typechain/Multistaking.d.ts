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

interface MultistakingInterface extends ethers.utils.Interface {
  functions: {
    "BUSD()": FunctionFragment;
    "MAX_STAKES()": FunctionFragment;
    "changeTokenConverter(address)": FunctionFragment;
    "cocktailNFT()": FunctionFragment;
    "myActiveStakesCount(address)": FunctionFragment;
    "myStakes(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "periods(uint256)": FunctionFragment;
    "rates(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stake(uint8,uint256[])": FunctionFragment;
    "stakes(uint256)": FunctionFragment;
    "stakesInfo(uint256,uint256)": FunctionFragment;
    "stakesInfoAll()": FunctionFragment;
    "stakesLength()": FunctionFragment;
    "stakesOf(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "updateMax(uint256)": FunctionFragment;
    "updatePeriods(uint256[4])": FunctionFragment;
    "updateRates(uint8[4])": FunctionFragment;
    "vodkaToken()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BUSD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_STAKES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeTokenConverter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cocktailNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "myActiveStakesCount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "myStakes", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periods",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "rates", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stakes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakesInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakesInfoAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakesOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePeriods",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRates",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "vodkaToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BUSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_STAKES", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeTokenConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cocktailNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myActiveStakesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "myStakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "periods", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakesInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakesInfoAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakesOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateMax", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vodkaToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Staked(address,uint8,uint256[],uint256,uint256)": EventFragment;
    "Unstaked(address,uint8,uint256[],uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type StakedEvent = TypedEvent<
  [string, number, BigNumber[], BigNumber, BigNumber] & {
    sender: string;
    class_: number;
    tokenIds: BigNumber[];
    initialInBUSD: BigNumber;
    rewardBUSD: BigNumber;
  }
>;

export type UnstakedEvent = TypedEvent<
  [string, number, BigNumber[], BigNumber] & {
    sender: string;
    class_: number;
    tokenIds: BigNumber[];
    totalRewardTokens: BigNumber;
  }
>;

export class Multistaking extends BaseContract {
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

  interface: MultistakingInterface;

  functions: {
    BUSD(overrides?: CallOverrides): Promise<[string]>;

    MAX_STAKES(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cocktailNFT(overrides?: CallOverrides): Promise<[string]>;

    myActiveStakesCount(
      _me: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { l: BigNumber }>;

    myStakes(
      _me: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[],
        BigNumber[]
      ] & {
        s: ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[];
        indexes: BigNumber[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    periods(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rates(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      class_: BigNumberish,
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        class_: number;
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      }
    >;

    stakesInfo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[]
      ] & {
        s: ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[];
      }
    >;

    stakesInfoAll(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[]
      ] & {
        s: ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[];
      }
    >;

    stakesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakesOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMax(
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePeriods(
      periods_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRates(
      rates_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vodkaToken(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BUSD(overrides?: CallOverrides): Promise<string>;

  MAX_STAKES(overrides?: CallOverrides): Promise<BigNumber>;

  changeTokenConverter(
    tokenConverter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cocktailNFT(overrides?: CallOverrides): Promise<string>;

  myActiveStakesCount(
    _me: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  myStakes(
    _me: string,
    overrides?: CallOverrides
  ): Promise<
    [
      ([
        number,
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        class_: number;
        tokenIds: BigNumber[];
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      })[],
      BigNumber[]
    ] & {
      s: ([
        number,
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        class_: number;
        tokenIds: BigNumber[];
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      })[];
      indexes: BigNumber[];
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  periods(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  rates(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    class_: BigNumberish,
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      class_: number;
      startTime: BigNumber;
      endTime: BigNumber;
      initialInBUSD: BigNumber;
      rewardBUSD: BigNumber;
      unstaked: boolean;
    }
  >;

  stakesInfo(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([
      number,
      BigNumber[],
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      class_: number;
      tokenIds: BigNumber[];
      startTime: BigNumber;
      endTime: BigNumber;
      initialInBUSD: BigNumber;
      rewardBUSD: BigNumber;
      unstaked: boolean;
    })[]
  >;

  stakesInfoAll(
    overrides?: CallOverrides
  ): Promise<
    ([
      number,
      BigNumber[],
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      class_: number;
      tokenIds: BigNumber[];
      startTime: BigNumber;
      endTime: BigNumber;
      initialInBUSD: BigNumber;
      rewardBUSD: BigNumber;
      unstaked: boolean;
    })[]
  >;

  stakesLength(overrides?: CallOverrides): Promise<BigNumber>;

  stakesOf(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMax(
    _max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePeriods(
    periods_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRates(
    rates_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vodkaToken(overrides?: CallOverrides): Promise<string>;

  withdraw(
    token_: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BUSD(overrides?: CallOverrides): Promise<string>;

    MAX_STAKES(overrides?: CallOverrides): Promise<BigNumber>;

    changeTokenConverter(
      tokenConverter_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cocktailNFT(overrides?: CallOverrides): Promise<string>;

    myActiveStakesCount(
      _me: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myStakes(
      _me: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[],
        BigNumber[]
      ] & {
        s: ([
          number,
          BigNumber[],
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          class_: number;
          tokenIds: BigNumber[];
          startTime: BigNumber;
          endTime: BigNumber;
          initialInBUSD: BigNumber;
          rewardBUSD: BigNumber;
          unstaked: boolean;
        })[];
        indexes: BigNumber[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    periods(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rates(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stake(
      class_: BigNumberish,
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    stakes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        class_: number;
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      }
    >;

    stakesInfo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([
        number,
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        class_: number;
        tokenIds: BigNumber[];
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      })[]
    >;

    stakesInfoAll(
      overrides?: CallOverrides
    ): Promise<
      ([
        number,
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        class_: number;
        tokenIds: BigNumber[];
        startTime: BigNumber;
        endTime: BigNumber;
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
        unstaked: boolean;
      })[]
    >;

    stakesLength(overrides?: CallOverrides): Promise<BigNumber>;

    stakesOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateMax(_max: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updatePeriods(
      periods_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    updateRates(
      rates_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    vodkaToken(overrides?: CallOverrides): Promise<string>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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

    "Staked(address,uint8,uint256[],uint256,uint256)"(
      sender?: null,
      class_?: null,
      tokenIds?: null,
      initialInBUSD?: null,
      rewardBUSD?: null
    ): TypedEventFilter<
      [string, number, BigNumber[], BigNumber, BigNumber],
      {
        sender: string;
        class_: number;
        tokenIds: BigNumber[];
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
      }
    >;

    Staked(
      sender?: null,
      class_?: null,
      tokenIds?: null,
      initialInBUSD?: null,
      rewardBUSD?: null
    ): TypedEventFilter<
      [string, number, BigNumber[], BigNumber, BigNumber],
      {
        sender: string;
        class_: number;
        tokenIds: BigNumber[];
        initialInBUSD: BigNumber;
        rewardBUSD: BigNumber;
      }
    >;

    "Unstaked(address,uint8,uint256[],uint256)"(
      sender?: null,
      class_?: null,
      tokenIds?: null,
      totalRewardTokens?: null
    ): TypedEventFilter<
      [string, number, BigNumber[], BigNumber],
      {
        sender: string;
        class_: number;
        tokenIds: BigNumber[];
        totalRewardTokens: BigNumber;
      }
    >;

    Unstaked(
      sender?: null,
      class_?: null,
      tokenIds?: null,
      totalRewardTokens?: null
    ): TypedEventFilter<
      [string, number, BigNumber[], BigNumber],
      {
        sender: string;
        class_: number;
        tokenIds: BigNumber[];
        totalRewardTokens: BigNumber;
      }
    >;
  };

  estimateGas: {
    BUSD(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_STAKES(overrides?: CallOverrides): Promise<BigNumber>;

    changeTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cocktailNFT(overrides?: CallOverrides): Promise<BigNumber>;

    myActiveStakesCount(
      _me: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myStakes(_me: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    periods(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      class_: BigNumberish,
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    stakesInfo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakesInfoAll(overrides?: CallOverrides): Promise<BigNumber>;

    stakesLength(overrides?: CallOverrides): Promise<BigNumber>;

    stakesOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMax(
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePeriods(
      periods_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRates(
      rates_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vodkaToken(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_STAKES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeTokenConverter(
      tokenConverter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cocktailNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    myActiveStakesCount(
      _me: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myStakes(
      _me: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periods(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      class_: BigNumberish,
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakesInfo(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakesInfoAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakesOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMax(
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePeriods(
      periods_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRates(
      rates_: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vodkaToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
