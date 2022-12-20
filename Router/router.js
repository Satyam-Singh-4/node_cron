const router = require("express").Router();

const controller = require("../Controllers/controller");

router.post("/save", controller.add);
//router.delete("/remove", controller.deleteUser);

module.exports = router;
