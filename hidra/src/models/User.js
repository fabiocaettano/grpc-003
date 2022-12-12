const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    id: String,
    email: String,
    username: String,
    password: String,
});

UserSchema.pre('save', async function(next){
    if (!this.isModified('password')) next();

    this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
    compareHash(hash){
        return bcrypt.compare(hash, this.password);
    },
};

UserSchema.statics = {
    generateToken({ user , id }) {      
        
        return jwt.sign( { id: id }, 'michele', {            
           expiresIn: '5m', 
        });
    },
};

module.exports = mongoose.model('User', UserSchema);