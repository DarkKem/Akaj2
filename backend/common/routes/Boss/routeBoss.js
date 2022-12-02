const express = require("express");
const bossModel = require("../../schema/Boss/schemaBoss");
const app = express();
const router = express.Router();

router.post("/", async (request, response) => {
    const boss = new bossModel(request.body);

    try {
        const res = await boss.save();
        if(res){
            response.status(201).json(boss);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/", async (request, response) => {
    var boss = await bossModel.find();
    
    if(!boss) {
        response.status(404).json({message : "No boss found"});
        return;
    }

    response.status(200).send(boss);
})

router.get("/:id", async (request, response) => {
    var boss = await bossModel.find({ _id : request.params.id });

    if(!boss) {
        response.status(404).json({message : "boss not found"});
        return;
    }

    response.status(200).json(boss[0]);
})

module.exports = router;