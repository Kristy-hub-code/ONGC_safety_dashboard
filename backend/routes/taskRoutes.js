const express = require("express");

const router = express.Router();

const {
  getTasks,
  startTask,
  completeTask,
  getPendingApprovals,
  approveTask,
  rejectTask,
} = require("../controllers/taskController");

/* Admin Routes */

router.get(
  "/pending/approvals",
  getPendingApprovals
);

router.put(
  "/approve/:id",
  approveTask
);

router.put(
  "/reject/:id",
  rejectTask
);

/* User Routes */

router.put(
  "/start/:id",
  startTask
);

router.put(
  "/complete/:id",
  completeTask
);

router.get(
  "/:employeeId",
  getTasks
);

module.exports = router;