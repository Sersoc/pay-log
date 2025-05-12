const pool = require("../config/db");

const isUserValid = async (userId, password) => {
  try {
    const query = `SELECT EXISTS(SELECT 1 FROM tb_user WHERE user_id = ? AND password = ?) AS isValid`;
    const result = await pool.query(query, [userId, password]);

    // console.log("Query Result:", result); // 결과 로그

    if (result[0][0].isValid === 1) {
      return true;
    } else {
      console.log("Invalid credentials: No match found");
      return false;
    }
  } catch (error) {
    console.error("Error in user validation:", error);
    throw error;
  }
};

const signInUser = async (userId, password, name) => {
  try {
    const query = `INSERT INTO tb_user (user_id,password,user_name) VALUES (?,?,?)`;

    const result = await pool.query(query, [userId, password, name]);

    console.log("Result", result);
  } catch (error) {
    throw error;
  }
};

const selectUserInfo = async (userId) => {
  try {
    const query = `SELECT user_id,user_name FROM tb_user WHERE (user_id = ?)`;
    const [rows] = await pool.query(query,[userId]);
    console.log("select user : ",rows);
    return rows;
  } catch (error) {
    throw error;
  }
};
module.exports = { isUserValid, signInUser, selectUserInfo };
