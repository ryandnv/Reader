class Table {
    constructor(arr) {
        this.header = arr[0]; // aqui definimos qual linha da tabela ele vai pegar
        arr.shift(); //funcao que remove sempre o primeiro elemento. aqui ja o salvamos no header
        this.rows = arr;
    }
    //o get transforma o metodo em um "atributo", obrigatoriamente retornando algo(NECESSARIO)
    get RowCount(){  //ele e muito util para manter os dados aatualizados caso tenham alteracoes, retornando sempre o dado real
        return this.rows.length
    }
    get ColumnCount(){  
        return this.header.length
    }
}


module.exports = Table;