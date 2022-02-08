const executaQuery = require ('../infra/database/queries')

class Atendimento { 
    adiciona(atendimento) {
        const sql = "INSERT INTO atendimento SET ?";
        return executaQuery(sql, atendimento);
    }
    altera(idCliente, valores) {
        const sql = "Update atendimento set ? where id = ?";
        return executaQuery(sql, [valores, idCliente]);
    }
    lista() {
        const sql = "Select * from atendimento";
        return executaQuery(sql);
    }
    busca(idCliente) {
        const sql = `Select * from atendimento where id = ${idCliente}`;
        return executaQuery(sql);
    } 
    deleta(idCliente){
        const sql = `Delete from atendimento where id = ${idCliente}`;
        return executaQuery(sql);
    }
}

module.exports = new Atendimento()