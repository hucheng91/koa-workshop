const Router = require("koa-router");
const router = new Router();
const BASE_API = "v1";
const { login } = require("../../controllers/login");
const {
    list,
    detail,
    addUser,
    update,
    removeUser,
} = require("../../controllers/user");
const { download, downloadAll } = require("../../controllers/downloadFile");
router.post(`/api/${BASE_API}/login`, login);
router.get(`/api/${BASE_API}/download/:name`, download);
router.get(`/api/${BASE_API}/downloadAll`, downloadAll);

router.get(`/api/${BASE_API}/user`, list);
router.get(`/api/${BASE_API}/user/:id`, detail);
router.post(`/api/${BASE_API}/user`, addUser);
router.put(`/api/${BASE_API}/user/:id`, update);
router.delete(`/api/${BASE_API}/user`, removeUser);

module.exports = router;
