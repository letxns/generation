const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Cadastro {
    adiciona(cadastro, res){
        const dataCadastro = moment().format('YYYY-MM-DD, h:mm:ss')
        const dataNascimento = moment(cadastro.dataNascimento).format('YYYY-MM-DD')
        const idadeEhValida = moment().subtract(6570, 'days').calendar()
        
        // tentando implementar a validacao
        // const idadeEhValida = moment(dataNascimento).subtract(6570, 'days')
        // verificar se em validacoes o campo valido deve ser preenchido com "!idadeEhValida"

        const validacoes = [
            {
                nome: 'idade',
                valido: idadeEhValida,
                mensagem: 'Idade deve ser maior de 18 anos'
            },
        ]

        if(!idadeEhValida){
            erros.push({texto: 'Idade deve ser maior de 18 anos'})
        }

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
            const cadastroDatado = {...cadastro, dataNascimento, dataCadastro}
        
            const sql = 'INSERT INTO Cadastros SET ?'

            conexao.query(sql, cadastroDatado, (erro, resultado) => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(cadastro)
                }
            })
        }        
    }

    buscaId(id, res){
        const sql = `SELECT * FROM Cadastros WHERE id=${id}`

        conexao.query(sql, id, (erro, resultados) => {
            const cadastro = resultados
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json(cadastro)
            }
        })
    }

    altera(id, valores, res){
        if(valores.dataNascimento){
            valores.dataNascimento = moment(valores.dataNascimento).format('YYYY-MM-DD')
        }

        const sql = 'UPDATE Cadastros SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Cadastros WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new Cadastro 