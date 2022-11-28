const path =  require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoConfig = require('../config/proto');

const hidraDef = protoLoader.loadSync(
    path.resolve(__dirname, '..','pb','hidra.proto'),
    protoConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

const hidraClient = new hidra.UserService(
    '161.35.1.16:50051',
    grpc.credentials.createInsecure()
);

module.exports = hidraClient;