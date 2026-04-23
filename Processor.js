class Processor {
    static Process (data) {
        var run = data.split(/\r?\n/); // o símbolo ? logo após o \r diz ao JavaScript que a presença daquele caractere específico é opcional
        var rows = [];

        run.forEach(row => {
          var arr = row.split(",")  //aqui iremos separar as linhas por array. o param define pelo que elas serao dividas
          rows.push(arr); //push adiciona um dado para o array
        });

        return rows
        
    }
}

module.exports = Processor;