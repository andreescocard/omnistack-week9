const User = require('../models/User');

module.exports = {
    async store(req, res){ // função assíncrona
        const { email } = req.body; //ou => const email = req.body.email
        
        let user = await User.findOne({ email }) //let variável pode mudar

        if(!user){
            user = await User.create({ email }); //aguardar a criação
        }
        
        return res.json(user);
    }
};



//index => método que vai retornar uma listagem de sessões
//show => listar uma única sessão
//store => criar sessão
//update => atualizar sessão
//destroy => deletar sessão