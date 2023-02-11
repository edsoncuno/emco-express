import { Router } from 'express'
import { StakeholderExpressGetAll } from '../../../controllers/stakeholder/infrastructure/StakeholderExpressGetAll';
import { StakeholderExpressPost } from "../../../controllers/stakeholder/infrastructure/StakeholderExpressPost";
import { StakeholderExpressGet } from "../../../controllers/stakeholder/infrastructure/StakeholderExpressGet";
import { StakeholderExpressDelete } from "../../../controllers/stakeholder/infrastructure/StakeholderExpressDelete";

const router = Router();

const expressGetAll = new StakeholderExpressGetAll(router);
expressGetAll.use();

const expressPost = new StakeholderExpressPost(router);
expressPost.use();

const expressGet = new StakeholderExpressGet(router);
expressGet.use();

const expressDelete = new StakeholderExpressDelete(router);
expressDelete.use();

export default router;