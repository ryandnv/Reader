const fs = require("fs");
const util = require("util");

class Reader{
    
    constructor(){
        this.reader = util.promisify();
    }

    Read(filepath){

        fs.readFile(filepath, "utf-8", ((error, data) => {
            if(error){
                console.log(error);
            }else{
                console.log(data);
            }
        })
        )

    }
}

module.exports = Reader;