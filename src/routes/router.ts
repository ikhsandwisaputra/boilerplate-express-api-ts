import { Router} from "express";
import { userController } from "../controller/controller";
const router = Router();

// router.get('/', userController.getAllUsers);
router.get('/', userController.getAllUsers);

export default router;