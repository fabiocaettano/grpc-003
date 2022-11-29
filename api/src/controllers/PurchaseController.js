class PurchaseController {
    async index(req, res){
        const { id } = req.params;

    }

    async show(req, res){  
    }
    
    async store(req,res){
        const { userId } = req;
     

    }
}

module.exports = new PurchaseController();