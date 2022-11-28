const { promisify } = require('util');

const HidraService  = require('../services/hidra');

class SessionController {

    async store(req, res){        
        const { email, password } = req.body;
        
        console.log(req.body);       
        const response = await new Promise((resolve, reject) => {
            
            HidraService.loginUser({ user: { email, password} }, (err, response) => {
                if ( err ){                    
                    //reject(err);
                    return res.json({"mensagem":"credenciais inválidas"});
                } else {
                    resolve(response);                    
                }
            });
        });

        return res.json(response);
        
    }    
}

module.exports = new SessionController();