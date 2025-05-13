const express = require("express");
const {searchAllLog,insertLog,getSum} = require("../controllers/paylogController");

const router = express.Router();

router.get("/:userId",async (req,res) => {
    const {userId} = req.params;

    try {
        const data = await searchAllLog(userId);

        return res.json({values:data});
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
});

router.get("/all/:userId", async(req,res) =>{
    const {userId} = req.params;

    try{
        const data = await getSum(userId);

        return res.json({values:data});
    }catch(error){
        console.log(error.message);
        return res.status(500).send('Err Occur');
    }
})
router.post("/:userId",async(req,res) => {
    const {userId} = req.params;
    const {amount,tag,description} = req.query;

    try {
        const response = await insertLog(userId,amount,tag,description);
        if (response){
            return true;
        }else{
            return false;
        }
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('internal server err');
    }

})
module.exports = router;