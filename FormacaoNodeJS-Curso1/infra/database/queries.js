const conexao = require('./conexao')

const executaQuery = (sql, parametros='') => { 
    return new Promise( (resolve, reject) => {
        conexao.query(sql, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros);
            } else {
                resolve(resultados);
            }
        })
            
    })    
}

module.exports = executaQuery