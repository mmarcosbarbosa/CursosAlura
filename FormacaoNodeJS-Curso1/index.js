const customExpress = require('./config/customExpress'); 

// conectando na base
const conexao = require('./infra/database/conexao'); 

// criando as tabelas
const Tabelas = require('./infra/database/tabelas');

conexao.connect( erro => {
    if (erro) console.log (erro);
    else {        
        console.log ("Conexão realizada com sucesso."); 

        Tabelas.init(conexao);

        app = customExpress();
        app.listen(3000, () => console.log("Servidor rodando na porta 3000."));
    }
});



