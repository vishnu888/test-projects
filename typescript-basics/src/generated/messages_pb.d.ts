// package: com.nony.test
// file: messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Person extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
        firstname: string,
        lastname: string,
    }
}

export class Student extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): void;

    getMiddlename(): string;
    setMiddlename(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Student.AsObject;
    static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Student;
    static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
    export type AsObject = {
        firstname: string,
        middlename: string,
        lastname: string,
    }
}
