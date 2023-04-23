var program = require('commander');
const request = require('request');

var optionF = {
    url: "https://www.cbr-xml-daily.ru/latest.js",
    };

var optionS = {
    url: "https://www.cbr-xml-daily.ru/daily_json.js",
    };

const command = (short, long) => {
    if (short) {
        request.get(optionF, function(error, response, body){
            console.log(body)
        })  
    } 
    else if(long) {
        request.get(optionS, function(error, response, body){
            console.log(body)
        })
    }      
}


program
    .version ('0.0.1')
    .option('-s, --short', 'short info')
    .option('-l, --long', 'full info')
    .parse (process.argv)

    const { args } = program;
    const options = program.opts();
    const { short, long } = options;
    
    command(short, long);


    