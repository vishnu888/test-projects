// package: com.nony.numericals
// file: numericals.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Pair extends jspb.Message { 
    getNum1(): number;
    setNum1(value: number): void;

    getNum2(): number;
    setNum2(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pair.AsObject;
    static toObject(includeInstance: boolean, msg: Pair): Pair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pair;
    static deserializeBinaryFromReader(message: Pair, reader: jspb.BinaryReader): Pair;
}

export namespace Pair {
    export type AsObject = {
        num1: number,
        num2: number,
    }
}

export class Single extends jspb.Message { 
    getNum(): number;
    setNum(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Single.AsObject;
    static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Single, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Single;
    static deserializeBinaryFromReader(message: Single, reader: jspb.BinaryReader): Single;
}

export namespace Single {
    export type AsObject = {
        num: number,
    }
}
