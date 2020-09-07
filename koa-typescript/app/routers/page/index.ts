/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */
import * as Router from "koa-router";
const router = new Router();
router.get("/", async (ctx) => {
    const title = "hello koa2";
    //@ts-ignore
    await ctx.render("index", {
        title,
    });
});
router.get("/login", async (ctx) => {
    //@ts-ignore
    await ctx.render("login", {
        title: "login",
    });
});
router.get("/index", async (ctx) => {
    const title = "hello koa2";
    //@ts-ignore
    await ctx.render("index", {
        title,
    });
});
router.get("/userList", async (ctx) => {
    const title = "用户增删改查";
    //@ts-ignore
    await ctx.render("userList", {
        title,
    });
});
export default router;
