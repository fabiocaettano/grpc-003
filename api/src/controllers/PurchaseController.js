const NixService = require('../services/nix');

class PurchaseController {
    
    async index(req, res) {

        const { userId } = req.body;

        console.log('Controller user ID: ',userId);
        
        const response =  await new Promise((resolve, reject) => {

            NixService.listPurchases({ userId }, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });

        return res.json(response);
    }

    async show(req, res){  

        const { id } = req.params;

        const response = await new Promise((resolve, reject) => {

            NixService.getPurchaseById({ id }, (err, response) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    
        return res.json(response);
    }
    
    async store(req,res){

        const { title, value, userId } = req.body;        

        const response = await new Promise((resolve, reject) => {

            NixService.purchase({ purchase : {title, value, userId }},(err, response) => {

                if (err ) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
     
        return res.json(response);
    }
}

module.exports = new PurchaseController();