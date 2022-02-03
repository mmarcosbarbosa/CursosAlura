class Tabelas {
    init(conexao) {
        console.log("Classe tabela.");
        this.conexao = conexao;

        this.criaAtendimento();
    } 

    criaAtendimento(){
        const sql = 'CREATE TABLE if not exists atendimento  (ID int NOT NULL AUTO_INCREMENT, cliente varchar(50), pet varchar(30), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, observacoes text, PRIMARY KEY(id))'
 
        this.conexao.query(sql, (erro) => {
            if (erro) console.log(erro);
            else console.log ("Tabela criada.");
        })
    }
}

module.exports = new Tabelas;