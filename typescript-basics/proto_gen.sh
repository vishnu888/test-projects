#Generate the typescript type definition files from proto files
protoc --proto_path=protos \
    --plugin="protoc-gen-ts=node_modules/.bin/protoc-gen-ts" \
    --ts_out="src/generated" protos/*.proto


#Generate the code files from proto files using grpc tools
./node_modules/.bin/grpc_tools_node_protoc --proto_path=protos \
    --plugin="protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin" \
    --js_out=import_style="commonjs,binary:dist/generated" \
    --grpc_out="dist/generated" protos/*.proto