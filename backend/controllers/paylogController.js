const pool = require("../config/db");

const searchAllLog = async (userId) => {
  try {
    const query = `SELECT * FROM tb_paylog WHERE (id = (SELECT id FROM tb_user WHERE user_id = ?))`;
    const [rows] = await pool.query(query, [userId]);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const insertLog = async (userId, amount, tag, description) => {
  try {
    const query = `
  INSERT INTO tb_paylog (id, amount, tag, description,pay_date)
  SELECT id, ?, ?, ?, now()
  FROM tb_user
  WHERE user_id = ?
`;
    const [rows] = await pool.query(query, [ amount, tag, description,userId]);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};
module.exports = { searchAllLog, insertLog };
