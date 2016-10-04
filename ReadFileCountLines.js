 var fs = require('fs'); //use the file system library and store it in variable fs
 var fileR = fs.readFileSync(process.argv[2]); //use the process.argv[2] as your read file because 
                                                // you want the 3rd arguent [[node] [yourProgram.js] [targetFile.txt]]
 var fileString = fileR.toString();  //file is currently a buffer object, so lets make it a string
                                        //if its a string we can use traditional javascript methods
    
console.log(fileString.split('\n').length-1); //split the string into an array by the  '\n' characters
                                                //and print the length of that -1
