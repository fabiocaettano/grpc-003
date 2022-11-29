const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    userId: Strint,
    title: String,
    value: Number,    
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
    generateToken({ id }) {
        return jwt.sign( { id }, 'michele', {
           expiresIn: 86400, 
        });
    },
};

module.exports = mongoose.model('Purchase', PurchaseSchema);