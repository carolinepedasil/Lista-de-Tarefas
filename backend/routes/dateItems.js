const router = require('express').Router();

const dateItems = require('../models/dateItems');
// importar o model do date
const dateItemsModel = require('../models/dateItems');

// Primeira Rota - Adicionar o item "Date" no Banco de Dados
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new dateItemsModel({
            item: req.body.item
        })
        // salvar esse item no banco de dados
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

// Segunda Rota - Obter os dados do Banco de Dados
router.get('/api/items', async (req,res)=>{
    try{
        const allDateItems = await dateItemsModel.find({});
        res.status(200).json(allDateItems) // retornar todos os itens do Banco de Dados no formato JSON
    }catch(err){
        res.json(err)
    }
})

// Atualizar o Item
router.put('/api/item/:id', async (req, res)=>{
    try{
        const updateItem = await dateItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item atualizado');
    }catch(err){
        res.json(err);
    }
})

// Deleter o item no Banco de Dados
router.delete('/api/item/:id', async (req, res)=>{
    try {
        // encontrar o item pelo id e deletar ele
        const deleteItem = await dateItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item deletado');
    }catch(err){
        res.json(err);
    }
})

// Exportar o Router
module.exports = router;