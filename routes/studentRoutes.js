const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const checkPermissions = require("../utils/checkPermissions");

router
  .route("/")
  .get(authenticateUser, getAllStudents)
  .post(authenticateUser, authorizePermissions("admin"), createStudent);
router
  .route("/:id")
  .get(authenticateUser, getSingleStudent)
  .patch(authenticateUser, authorizePermissions("admin"), updateStudent)
  .delete(authenticateUser, authorizePermissions("admin"), deleteStudent);

module.exports = router;
