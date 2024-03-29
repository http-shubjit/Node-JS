const express = require("express");
const router = express.Router();

const {
  handleCreateNewUser,
  handleDeleteUserbyId,
  handleUpdateuserbyId,
  handlegetAlluser,
  handlegetUserbyId,
} = require("../controller/user");

router.route("/").post(handleCreateNewUser).get(handlegetAlluser);

router
  .route("/:id")
  .get(handlegetUserbyId)
  .patch(handleUpdateuserbyId)
  .delete(handleDeleteUserbyId);

module.exports = router;
