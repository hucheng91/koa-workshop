const Router = require("koa-router");
const apiV1 = require("./api/v1");
const pageRouter = require("./page");
const router = new Router();
router.use(apiV1.routes());
router.use(pageRouter.routes());
module.exports = router;
