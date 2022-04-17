const express = require("express");
const mongoose = require("mongoose");
const promoRouter = express.Router();
const promoSchema = require("../schemas/promoSchema");

//parsing the incoming requests with JSON
promoRouter.use(express.json());

//to create a collection of a particular database of MongoDB
const Promomotion = new mongoose.model("Promotion", promoSchema);

//GET A PROMOTION SCHEMA
promoRouter.get("/", (req, res) => {
    Promomotion.find({featured: false}, (err, data) => {
        if(err){
            res.send(err)
        }
        else{
           // result: data;
            res.send(data + "\nfound successfully");
            res.send();
        }
    })
})

//GET A PROMOTION SCHEMA By ID
promoRouter.get("/:id", (req, res) => {
    Promomotion.find({_id: req.params.id}, (err, data) => {
        if(err){
            res.send(err)
        }
        else{
           // result: data;
            res.send(data);
            res.send("found successfully");
        }
    })
})

// POST A PROMOTION SCHEMA
promoRouter.post("/", async(req, res) => {
    const newPromotion = new Promomotion(req.body);
    //console.log(req.body);
    await newPromotion.save((err) => {
        if(err){
            res.status(500).json({
                error: err,
            })
            // console.log(err);
            // res.send(err);
        }else{
            res.status(200).json({
                message: "Promotions were inserted successfully",
            })
        }
    })
})

// POST MANY PROMOTION SCHEMA
promoRouter.post("/101", async(req, res) => {
    await Promomotion.insertMany(req.body, (err) => {
        if(err){
            res.status(500).json({
                error: err,
            })
        }else{
            res.status(200).json({
                message: "Promotions were inserted successfully",
            })
        }
    })
})

// PUT PROMOTION
promoRouter.put("/:id", (req, res) => {
    Promomotion.updateOne({_id: req.params.id}, {
        $set: {
            featured: true
        }
    }, (err) => {
        if(err){
            res.status(500).json({
                error: "serverside error",
            })
        }else{
            res.status(200).json({
                message: "Promotions was updated successfully",
            })
        }
    })
})

// DELETE A PROMOTION SCHEMA
promoRouter.delete("/:id", (req, res) => {
    Promomotion.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send("There was server side erro");
        }
        else{
            res.send("A schema is deleted successfully");
        }
    })

})

module.exports = promoRouter;