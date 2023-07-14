const express = require('express');
const router = express.Router();
const database = require('../database/database.user')

router.post('/', (req,res)=>{
      database.storeData(req,res);
});

router.get('/',(req,res)=>{
   database.fetchData(req,res);
});

router.get('/:id',(req,res)=>{
   database.fetchById(req,res);
});

router.put('/:id' ,(req,res)=>{
      database.updateById(req,res)
});

router.delete('/',(req,res)=>{
      database.deleteData(req,res)
});

router.delete('/:id',(req,res)=>{
      database.deleteById(req,res)
});


module.exports = router;

