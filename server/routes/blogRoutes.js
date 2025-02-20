const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:blogID").get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
