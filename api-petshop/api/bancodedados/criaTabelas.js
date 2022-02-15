const modeloTabelaFornecedor = require ('./modeloTabelaFornecedor')

modeloTabelaFornecedor
    .sync()
    .then(() => console.log("Tabela criada com sucesso."))
    .catch(erro => console.log(erro)) // na aula, o cara fez '.catch(console.log)'  SO ISSO!!!