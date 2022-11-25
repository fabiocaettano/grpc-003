const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader =  require('@grpc/proto-loader');
const implementation = require('./implementation');

require('./database');

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, './pb/messages.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: String,
        oneofs: true
    }
);

const proto = grpc.loadPackageDefinition(packageDefinition);

//console.log(proto);

const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);

server.bindAsync('0.0.0.0:50051',grpc.ServerCredentials.createInsecure(), () => { server.start() });




