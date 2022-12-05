const HidraService =  require('../services/hidra');

module.exports = async (req, res, next) => {
    try{
        const response = await new Promise((resolve, reject) => {

            console.log(req.body);

            console.log(req.headers.authorization);
            
            HidraService.authenticate(

                { token: req.headers.authorization, id: req.body.userId } ,(err, response) => {
            
                if(err || response.error){                   
                    
                    reject(err || response);

                }else{
                                    
                    resolve(response);
                }
            });
        });

        
        //req.userId = req.body.userId;

        next(); 
    } catch( err ){
        return res.status(401).send(err);
    }    
};