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
module.exports = router;