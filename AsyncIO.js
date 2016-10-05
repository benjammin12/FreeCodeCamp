 var fs = require('fs'); //use the file system library and store it in variable fs
 fs.readFile(process.argv[2], function (err ,fileString){ //second argument of readFile is a callback function, which is used to check for errors
     if (err)
        return console.log("Error reading file: "+ err); //exits function if error
    else{
         fileString = fileString.toString();  //otherwise convert file to a string
        console.log(fileString.split('\n').length-1);  //split at \n and count -1 b/c counting starts at 0
}
 }); 
 
 //if you want you could have reversed your logic, if(! err) { convert your file to a string and count newlines
                                            //       else {return error} same result
