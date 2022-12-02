const express = require("express");
const cardsModel = require("../../schema/Cards/schemaCards");
const app = express();
const router = express.Router();

router.post("/", async (request, response) => {
    const card = new cardsModel(request.body);

    try {
        const res = await card.save();
        if(res){
            response.status(201).json(card);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/boss/:id_boss", async (request, response) => {
    var cards = await cardsModel.find({boss: request.params.id_boss});
    
    if(!cards) {
        response.status(404).json({message : "No cards found"});
        return;
    }

    response.status(200).send(cards);
})

router.get("/", async (request, response) => {
    var cards = await cardsModel.find({});
    
    if(!cards) {
        response.status(404).json({message : "No cards found"});
        return;
    }

    response.status(200).send(cards);
})

router.get("/:name", async (request, response) => {
    var card = await cardsModel.find({ name : request.params.name });

    if(!card) {
        response.status(404).json({message : "Card not found"});
        return;
    }

    response.status(200).json(card[0]);
})

module.exports = router;