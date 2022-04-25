const router = require("express").Router();

router.put("/users", (req, res, next) => {
  res.status(200).json("Users put: All good in here");
});

router.get("/users", (req, res, next) => {
  res.status(200).json("Users get: All good in here");
});

router.post("/upload", (req, res, next) => {
  res.status(200).json("Upload: All good in here");
});

module.exports = router;