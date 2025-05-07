const pool = require("../config/db");

const isUserValid = async (userId, password) => {
    try {
      const query = `SELECT EXISTS(SELECT 1 FROM tb_user WHERE user_id = ? AND password = ?) AS isValid`;
      const result = await pool.query(query, [userId, password]);
  
      console.log('Query Result:', result);  // 결과 로그
  
      if (result[0][0].isValid === 1) {
        return true;
      } else {
        console.log('Invalid credentials: No match found');
        return false;
      }
    } catch (error) {
      console.error('Error in user validation:', error);
      throw error;
    }
  };
  

module.exports = {isUserValid};