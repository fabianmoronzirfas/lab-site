//Create a new project based on the boilerplate

/*

copy boilerplate to new folder

modify index.html and index_en.html

thanks

*/

var fs = require('fs'),
	ncp = require('ncp').ncp;
	ncp.limit = 2;
 
var default_params = {
	PROJECT : '{{PROJECT}}', //project URL
	GITHUB_URL : '{{PROJECT}}',
	TWITTER_HANDLE : '{{TWITTER_HANDLE}}',
	AUTHOR : '{{AUTHOR}}',
	AUTHOR_IMAGE : '{{AUTHOR_IMAGE}}',
	AUTHOR_BIO : '{{AUTHOR_BIO}}',
	AUTHOR_BIO_EN : '{{AUTHOR_BIO_EN}}',
	TAG : '{{TAG}}',
	TAG_EN : '{{TAG_EN}}',
	PROJECT_DESCRIPTION : '{{PROJECT_DESCRIPTION}}',
	PROJECT_DESCRIPTION_EN : '{{PROJECT_DESCRIPTION_EN}}',
	PROJECT_TITLE : '{{PROJECT_TITLE}}',
	PROJECT_TITLE_EN : '{{PROJECT_TITLE_EN}}',
	SHORT_TITLE : '{{SHORT_TITLE}}',
	SHORT_TITLE_EN : '{{SHORT_TITLE_EN}}'
}

for(var i = 2; i<process.argv.length; i++){
	var pair = process.argv[i].split('=')
	if(!(pair[0] in default_params)){
		console.log('unknown param '+pair[0])
	}else{
		default_params[pair[0]] = pair[1]
	}
}

if(default_params.PROJECT == '{{PROJECT}}'){

	console.log('You must provide the PROJECT param, in order to create a new folder for your project.')

}else{

	var path = './site/projects/'+ default_params.PROJECT

	if (fs.existsSync(path)) {
		console.log('PROJECT folder already exists, overwriting is disabled, please delete the folder first')
	}else{
		//Create Folder
		fs.mkdirSync(path)

		//Copy Boilerplate
		ncp('./site/projects/boilerplate', path, function (err) {
			if (err) { return console.error(err); }

			(['index.html','index_en.html']).forEach(function(file){
				var contents = fs.readFileSync(path+'/'+file, 'utf8')

				for(var key in default_params){
					contents = contents.split('{{'+key+'}}').join(default_params[key])
				}

				fs.writeFileSync(path+'/'+file, contents, 'utf8')
			})

			console.log('Project '+default_params.PROJECT+' created!')
		})

	}

}
