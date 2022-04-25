const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const authRoutes = require('./auth.routes');
router.use('/auth', authRoutes)

const apiRoutes = require("./api.routes");
router.use("/api", apiRoutes)

module.exports = router;
