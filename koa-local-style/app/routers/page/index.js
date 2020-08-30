/*
 * @Author: hucheng
 * @Date: 2020-06-22 07:22:14
 * @Description: here is des
 */
const Router = require("koa-router");
const router = new Router();
router.get("/", async (ctx) => {
    let title = "hello koa2";
    await ctx.render("index", {
        title,
    });
});
router.get("/login", async (ctx) => {
    await ctx.render("login", {
        title: "login",
    });
});
router.get("/index", async (ctx) => {
    let title = "hello koa2";
    await ctx.render("index", {
        title,
    });
});
router.get("/userList", async (ctx) => {
    let title = "用户增删改查";
    await ctx.render("userList", {
        title,
    });
});
router.get("/todo", async (ctx) => {
    ctx.body = await render("todo.html");
});
module.exports = router;
