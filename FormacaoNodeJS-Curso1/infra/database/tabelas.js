class Tabelas {
    init(conexao) {
        console.log("Classe tabela.");
        this.conexao = conexao;

        this.criaAtendimento();
        this.criaPet();
    } 

    criaAtendimento(){
        const sql = 'CREATE TABLE if not exists atendimento  (ID int NOT NULL AUTO_INCREMENT, cliente varchar(11), pet varchar(30), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, observacoes text, PRIMARY KEY(id))'
 
        this.conexao.query(sql, (erro) => {
            if (erro) console.log(erro);
            else console.log ("Tabela atendimento criada.");
        })
    }

    criaPet() {
        const sql = 'CREATE TABLE if not exists pet (id int NOT NULL AUTO_INCREMENT, nome varchar(30) not null, imagem varchar(200), primary key(id))'

        this.conexao.query(sql, erro => {
            if (erro) console.log(erro);
            else console.log ("Tabela pet criada.");
        })
    }
}

module.exports = new Tabelas;