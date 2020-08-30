const Koa = require('koa');
const  Router = require('koa-router');
const  router = new Router();
const BASE_API = 'v1';
const { login } = require('../../controllers/login');
const {list, detail, add, update, remove } = require('../../controllers/user');
const { download, downloadAll } = require('../../controllers/downloadFile');
router.get('/', async (ctx) => {
    ctx.body = 'ok';
});
router.post(`/api/${BASE_API}/login`, login);
router.get(`/api/${BASE_API}/download/:name`, download);
router.get(`/api/${BASE_API}/downloadAll`, downloadAll);


router.get(`/api/${BASE_API}/user`, list);
router.get(`/api/${BASE_API}/user/:id`, detail);
router.post(`/api/${BASE_API}/user`, add);
router.put(`/api/${BASE_API}/user/:id`, update);
router.delete(`/api/${BASE_API}/user`, remove);



module.exports = router;