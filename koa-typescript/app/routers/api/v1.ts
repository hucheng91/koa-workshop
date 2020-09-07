import * as Router from "koa-router";
const router = new Router();
const BASE_API = "v1";
import { login } from "../../controllers/login";
import {
    list,
    detail,
    addUser,
    update,
    removeUser,
} from "../../controllers/user";
import { download, downloadAll } from "../../controllers/downloadFile";
router.post(`/api/${BASE_API}/login`, login);
router.get(`/api/${BASE_API}/download/:name`, download);
router.get(`/api/${BASE_API}/downloadAll`, downloadAll);

router.get(`/api/${BASE_API}/user`, list);
router.get(`/api/${BASE_API}/user/:id`, detail);
router.post(`/api/${BASE_API}/user`, addUser);
router.put(`/api/${BASE_API}/user/:id`, update);
router.delete(`/api/${BASE_API}/user`, removeUser);

export default router;
