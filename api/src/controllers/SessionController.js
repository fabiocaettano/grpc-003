const { promisify } = require('util');

const { HidraService } = require('../services/hidra');

class SessionController {

    async store(req, res){
            const { email, password  = req.body;

            const response = await promisify(HidraService.loginUser)({
                email,
                password
            });
            
            return res.json(response);
        }
    }
}

module.exports = new SessionController();