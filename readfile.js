var fs = require('fs')

fs.readFile('example.txt','utf8', function(err, contents){
    console.log(contents)
})

console.log("After calling the File")