const { Router } = require("express");
const controller = require("../Controllers/Controllers");

const router = Router();

router.post("/product", controller.p_product);
router.get("/product", controller.g_product);

router.post("/category", controller.p_category);
router.get("/category", controller.g_category);

module.exports = router;
