const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'ASDlkj123\\][',
    server: 'localhost',
    database: 'Teste',
    options: {           
        encrypt: false
    }
};

const conexao = sql.connect(config, (err) => {
    if (err){
        console.log(err);
    }
    //const result = await mssql.query`select * from TBL_CLIENTE`
    //console.dir(result.recordset)
});

module.exports = conexao