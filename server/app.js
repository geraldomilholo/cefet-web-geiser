let fs = require('fs');
let express = require('express'),
    app = express();


// configurar qual templating engine usar. Sugestão: hbs (handlebars) -- Dica: app.set('view engine', '???');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

// EXERCÍCIO 1 -- configurar para servir os arquivos estáticos da pasta "client" -- Dica: 1 linha de código
app.use('/', express.static(__dirname + '/../client'));

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
let db = {
	jogadores: JSON.parse(fs.readFileSync(__dirname + '/data/jogadores.json', 'utf-8')),
	jogosPorJogador: JSON.parse(fs.readFileSync(__dirname + '/data/jogosPorJogador.json', 'utf-8'))
};

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json

app.get('/', function (req, res) {
	res.render('index', db.jogadores);
});





// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código

// Abrir servidor na porta 3000 -- Dica: 1-3 linhas de código
let server = app.listen(3000, function () {
	
	let host = server.address().address;
  	let port = server.address().port;
  	console.log('Listening at http://%s:%s', host, port);

});