import * as Router from "koa-router";
import apiV1 from "./api/v1";
import pageRouter from "./page";
const router = new Router();
router.use(apiV1.routes());
router.use(pageRouter.routes());
export default router;
