#Pegando requests de URL com Node.js

Nos meus estudos de Node.js deparei-me com um problema: precisava saber se uma URL retornava página inexistente (o famoso erro 404), no caso, um request para o API do Gravatar.
Procurei como fazer, fui atrás e como noob que sou nisso apanhei um bocado.

Dezenas de URLs do stackoverflow, documentação do Node.js e mais um bocado de tutoriais, tive o insight de buscar no Google *“Node.js request*” e o primeiro resultado foi o [Request](https://github.com/request/request), um módulo simples e fantástico: ele resolveu meu problema e também abriu um absurdo de possibilidades.

Olhem o código abaixo:

**app.js**
```javascript
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

```

Se você quer verificar se uma imagem, URL, vídeo ou qualquer outro tipo de arquivo está disponível online, utilizando o tipo de resposta que a URI dele devolve, então este é o módulo que vocês precisam.
Instalar ele é fácil e a documentação está lá no site. :)

Fiz uma busca específica sobre ele e achei alguns tutoriais online que expandem sua documentação:

http://blog.modulus.io/node.js-tutorial-how-to-use-request-module

Se vocês conhecerem outras formas de fazer isso, sendo com módulos, de forma nativa ou até mesmo usando o Express.js, por favor, deixe nos comentários.

Estou compartilhando aqui minha caminhada no Node.js, como iniciante, acho válido dividir os problemas e soluções que vou encontrando - mesmo que não sejam as melhores. :) 

P.S.: Esse é um texto publicado no blog [BonsaiUX](http://bonsaiux.com.br/pegando-requests-de-url-com-node-js/)
