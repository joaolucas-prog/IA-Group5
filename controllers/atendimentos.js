const Adiciona = require('../models/adiciona')
const Altera = require('../models/altera')
const AlteraPalavra = require('../models/palavrachave')
const RespostaSimilar = require('../models/respostasimilar')
const Assunto = require('../models/assunto')
const Deleta = require('../models/deleta')
const Lista = require('../models/lista')
const BuscaPorId = require('../models/buscaPorId')

module.exports = app =>{
    app.get('/orientacao', (req, res) => {
        Lista.lista(res)
    })

    app.get('/orientacao/:id', (req, res) => {
        const id = parseInt(req.params.id)

        BuscaPorId.buscaPorId(id, res)
    })

    app.post('/orientacao', (req,res) => {
        const atendimento = req.body

        Adiciona.adiciona(atendimento, res)
        
    })

    app.patch('/orientacao/:id', (req,res) => {
        const id=parseInt(req.params.id)
        const valores = req.body

        Altera.altera(id,valores, res)
    })

    app.put('/orientacao/palavra/:id', (req,res) => {
        const id=parseInt(req.params.id)
        const valores = req.body

        AlteraPalavra.altera(id,valores, res)
    })

    app.put('/orientacao/resposta_similar/:id', (req,res) => {
        const id=parseInt(req.params.id)
        const valores = req.body

        RespostaSimilar.altera(id,valores, res)
    })

    app.put('/orientacao/assunto/:id', (req,res) => {
        const id=parseInt(req.params.id)
        const valores = req.body

        Assunto.altera(id,valores, res)
    })

    app.delete('/orientacao/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Deleta.deleta(id,res)
    })
}

