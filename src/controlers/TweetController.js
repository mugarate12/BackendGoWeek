// CRUD: MYSQL : HTML METHODS
// Create \ Insert \ post
// Read \ Select \ get
// Update \ Update \ put
// Delete \ Delete(Destroy) \ delete

// que faz parte das relações de negocio da aplicação

// importar o model de dos tweets
const Tweet = require('../models/Tweet');

// exportar os metodos que vão precisar ser usados nas routas das requisições
module.exports = {

  async index(req, res){

    const tweets = await Tweet.find({}).sort('-createdAt');
    
    return res.json(tweets);

  },

  async store(req, res){

    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);

  }

}