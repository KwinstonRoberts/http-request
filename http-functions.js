module.exports = function getHTML (options, callback) {
   var https = require('https');

	https.get(options, function(res){
  	res.setEncoding('utf8');

  	var chunks = '';
  	res.on('data', function(data){
  		console.log('Chunk Received. Length:',data.length);
  		chunks+=data;
  	});
  	res.on('end',function(){
  		console.log('Reponse complete')
  		callback(chunks);
  	})

  });

};