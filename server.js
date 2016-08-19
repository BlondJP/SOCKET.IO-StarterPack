var http = require('http');
var io = require('socket.io');

httpServer = http.createServer(function (req, res){
  console.log('Un utilisateur c connecter');
  res.end('HELLO WORLD');
});

httpServer.listen(3005, console.log('[JP_DEV] LES SOCKETS SUR LE PORT 3005 ...'));

/* CHARGE MODULE SOCKET.IO*/
var io = require('socket.io').listen(httpServer);

/* CONNECTION AU SERVER */
io.sockets.on('connection', function (socket){

  console.log('data recu');
/* ECOUTE LES REQUETE login */
  socket.on('login', function (user){
    console.log(user);

    /* EMET REQUETE mdr*/
    socket.emit('mdr', {jp: 'blond'});
  });

});
