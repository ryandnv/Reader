class Table {
    constructor(arr) {
        this.header = arr[0]; // aqui definimos qual linha da tabela ele vai pegar
        arr.shift(); //funcao que remove sempre o primeiro elemento. aqui ja o salvamos no header
        this.rows = arr;
    }
}

module.exports = Table;