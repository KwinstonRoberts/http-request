var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
	var leetsMult = {'er':'0r','you':'j00'};
	var leets = {'a':'4','e':'3','l':'1','o':'0','s':'5','t':'7','ck':'x'}
  	
  for(x in leetsMult){
	var patt = new RegExp(x,'gi');
  	html = html.replace(patt,leetsMult[x])
  }
  for(x in leets){
	var patt = new RegExp(x,'gi');
  	html = html.replace(patt,leets[x])
  }
  console.log(html);
}

getHTML(requestOptions,print1337); 