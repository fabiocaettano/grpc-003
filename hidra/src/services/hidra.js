const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader  =  require('@grpc/proto-loader');
const protoConfig =  require('../config/proto');

const hidraDef = protoLoader.loadSync(
    path.resolve(__dirname, './pb/messages.proto'),
    protoConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

const hidraClient = new hidra.UserService(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(), () => { server.start() }
);

module.exports = hidraClient;