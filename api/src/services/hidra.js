const path =  require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoConfig = require('../config/proto');
require('dotenv').config();

const hidraDef = protoLoader.loadSync(
    path.resolve(__dirname, '..','pb','hidra.proto'),
    protoConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

const hidraClient = new hidra.UserService(
    process.env.SERVICE_HIDRA,
    grpc.credentials.createInsecure()
);

module.exports = hidraClient;