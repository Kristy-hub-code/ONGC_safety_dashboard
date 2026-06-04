const db = require("../config/db");


 const login = (req, res) => {

  console.log("Request Body:", req.body);

  const { employee_id, password } = req.body;

  const sql =
    "SELECT * FROM employees WHERE employee_id=? AND password=?";

  db.query(sql, [employee_id, password], (err, result) => {

    console.log("Query Result:", result);

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    return res.status(200).json({
      success: true,
      user: result[0],
    });

  });
};

module.exports = { login };