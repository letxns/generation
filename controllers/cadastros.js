const Cadastro = require('../models/cadastros')

module.exports = app => {
        app.get('/cadastro/:id', (req, res) => {
            const id = parseInt(req.params.id)
            Cadastro.buscaId(id, res)

            // res.send('cadastrou mermo')            
        })

        app.post('/cadastro', (req, res) => {
            const cadastro = req.body

            Cadastro.adiciona(cadastro, res)
        })

        app.put('/cadastro/:id', (req, res) => {
            const id = parseInt(req.params.id)
            const valores = req.body

            Cadastro.altera(id, valores, res)
        })

        app.delete('/cadastro/:id', (req, res) => {
            const id = parseInt(req.params.id)

            Cadastro.deleta(id, res)
        })

}