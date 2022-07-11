const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')


conexao.connect(e => {
    if(e){
        console.log(e)
    }else{

        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log('rodou'))
        
    }
})
