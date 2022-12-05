const path =  require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoConfig = require('../config/proto');
require('dotenv').config();

const nixDef = protoLoader.loadSync(
    path.resolve(__dirname, '..','pb','nix.proto'),
    protoConfig
);

const nix = grpc.loadPackageDefinition(nixDef);

const nixClient = new nix.PurchaseService(
    process.env.SERVICE_NIX,
    grpc.credentials.createInsecure()
);

module.exports = nixClient;