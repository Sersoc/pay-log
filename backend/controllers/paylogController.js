const pool = require("../config/db");

const searchAllLog = async(userId)=>{
    try {
        const query = `SELECT * FROM tb_paylog WHERE (id = (SELECT id FROM tb_user WHERE user_id = ?))`;
        const result = await pool.query(query,[userId]);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {searchAllLog};