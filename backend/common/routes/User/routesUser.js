const express = require("express");
const userModel = require("../../schema/User/schemaUser");
const app = express();
const router = express.Router();

router.post("/", async (request, response) => {
    const user = new userModel(request.body);

    try {
        const res = await user.save();
        if(res){
            response.status(201).json(user);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/", async (request, response) => {
    var users = await userModel.find({});
    
    if(!users) {
        response.status(404).json({message : "No users found"});
        return;
    }

    response.status(200).send(users);
})

router.get("/:username", async (request, response) => {
    var user = await userModel.find({ username : request.params.username });

    if(!user) {
        response.status(404).json({message : "User not found"});
        return;
    }

    response.status(200).json(user[0]);
})

module.exports = router;