//using fs.readdir to read a directory and call back a specific type of file or files, depending on your need

var fs = require('fs'); 

fs.readdir(process.argv[2] , function(err, directory){ //second argument of readdir is a callback
    if (err)    //if there is an error , then return it
        return console.log(err);
        else{
            for (var i =0 ; i < directory.length; i++){ //here we go through the length of the directory
                if (directory[i].substring(directory[i].length-3) == ".md"){ //if the directory from the end-3 char is md
                    console.log(directory[i]); //log it
                }
            }
            
        }
        
})
