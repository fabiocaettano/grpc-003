const HidraService =  require('../services/hidra');

module.exports = async (req, res, next) => {
    try{
        const response = await new Promise((resolve, reject) => {                        

            console.log(`headers authorization ${req.headers.authorization}`);

            HidraService.authenticate(
                { token: req.headers.authorization } ,(err, response) => {

                console.log(response);
            
                if(err || response.error){                   
                    console.log(`error: ${response}`);
                    console.log(`response: ${response}`);
                    reject(err || response);

                }else{
                    console.log(response);                            
                    resolve(response);
                }
            });
        });  
        
        req.userId = response.user.id;           
        
        next(); 
    } catch( err ){
        return res.status(401).send(err);
    }    
};