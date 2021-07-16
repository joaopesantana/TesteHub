const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(err => {
    if(err){
        console.log('Erro', err);
    } else {
        console.log('Banco de Dados conectado');

        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3001, () => console.log('Servidor rodando na porta 3001'))
    }
})

