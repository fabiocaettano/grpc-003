const HidraService =  require('../services/hidra');

module.exports = async (req, res, next) => {
    try{
        const response = await Promise((resolve, reject) => {
            HidraService.authenticate(req.headers.authorization,(err, response) => {
                if(err){
                    reject(err);
                }else{
                    resolve(response);
                }
            });
        });

        req.userId = response.user.id;

        next(); 
    } catch( err ){
        return res.status(401).send({ error : 'Token Invalid' });
    }    
};