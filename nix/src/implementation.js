const Purchase =  require('./models/Purchase');

 module.exports = {
    async getPurchaseById(call, callback){

        const { id } = call.request;

        console.log(`ID: ${id}`);

        const response = await Purchase.findById({ userId : id });

        return callback(null, {purchase: response});
    },
    async listPurchases(call, callback){
      
        const { userId } = call.request;

        console.log('User ID', userId)

        const purchases = await Purchase.find({ userId : userId }).exec();

        return callback(null, { purchases });
    },

    async purchase(call, callback){                        
        
        const { title, value, userId } = call.request.purchase;        

        const purchase = await Purchase.create({ title, value, userId});

        return callback(null, {
            purchase: { ...purchase.toObject(), id: purchase._id },
        })
    }
 };