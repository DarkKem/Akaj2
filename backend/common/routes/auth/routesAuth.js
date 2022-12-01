const express = require("express");
const schemaUser = require("../../schema/User/schemaUser");
const app = express();
const router = express.Router();
router.post("/login", async (req, res) => {
    try {
        const body = req.body
        const userSearch = await schemaUser.findOne({username: body?.username})
        if (!userSearch) {
            return res.status(404).send(`User ${body?.username} Not Found`)
        }
        return res.status(200).json(userSearch)
    } catch (e) {
        console.error(e)
        return res.status(500).json(e)
    }

})
module.exports = router