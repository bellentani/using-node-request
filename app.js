//====================
//  CHAMA OS MODULOS
//====================
var express = require('express');
var request = require('request'); // trata request
var app = express();

//===================
//     MIDDLEWARE
//===================
//levanta o server
app.set('port', process.env.PORT || 5000);

//===================
//  ROTAS DO EXPRESS
//===================

//rota de acerto - localhost:5000/acerto
app.get('/acerto', function(req, res) {
  var urlTest = 'http://bonsaiux.com.br';

  request(urlTest, function (error, response) {
    //verificar se o gravatar existe - se ele não existe vai retornar 404 devido ao parametro passado ao api
    if (!error && response.statusCode == 200) {
      console.log('status é ok, achou');
      res.send('Status é ok, achou. Impresso na tela');
    } else if (!error && response.statusCode == 404) {
      console.log('deu 404');
      res.send('Não achou nada. Impresso na tela');
    }
  });
});

//rota de erro - localhost:5000/erro
app.get('/erro', function(req, res) {
  var urlTest = 'http://bonsaiux.com.br/erro404';

  request(urlTest, function (error, response) {
    //verificar se o gravatar existe - se ele não existe vai retornar 404 devido ao parametro passado ao api
    if (!error && response.statusCode == 200) {
      console.log('status é ok, achou');
      res.send('Status é ok, achou. Impresso na tela');
    } else if (!error && response.statusCode == 404) {
      console.log('deu 404');
      res.send('Não achou nada. Impresso na tela');
    }
  });
});

//Exibe a porta e avisos do app
app.listen(app.get('port'), function() {
  console.log('Node está brincando na porta ' + app.get('port'));
});
