//using fs.readdir to read a directory and call back a specific type of file or files, depending on your need

var fs = require('fs'); 

var readDirectory = fs.readdir(process.argv[2] , function(err, directory){ //store your function in a readDirectory variable
    if (err)    //check for err
        return console.log(err);
        else{ //if no error, go through the length and filter out what you want
            for (var i =0 ; i < directory.length; i++){
                if (directory[i].substring(directory[i].length-3) == process.argv[3]){ //takes in a 4th parameter for the type of directory you want to search for
                    console.log(directory[i]);
                }
            }
        }
    });
                //use by typeing node ReadDirectoryModule.js [directory] [type of file]
module.exports = {  //exporting your readDirectory file as readDirectory, now you can call it as that
    readDirectory: readDirectory
}
