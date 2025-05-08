const express = require("express");
const jwt = require("jsonwebtoken");
const {isUserValid, signInUser} = require("../controllers/signInController");

const router = express.Router();

router.get("/:userId/:password", async (req, res) => {
    const userId = req.params.userId;
    const userPassword = req.params.password;
    
    console.log(`Received Login Request: userId = ${userId}, password = ${userPassword}`);

    try {
        const response = await isUserValid(userId, userPassword);

        if (!response) {
            console.log(`Login Failed for user ${userId}, password ${userPassword}`);
            return res.status(401).send('Login Fail');
        }

        const token = jwt.sign({ userId: userId }, 'token_key', { expiresIn: '1h' });
        console.log('Token generated:', token);

        return res.json({ token });
    } catch (error) {
        console.log('Error during login:', error.message);
        return res.status(500).send('Internal Server Error');
    }
});

router.post("/:userId/:password", async(req,res)=>{
    const {userId,password} = req.params;
    const {name} = req.query;
    try {
       const response = await signInUser(userId,password,name);
       res.status(200).json({ ok: true });
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = router;
