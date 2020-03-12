// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var numericals_pb = require('./numericals_pb.js');

function serialize_com_nony_numericals_Pair(arg) {
  if (!(arg instanceof numericals_pb.Pair)) {
    throw new Error('Expected argument of type com.nony.numericals.Pair');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_nony_numericals_Pair(buffer_arg) {
  return numericals_pb.Pair.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_nony_numericals_Single(arg) {
  if (!(arg instanceof numericals_pb.Single)) {
    throw new Error('Expected argument of type com.nony.numericals.Single');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_nony_numericals_Single(buffer_arg) {
  return numericals_pb.Single.deserializeBinary(new Uint8Array(buffer_arg));
}


var BasicArithmeticService = exports.BasicArithmeticService = {
  addNumbers: {
    path: '/com.nony.numericals.BasicArithmetic/addNumbers',
    requestStream: false,
    responseStream: false,
    requestType: numericals_pb.Pair,
    responseType: numericals_pb.Single,
    requestSerialize: serialize_com_nony_numericals_Pair,
    requestDeserialize: deserialize_com_nony_numericals_Pair,
    responseSerialize: serialize_com_nony_numericals_Single,
    responseDeserialize: deserialize_com_nony_numericals_Single,
  },
  subtractNumbers: {
    path: '/com.nony.numericals.BasicArithmetic/subtractNumbers',
    requestStream: false,
    responseStream: false,
    requestType: numericals_pb.Pair,
    responseType: numericals_pb.Single,
    requestSerialize: serialize_com_nony_numericals_Pair,
    requestDeserialize: deserialize_com_nony_numericals_Pair,
    responseSerialize: serialize_com_nony_numericals_Single,
    responseDeserialize: deserialize_com_nony_numericals_Single,
  },
  multiplyNumbers: {
    path: '/com.nony.numericals.BasicArithmetic/multiplyNumbers',
    requestStream: false,
    responseStream: false,
    requestType: numericals_pb.Pair,
    responseType: numericals_pb.Single,
    requestSerialize: serialize_com_nony_numericals_Pair,
    requestDeserialize: deserialize_com_nony_numericals_Pair,
    responseSerialize: serialize_com_nony_numericals_Single,
    responseDeserialize: deserialize_com_nony_numericals_Single,
  },
  divideNumbers: {
    path: '/com.nony.numericals.BasicArithmetic/divideNumbers',
    requestStream: false,
    responseStream: false,
    requestType: numericals_pb.Pair,
    responseType: numericals_pb.Single,
    requestSerialize: serialize_com_nony_numericals_Pair,
    requestDeserialize: deserialize_com_nony_numericals_Pair,
    responseSerialize: serialize_com_nony_numericals_Single,
    responseDeserialize: deserialize_com_nony_numericals_Single,
  },
};

exports.BasicArithmeticClient = grpc.makeGenericClientConstructor(BasicArithmeticService);
