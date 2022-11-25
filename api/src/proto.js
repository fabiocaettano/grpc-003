const path = require('path');
const grpc =  require('@grpc/grpc-js');

const loaderConfig = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: String,
    oneofs: true
}

const hidraDefinition = protoLoader.loadSync(
    path.resolve(__dirname, './pb/hidra.proto'),loaderConfig);

const proto = grpc.loadPackageDefinition(hidraDefinition);