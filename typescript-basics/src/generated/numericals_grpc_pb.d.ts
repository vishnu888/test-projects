// package: com.nony.numericals
// file: numericals.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as numericals_pb from "./numericals_pb";

interface IBasicArithmeticService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addNumbers: IBasicArithmeticService_IaddNumbers;
    subtractNumbers: IBasicArithmeticService_IsubtractNumbers;
    multiplyNumbers: IBasicArithmeticService_ImultiplyNumbers;
    divideNumbers: IBasicArithmeticService_IdivideNumbers;
}

interface IBasicArithmeticService_IaddNumbers extends grpc.MethodDefinition<numericals_pb.Pair, numericals_pb.Single> {
    path: string; // "/com.nony.numericals.BasicArithmetic/addNumbers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<numericals_pb.Pair>;
    requestDeserialize: grpc.deserialize<numericals_pb.Pair>;
    responseSerialize: grpc.serialize<numericals_pb.Single>;
    responseDeserialize: grpc.deserialize<numericals_pb.Single>;
}
interface IBasicArithmeticService_IsubtractNumbers extends grpc.MethodDefinition<numericals_pb.Pair, numericals_pb.Single> {
    path: string; // "/com.nony.numericals.BasicArithmetic/subtractNumbers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<numericals_pb.Pair>;
    requestDeserialize: grpc.deserialize<numericals_pb.Pair>;
    responseSerialize: grpc.serialize<numericals_pb.Single>;
    responseDeserialize: grpc.deserialize<numericals_pb.Single>;
}
interface IBasicArithmeticService_ImultiplyNumbers extends grpc.MethodDefinition<numericals_pb.Pair, numericals_pb.Single> {
    path: string; // "/com.nony.numericals.BasicArithmetic/multiplyNumbers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<numericals_pb.Pair>;
    requestDeserialize: grpc.deserialize<numericals_pb.Pair>;
    responseSerialize: grpc.serialize<numericals_pb.Single>;
    responseDeserialize: grpc.deserialize<numericals_pb.Single>;
}
interface IBasicArithmeticService_IdivideNumbers extends grpc.MethodDefinition<numericals_pb.Pair, numericals_pb.Single> {
    path: string; // "/com.nony.numericals.BasicArithmetic/divideNumbers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<numericals_pb.Pair>;
    requestDeserialize: grpc.deserialize<numericals_pb.Pair>;
    responseSerialize: grpc.serialize<numericals_pb.Single>;
    responseDeserialize: grpc.deserialize<numericals_pb.Single>;
}

export const BasicArithmeticService: IBasicArithmeticService;

export interface IBasicArithmeticServer {
    addNumbers: grpc.handleUnaryCall<numericals_pb.Pair, numericals_pb.Single>;
    subtractNumbers: grpc.handleUnaryCall<numericals_pb.Pair, numericals_pb.Single>;
    multiplyNumbers: grpc.handleUnaryCall<numericals_pb.Pair, numericals_pb.Single>;
    divideNumbers: grpc.handleUnaryCall<numericals_pb.Pair, numericals_pb.Single>;
}

export interface IBasicArithmeticClient {
    addNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    addNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    addNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    subtractNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    subtractNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    subtractNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    divideNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    divideNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    divideNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
}

export class BasicArithmeticClient extends grpc.Client implements IBasicArithmeticClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public addNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public addNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public subtractNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public subtractNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public subtractNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public divideNumbers(request: numericals_pb.Pair, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public divideNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
    public divideNumbers(request: numericals_pb.Pair, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: numericals_pb.Single) => void): grpc.ClientUnaryCall;
}
