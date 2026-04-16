class Processor {
    static Process (data) {
        var run = data.split("\r\n"); // \n representa a quebra de linha
        var rows = [];

        run.forEach(row => {
          var arr = row.split(",")  //aqui iremos separar as linhas por array. o param define pelo que elas serao dividas
          rows.push(arr); //push adiciona um dado para o array
        });

        return rows

        console.log(rows);
        
    }
}

module.exports = Processor;