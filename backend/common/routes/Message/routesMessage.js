const express = require("express");
const messageSchema = require("../../schema/Message/schemaMessage");
const app = express();
const router = express.Router();
router.post("/", async (request, response) => {
    const message = new messageSchema(request.body);

    try {
        const res = await message.save();
        if (res) {
            response.status(201).json(message);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});
router.get("/", async (req, res) => {
    try {
        const messageList = await messageSchema.find({
            $or: [{
                from: '6386a69ab8970b40ee233b2e',
            }, {
                to: '6386a69ab8970b40ee233b2e'
            }
            ]
        }).populate("from").populate("to");
        return res.status(200).json({messageList})
    } catch (e) {
        return res.status(500).json(e)
    }
})
module.exports = router;