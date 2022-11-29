const jwt =  require('jsonwebtoken');
const { promisify} = require('util');
const User = require('./models/User');

module.exports = {

    async getUserById(call, callback){
        const { id } = call.request;

        console.log("id:",id);

        const user =  await User.findById(id);

        console.log("User:",user);

        if (!user){
            return callback({error: 'User not found'})
        }        

        return callback(null, { 
            user : { ... user.toObject(), id: user._id, password: undefined } 
        });
    },

    async registerUser(call, callback){
        
        const { email, username, password } = call.request.user;

        const user = await User.create({
            email,
            username,
            password
        });

        return callback(null, { 
            user : { ... user.toObject(), id: user._id }  
        });
    },

    async loginUser(call, callback){

        console.log('test')

        const { email, password } = call.request.user;

        const user = await User.findOne({ email });

        if (!user){
            return callback({error: 'User not found'})
        }        

        if (!await user.compareHash(password)){
            return callback({error: 'Invalid password'});
        }

        return callback(null,{
            token: User.generateToken(user),
        });
    },   

    async authenticate(call, callback){

        const { token } = call.request;

        if(!token){
            callback({erro: 'No token provided'});
        }

        const parts = token.split('');

        if (!parts.lentghs === 2){
            return res.status(401).send({error: 'Token error'});
        }

        const [scheme, token2] = parts;

        if (!/^Bearer$/i.test(scheme)){
            return res.status(401).send({erro: 'Token malformatted'});
        }

        try{
            const decoded = await promisify(jwt.verify)(token, authConfig.secret);

            const user = await User.findById(decoded.id);

            return callback(null,{ user : { ...user.toObject(), id: user._id }});
        }catch(err){
            callback({error: 'Token Invalid'});
        }
    }
};