class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimento()
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS "Atendimentos" (id int NOT NULL IDENTITY(1, 1), cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
    
        this.conexao.query(sql, err => {
            if (err){
                console.log(err);
            } else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas