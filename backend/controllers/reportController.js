const db = require("../config/db");

const submitReport = (req, res) => {

  const {
    employee_id,
    task_id,
    report_text,
    completion_percent,
    remarks,
  } = req.body;

  const sql = `
    INSERT INTO reports
    (
      employee_id,
      task_id,
      report_text,
      completion_percent,
      remarks
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      employee_id,
      task_id,
      report_text,
      completion_percent,
      remarks,
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Report Submitted",
      });

    }
  );

};

module.exports = {
  submitReport,
};
