const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento){
        const sql = "INSERT INTO Atendimentos VALUES ?";

        conexao.query(sql, atendimento, (err, result) => {
            if (err){
                console.log(err);
            } else {
                console.log(result);
            }
        })
    }
}

module.exports = new Atendimento