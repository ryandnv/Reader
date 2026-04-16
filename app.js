const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

var reader = new Reader();

async function main() {
    var data = await reader.Read("./users.csv");
    var processedData = Processor.Process(data);

    try {
        var users = new Table(processedData);
        console.log(users.rows)
    } catch (error) {
        console.log(`${error} Ocorrou um erro`)
    }
    
}

main();