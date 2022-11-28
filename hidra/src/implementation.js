const User = require('./models/User');

module.exports = {

    async getUserById(call, callback){
        const { id } = call.request.id;

        const user =  await User.findById(id);

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
};