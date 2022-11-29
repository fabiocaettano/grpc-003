const path =  require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoConfig = require('../config/proto');

const nixDef = protoLoader.loadSync(
    path.resolve(__dirname, '..','pb','nix.proto'),
    protoConfig
);

const nix = grpc.loadPackageDefinition(nixDef);

const nixClient = new nix.PurchaseService(
    '161.35.1.16:50052',
    grpc.credentials.createInsecure()
);

module.exports = nixClient;