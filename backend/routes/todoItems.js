const router = require('express').Router();

const todoItems = require('../models/todoItems');
// importar o model do todo
const todoItemsModel = require('../models/todoItems');

// Primeira Rota - Adicionar o item "Todo" no Banco de Dados
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
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
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems) // retornar todos os itens do Banco de Dados no formato JSON
    }catch(err){
        res.json(err)
    }
})

// Atualizar o Item
router.put('/api/item/:id', async (req, res)=>{
    try{
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item atualizado');
    }catch(err){
        res.json(err);
    }
})

// Deleter o item no Banco de Dados
router.delete('/api/item/:id', async (req, res)=>{
    try {
        // encontrar o item pelo id e deletar ele
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item deletado');
    }catch(err){
        res.json(err);
    }
})

// Exportar o Router
module.exports = router;