const express = require("express");
const mongoose = require("mongoose");
const leaderRouter = express.Router();
const leaderSchema = require("../schemas/leaderSchema");

//parsing the incoming requests with JSON
leaderRouter.use(express.json());

//to create a collection of a particular database of MongoDB
const Leader = new mongoose.model("Leader", leaderSchema);

//GET A LEADER SCHEMA
leaderRouter.get("/", (req, res) => {
    Leader.find({featured: false}, (err, data) => {
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

// GET A LEADERSCHEMA by ID
leaderRouter.get("/:id", (req, res) => {
    Leader.find({_id: req.params.id}, (err, data) => {
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
leaderRouter.post("/", async(req, res) => {
    const newLeader = new Leader(req.body);
    //console.log(req.body);
    await newLeader.save((err) => {
        if(err){
            res.status(500).json({
                error: err,
            })

        }else{
            res.status(200).json({
                message: "Leaders were inserted successfully",
            })
        }
    })
})

// POST MANY LEADER SCHEMA
leaderRouter.post("/101", async(req, res) => {
    await Leader.insertMany(req.body, (err) => {
        if(err){
            res.status(500).json({
                error: err,
            })
        }else{
            res.status(200).json({
                message: "leaders were inserted successfully",
            })
        }
    })
})

// PUT or UPDATE PROMOTION
leaderRouter.put("/:id", (req, res) => {
    Leader.updateOne({_id: req.params.id}, {
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
                message: "Leaders was updated successfully",
            })
        }
    })
})

// DELETE A LEADER SCHEMA
leaderRouter.delete("/:id", (req, res) => {
    Leader.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send("There was server side erro");
        }
        else{
            res.send("A schema is deleted successfully");
        }
    })

})

module.exports = leaderRouter;
