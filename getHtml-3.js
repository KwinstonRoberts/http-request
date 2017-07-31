var https = require('https');


function getHtml(options, callback){
	https.get(options, function(res){
  	res.setEncoding('utf8');

  	var chunks = '';
  	res.on('data', function(data){
  		console.log('Chunk Received. Length:',data.length);
  		chunks+=data;
  	});
  	res.on('end',function(){
  		console.log('Reponse complete')
  		printHTML(chunks);
  	})

  });

}





function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHtml(requestOptions, printHTML());