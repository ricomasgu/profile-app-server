const router = require("express").Router();

router.post("/signup", (req, res, next) => {
  res.status(200).json("Signup: All good in here");
});

router.post("/login", (req, res, next) => {
  res.status(200).json("Login: All good in here");
});

router.get("/verify", (req, res, next) => {
  res.status(200).json("Verify: All good in here");
});

module.exports = router;