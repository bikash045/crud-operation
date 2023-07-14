const mongo = require("mongoose");
const schema = require("../model/user.model");
const { response } = require("express");
const userSchema = schema.user;
mongo.connect("mongodb://localhost:27017/crud");

const storeData = async (req, res) => {
    const data = req.body;
    const collection = new userSchema(data);
    const storeRes = await collection.save();
    res.json(storeRes)
}

const fetchData = async (req,res)=>{
  const findData = await userSchema.find();
  res.json(findData);

}
 const fetchById = async (req, res) => {
  const id = req.params.id;
  const data = await userSchema.findById(id);
  res.json(data);
}
const updateById = async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  const dataRes = await userSchema.updateOne({_id:id},data);
  res.json(dataRes);
}

const deleteData= async (req, res) => {
  const data = await userSchema.deleteMany();
  res.json(data);
}

const deleteById= async (req, res) => {
  const id = req.params.id;
  const data = await userSchema.deleteOne({"_id":id});
  res.json(data);
}

  module.exports = {
    storeData:storeData,
    fetchData:fetchData,
    fetchById:fetchById,
    updateById:updateById,
    deleteData:deleteData,
    deleteById:deleteById
  }