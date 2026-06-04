const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const shiftRoutes = require("./routes/shiftRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */

app.use("/api/auth", authRoutes);

app.use(
  "/api/shifts",
  shiftRoutes
);

app.use(
  "/api/tasks",
  taskRoutes
);

app.use(
  "/api/reports",
  reportRoutes
);

app.listen(5000, () => {
  console.log(
    "Server Running on Port 5000"
  );
});