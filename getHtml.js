var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


   https.get(requestOptions, function(res){
  	res.setEncoding('utf8');

  	var chunks = '';
  	res.on('data', function(data){
  		console.log('Chunk Received. Length:',data.length);
  		chunks+=data;
  	});


  	res.on('end',function(){
  		console.log('Reponse complete')
  		console.log(chunks);
  	})

  });

}

getAndPrintHTML();