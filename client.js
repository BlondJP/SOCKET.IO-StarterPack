var socket = io.connect('http://vps178282.ovh.net:3005/');

$('#send').on('click', function (event){
  var user = {name: 'awais', age: '25'};
  
  /* EMETT REQUETE login vers le SERVER*/
  socket.emit('login', user);
});

/*  ECOUTE REQUETE MDR */
socket.on('mdr', function (object){
  console.log(object);
});
