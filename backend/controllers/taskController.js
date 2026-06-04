const db = require("../config/db");

/* Get Tasks For User */

const getTasks = (req, res) => {

  const employeeId = req.params.employeeId;

  const sql = `
    SELECT *
    FROM tasks
    WHERE employee_id = ?
    ORDER BY id DESC
  `;

  db.query(sql, [employeeId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

/* Start Task */

const startTask = (req, res) => {

  const taskId = req.params.id;

  db.query(
    "UPDATE tasks SET status='In Progress' WHERE id=?",
    [taskId],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Task Started",
      });

    }
  );

};

/* Request Completion */

const completeTask = (req, res) => {

  const taskId = req.params.id;

  db.query(
    `
    UPDATE tasks
    SET
      status='Completed Request',
      admin_approval='Pending'
    WHERE id=?
    `,
    [taskId],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Completion Request Sent",
      });

    }
  );

};

/* Admin - Pending Approvals */

const getPendingApprovals = (req, res) => {

  const sql = `
    SELECT *
    FROM tasks
    WHERE status='Completed Request'
    ORDER BY id DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

/* Admin - Approve Task */

const approveTask = (req, res) => {

  const taskId = req.params.id;

  db.query(
    `
    UPDATE tasks
    SET
      status='Completed',
      admin_approval='Approved'
    WHERE id=?
    `,
    [taskId],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Task Approved",
      });

    }
  );

};

/* Admin - Reject Task */

const rejectTask = (req, res) => {

  const taskId = req.params.id;

  db.query(
    `
    UPDATE tasks
    SET
      status='Rework Required',
      admin_approval='Rejected'
    WHERE id=?
    `,
    [taskId],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Task Rejected",
      });

    }
  );

};

module.exports = {
  getTasks,
  startTask,
  completeTask,
  getPendingApprovals,
  approveTask,
  rejectTask,
};