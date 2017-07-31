var https = require('https');
function getAndPrintHTML (options) {


   https.get(options, function(res){
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
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);

