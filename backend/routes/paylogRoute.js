const express = require("express");
const {searchAllLog} = require("../controllers/paylogController");

const router = express.Router();

router.get("/:userId",async (req,res) => {
    const {userId} = req.params;

    try {
        const data = await searchAllLog(userId);

        return data;
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;