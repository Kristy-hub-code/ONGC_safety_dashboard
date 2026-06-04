const db = require("../config/db");

const assignShift = (req, res) => {

  const {
    employee_id,
    department,
    shift_date,
    shift_type,
    project_name,
    location,
  } = req.body;

  const sql = `
    INSERT INTO shifts
    (
      employee_id,
      department,
      shift_date,
      shift_type,
      project_name,
      location
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      employee_id,
      department,
      shift_date,
      shift_type,
      project_name,
      location,
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Shift Assigned Successfully",
      });

    }
  );

};

const getTodayShift = (req, res) => {

  const employeeId = req.params.employeeId;

  const sql = `
    SELECT *
    FROM shifts
    WHERE employee_id = ?
    ORDER BY shift_date DESC
    LIMIT 1
  `;

  db.query(sql, [employeeId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0] || null);

  });

};

module.exports = {
  assignShift,
  getTodayShift,
};