const jwt =  require('jsonwebtoken');
const { promisify} = require('util');
const User = require('./models/User');

module.exports = {

    async getUserById(call, callback){

        const { id } = call.request;        

        console.log('call request id:', id);

        const user =  await User.findById(id);        

        if (!user){
            return callback(null,{error: 'User not found'})
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

        const { email, password } = call.request.user;

        const user = await User.findOne({ email });

        if (!user){
            return callback(null,{error: 'User not found'})
        }        

        if (!await user.compareHash(password)){
            return callback(null,{error: 'Invalid password'});
        }

        return callback(null,{
            token: User.generateToken(user),
        });
    },   

    async authenticate(call, callback){

        console.log('call request',call.request);

        const {token: fulltoken, id: userId } = call.request;        

        console.log('Hidra UserId:', userId);
        
        if(!fulltoken){
            callback(null,{erro: 'No token provided'});
        }

        const parts = fulltoken.split(' ');        

        if (!parts.length === 2){
            //return res.status(401).send({error: 'Token error'});
            return callback(null,{code: '401', error: 'Token error'});
        }

        const [scheme, token] = parts;    
        
        if (!/^Bearer$/i.test(scheme)){
            //return res.status(401).send({erro: 'Token malformatted'});         
            return callback(null,{code: '401', error: 'Token malformatted'});
        }        

        try{
            const decoded = await promisify(jwt.verify)(token,"michele");

            console.log(decoded)

            if (!decoded){
                return callback(null,{error: 'Error decoded Token'});
            }
            
            const user = await User.findById(userId);

            console.log('user',user);

            return callback(null,{ user : { ...user.toObject(), id: user._id }});

        }catch(err){
            callback({error: 'Token Invalid'});
        }
    }   
};