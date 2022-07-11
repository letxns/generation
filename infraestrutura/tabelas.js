class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarCadastros()
    }

    criarCadastros(){
        const sql = 'CREATE TABLE IF NOT EXISTS Cadastros (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, dataNascimento datetime NOT NULL, periodo varchar(5), curso varchar(10), dataCadastro datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('tabela')
            }
        })
    }
}

module.exports = new Tabelas