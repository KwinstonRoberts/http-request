var https = require('https');
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function(res){
  	res.setEncoding('utf8');


  	res.on('data', function(data){
  		console.log('Chunk Received. Length:',data.length);
  	});


  	res.on('end',function(){
  		console.log('Reponse complete')
  	})

  });
}

getAndPrintHTMLChunks();